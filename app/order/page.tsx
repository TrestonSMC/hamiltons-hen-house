"use client";

import { useState } from "react";

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#F5F0E7] text-[#171717]">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
          Order Request
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-7xl">
          Order Fresh Eggs
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B4B4B]">
          Submit an order request and we’ll confirm availability, pickup, and
          total price.
        </p>

        <div className="mt-12 rounded-[35px] border border-[#D8CBB6] bg-[#EFE7DA] p-8 shadow-xl">
          {submitted ? (
            <div>
              <h2 className="text-3xl font-black">Order Request Sent!</h2>
              <p className="mt-4 text-[#4B4B4B]">
                Thanks for your order. Hamilton’s Hen House will reach out soon
                to confirm availability and pickup details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="font-semibold">Name</label>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-[#D8CBB6] bg-[#F5F0E7] px-4 py-3 outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="font-semibold">Phone</label>
                  <input
                    required
                    type="tel"
                    className="mt-2 w-full rounded-2xl border border-[#D8CBB6] bg-[#F5F0E7] px-4 py-3 outline-none"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-[#D8CBB6] bg-[#F5F0E7] px-4 py-3 outline-none"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="font-semibold">What would you like?</label>
                <select
                  required
                  className="mt-2 w-full rounded-2xl border border-[#D8CBB6] bg-[#F5F0E7] px-4 py-3 outline-none"
                >
                  <option value="">Select product</option>
                  <option>Chicken Eggs</option>
                  <option>Quail Eggs</option>
                  <option>Mixed Egg Pack</option>
                </select>
              </div>

              <div>
                <label className="font-semibold">Quantity</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-[#D8CBB6] bg-[#F5F0E7] px-4 py-3 outline-none"
                  placeholder="Example: 2 dozen"
                />
              </div>

              <div>
                <label className="font-semibold">Pickup Notes</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-[#D8CBB6] bg-[#F5F0E7] px-4 py-3 outline-none"
                  placeholder="Any questions or preferred pickup time?"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#171717] px-8 py-4 font-semibold text-white transition hover:bg-[#2A2A2A]"
              >
                Submit Order Request
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}