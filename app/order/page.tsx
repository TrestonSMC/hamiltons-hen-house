"use client";

import Link from "next/link";
import { useState } from "react";

const PRICE_PER_DOZEN = 15;

export default function OrderPage() {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = quantity * PRICE_PER_DOZEN;

  async function handleCheckout() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      if (!data.url) {
        throw new Error("Stripe did not return a checkout URL.");
      }

      window.location.href = data.url;
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Something went wrong. Please try again.",
      );

      setLoading(false);
    }
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) => Math.min(10, currentQuantity + 1));
  }

  return (
    <main className="min-h-screen bg-[#F5F0E7] text-[#171717]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Link
          href="/products"
          className="text-sm font-semibold text-[#6B4F2D] transition hover:text-[#171717]"
        >
          ← Back to products
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
              Secure Online Checkout
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
              Hatching Quail Eggs
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B4B4B]">
              Order fertile quail hatching eggs carefully collected from our
              breeding flock. Each order includes 12 eggs.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#D8CBB6] bg-[#EFE7DA] p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6B4F2D]">
                  Quantity
                </p>

                <p className="mt-2 text-2xl font-black">12 eggs</p>
              </div>

              <div className="rounded-2xl border border-[#D8CBB6] bg-[#EFE7DA] p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6B4F2D]">
                  Price
                </p>

                <p className="mt-2 text-2xl font-black">$15</p>
              </div>

              <div className="rounded-2xl border border-[#D8CBB6] bg-[#EFE7DA] p-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6B4F2D]">
                  Payment
                </p>

                <p className="mt-2 text-2xl font-black">Secure</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#D8CBB6] bg-white/40 p-5">
              <p className="font-bold">Hatching egg notice</p>

              <p className="mt-2 leading-relaxed text-[#4B4B4B]">
                We carefully package every order, but hatch rates cannot be
                guaranteed because incubation conditions and shipping handling
                are outside our control.
              </p>
            </div>
          </div>

          <div className="rounded-[35px] border border-[#D8CBB6] bg-[#EFE7DA] p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B89A67]">
              Your Order
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Fertile Quail Hatching Eggs
            </h2>

            <p className="mt-3 leading-relaxed text-[#4B4B4B]">
              One dozen fertile hatching eggs per order.
            </p>

            <div className="mt-8 border-y border-[#D8CBB6] py-6">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="font-bold">Number of dozens</p>

                  <p className="mt-1 text-sm text-[#4B4B4B]">
                    {quantity * 12} eggs total
                  </p>
                </div>

                <div className="flex items-center overflow-hidden rounded-full border border-[#C8B898] bg-[#F5F0E7]">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1 || loading}
                    className="flex h-12 w-12 items-center justify-center text-xl font-bold transition hover:bg-[#E7DDCF] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span className="flex h-12 min-w-12 items-center justify-center border-x border-[#C8B898] px-4 text-lg font-black">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    disabled={quantity >= 10 || loading}
                    className="flex h-12 w-12 items-center justify-center text-xl font-bold transition hover:bg-[#E7DDCF] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-semibold">Egg subtotal</span>

              <span className="text-3xl font-black">${total.toFixed(2)}</span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#4B4B4B]">
              Your contact information and shipping address will be collected
              securely during checkout.
            </p>

            {error && (
              <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm font-semibold text-red-700">
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={handleCheckout}
              disabled={loading}
              className="mt-8 w-full rounded-full bg-[#171717] px-8 py-4 font-semibold text-white transition hover:bg-[#2A2A2A] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Opening Secure Checkout..." : "Continue to Checkout"}
            </button>

            <p className="mt-4 text-center text-xs text-[#4B4B4B]">
              Secure payment processing powered by Stripe
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}