import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F0E7] px-6 text-[#171717]">
      <section className="w-full max-w-2xl rounded-[35px] border border-[#D8CBB6] bg-[#EFE7DA] p-10 text-center shadow-xl md:p-14">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#B89A67] text-4xl">
          ✓
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
          Payment Successful
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Thank You For Your Order!
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#4B4B4B]">
          Your payment was received successfully. We’ll prepare your hatching
          eggs and use the contact information provided during checkout if we
          need to reach you.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-[#171717] px-8 py-4 font-semibold text-white transition hover:bg-[#2A2A2A]"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}