"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const products = [
  {
    name: "Farm Fresh Chicken Eggs",
    price: "$6 / dozen",
    category: "Chicken Eggs",
    image: "/chicken-eggs.png",
    desc: "Locally raised chicken eggs from Hamilton’s Hen House.",
  },
  {
    name: "Quail Eggs",
    price: "$5 / dozen",
    category: "Quail Eggs",
    image: "/quail-eggs.png",
    desc: "Small batch speckled quail eggs, perfect for cooking, snacks, and specialty meals.",
  },
  {
    name: "Pickled Quail Eggs",
    price: "$12 / jar",
    category: "Pickled Goods",
    image: "/pickled-quail-eggs.png",
    desc: "Hand-packed pickled quail eggs made in small batches with bold farm flavor.",
  },
  {
    name: "Fertilized Quail Eggs",
    price: "Coming Soon",
    category: "Hatching Eggs",
    image: "/quail-eggs.png",
    desc: "Fertilized quail eggs for customers interested in starting or growing their own covey.",
  },
  {
    name: "Male Quail",
    price: "Coming Soon",
    category: "Live Birds",
    image: "/quail-eggs.png",
    desc: "Male quail available seasonally as the farm grows.",
  },
  {
    name: "Female Quail",
    price: "Coming Soon",
    category: "Live Birds",
    image: "/quail-eggs.png",
    desc: "Female quail available seasonally for egg laying or homestead setups.",
  },
];

const categories = [
  "All Products",
  "Chicken Eggs",
  "Quail Eggs",
  "Pickled Goods",
  "Hatching Eggs",
  "Live Birds",
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.desc.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

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
          Fresh From The Farm
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-7xl">
          Our Products
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B4B4B]">
          Browse everything currently available and what’s coming soon. Use the
          search and category filters to quickly find eggs, pickled goods,
          hatching eggs, or live birds.
        </p>

        {/* SEARCH + FILTERS */}
        <div className="mt-10 rounded-[30px] border border-[#D8CBB6] bg-[#EFE7DA] p-5 shadow-lg">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-2xl border border-[#D8CBB6] bg-[#F5F0E7] px-5 py-4 outline-none placeholder:text-[#6B4F2D]/60"
          />

          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
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

        {/* SCROLL WHEEL PRODUCT ROW */}
        <div className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black">All Products</h2>
              <p className="mt-2 text-[#4B4B4B]">
                {filteredProducts.length} item
                {filteredProducts.length === 1 ? "" : "s"} found
              </p>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6">
            {filteredProducts.map((product) => (
              <div
                key={product.name}
                className="group w-[310px] shrink-0 overflow-hidden rounded-[30px] border border-[#D8CBB6] bg-[#EFE7DA] shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
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

                  <p className="mt-4 min-h-[96px] leading-relaxed text-[#4B4B4B]">
                    {product.desc}
                  </p>

                  <Link
                    href="/order"
                    className="mt-8 inline-block rounded-full bg-[#171717] px-6 py-3 font-semibold text-white transition hover:bg-[#2A2A2A]"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="rounded-[30px] border border-[#D8CBB6] bg-[#EFE7DA] p-10 text-center">
              <h3 className="text-2xl font-black">No products found</h3>
              <p className="mt-3 text-[#4B4B4B]">
                Try searching another product or choosing a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}