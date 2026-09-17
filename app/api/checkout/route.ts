import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: "Stripe has not been configured." },
        { status: 500 },
      );
    }

    const stripe = new Stripe(stripeSecretKey);

    const body = await request.json();
    const requestedQuantity = Number(body.quantity);

    if (
      !Number.isInteger(requestedQuantity) ||
      requestedQuantity < 1 ||
      requestedQuantity > 10
    ) {
      return NextResponse.json(
        { error: "Please select between 1 and 10 dozen." },
        { status: 400 },
      );
    }

    const requestOrigin = request.headers.get("origin");
    const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const siteUrl =
      requestOrigin ||
      configuredSiteUrl ||
      "http://localhost:3000";

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          quantity: requestedQuantity,
          price_data: {
            currency: "usd",
            unit_amount: 1500,

            product_data: {
              name: "Hatching Quail Eggs",
              description: "One dozen fertile quail hatching eggs",
            },
          },
        },
      ],

      billing_address_collection: "required",

      shipping_address_collection: {
        allowed_countries: ["US"],
      },

      phone_number_collection: {
        enabled: true,
      },

      customer_creation: "always",

      allow_promotion_codes: true,

      metadata: {
        product: "Hatching Quail Eggs",
        eggs_per_order: "12",
        dozens_ordered: requestedQuantity.toString(),
        total_eggs: (requestedQuantity * 12).toString(),
      },

      success_url: `${siteUrl}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/order?canceled=true`,
    });

    if (!checkoutSession.url) {
      return NextResponse.json(
        { error: "Stripe did not create a checkout URL." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      url: checkoutSession.url,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 },
    );
  }
}