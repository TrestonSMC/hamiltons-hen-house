"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const products = [
  {
    name: "Hatching Quail Eggs",
    price: "Contact for availability",
    category: "Hatching Eggs",
    image: "/quail-eggs.png",
    desc: "Fresh, fertile quail eggs carefully collected from our breeding flock and ready for incubation.",
  },
];

const categories = ["All Products", "Hatching Eggs"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchTerm = search.toLowerCase().trim();

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm) ||
        product.desc.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm);

      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-[#F5F0E7] text-[#171717]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[#D8CBB6] bg-[#F5F0E7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Hamilton's Hen House"
              width={60}
              height={60}
              className="rounded-full"
              priority
            />

            <div>
              <h1 className="text-xl font-black tracking-wide md:text-2xl">
                Hamilton’s Hen House
              </h1>

              <p className="text-xs uppercase tracking-[0.25em] text-[#B89A67] md:text-sm">
                Farm Fresh Eggs
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="transition hover:text-[#B89A67]">
              Home
            </Link>

            <Link href="/about" className="transition hover:text-[#B89A67]">
              About
            </Link>

            <Link href="/products" className="transition hover:text-[#B89A67]">
              Products
            </Link>

            <Link href="/order" className="transition hover:text-[#B89A67]">
              Order Now
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
          Available Now
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-7xl">
          Hatching Quail Eggs
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B4B4B]">
          Start or grow your own quail flock with fertile hatching eggs
          carefully collected from our local breeding covey.
        </p>

        {/* SEARCH + FILTERS */}
        <div className="mt-10 rounded-[30px] border border-[#D8CBB6] bg-[#EFE7DA] p-5 shadow-lg">
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            className="w-full rounded-2xl border border-[#D8CBB6] bg-[#F5F0E7] px-5 py-4 outline-none placeholder:text-[#6B4F2D]/60"
          />

          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-[#171717] bg-[#171717] text-white"
                    : "border-[#D8CBB6] bg-[#F5F0E7] text-[#171717] hover:border-[#171717]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-14">
          <div className="mb-5">
            <h2 className="text-3xl font-black">Available Products</h2>

            <p className="mt-2 text-[#4B4B4B]">
              {filteredProducts.length} item
              {filteredProducts.length === 1 ? "" : "s"} found
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.name}
                  className="group overflow-hidden rounded-[30px] border border-[#D8CBB6] bg-[#EFE7DA] shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E7DDCF]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <div className="mb-4 inline-flex rounded-full bg-[#B89A67]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6B4F2D]">
                      {product.category}
                    </div>

                    <h3 className="text-2xl font-black">{product.name}</h3>

                    <p className="mt-3 text-xl font-bold text-[#6B4F2D]">
                      {product.price}
                    </p>

                    <p className="mt-4 leading-relaxed text-[#4B4B4B]">
                      {product.desc}
                    </p>

                    <Link
                      href="/order"
                      className="mt-8 inline-block rounded-full bg-[#171717] px-6 py-3 font-semibold text-white transition hover:bg-[#2A2A2A]"
                    >
                      Order Hatching Eggs
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[30px] border border-[#D8CBB6] bg-[#EFE7DA] p-10 text-center">
              <h3 className="text-2xl font-black">No products found</h3>

              <p className="mt-3 text-[#4B4B4B]">
                Try another search or reset the product category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}