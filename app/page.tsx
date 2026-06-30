import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Chicken Eggs",
    image: "/chicken-eggs.png",
    text: "Farm fresh chicken eggs from happy hens raised locally.",
  },
  {
    title: "Quail Eggs",
    image: "/quail-eggs.png",
    text: "Small batch speckled quail eggs, perfect for cooking and snacks.",
  },
  {
    title: "Pickled Quail Eggs",
    image: "/pickled-quail-eggs.png",
    text: "Hand-packed pickled quail eggs made in small batches with bold farm flavor.",
  },
];

export default function HomePage() {
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

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,154,103,0.12),transparent_55%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#B89A67]">
              Local • Fresh • Family Raised
            </p>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              Fresh Eggs From Our Little Hen House
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4B4B4B]">
              Hamilton’s Hen House is a small local farm focused on fresh
              chicken and quail eggs, happy animals, and bringing real farm
              freshness back to the table.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-[#171717] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#2A2A2A]"
              >
                View Products
              </Link>

              <Link
                href="/order"
                className="rounded-full border border-[#171717] px-8 py-4 font-semibold transition hover:bg-[#171717] hover:text-white"
              >
                Order Now
              </Link>
            </div>
          </div>

          {/* VIDEO HERO */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[50px] bg-[#B89A67]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-[#D8CBB6] bg-[#171717] shadow-2xl">
              <video
                src="/farm-hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/5] h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
                  Hamilton’s Hen House
                </p>

                <h3 className="mt-2 text-3xl font-black text-white">
                  Farm Fresh From Home
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-y border-[#D8CBB6] bg-[#EFE7DA] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-[#B89A67]">
                Featured Farm Goods
              </p>

              <h3 className="mt-3 text-4xl font-black md:text-5xl">
                Fresh From The Farm
              </h3>
            </div>

            <Link
              href="/products"
              className="rounded-full border border-[#171717] px-6 py-3 font-semibold transition hover:bg-[#171717] hover:text-white"
            >
              View All Products
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[30px] border border-[#D8CBB6] bg-[#F5F0E7] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E7DDCF]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <div className="mb-5 h-2 w-20 rounded-full bg-[#B89A67] transition-all duration-300 group-hover:w-28" />

                  <h4 className="text-2xl font-black">{item.title}</h4>

                  <p className="mt-4 leading-relaxed text-[#4B4B4B]">
                    {item.text}
                  </p>

                  <Link
                    href="/order"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#6B4F2D] transition hover:gap-4"
                  >
                    Order Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-[#B89A67]">
              Meet Hamilton
            </p>

            <h3 className="mt-4 text-5xl font-black leading-tight">
              The Pig Behind The Name
            </h3>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-[#4B4B4B]">
              Hamilton’s Hen House started with one baby pig who needed a home,
              a few chickens raised as personal pets, and a wholesome farm
              friendship that turned into something bigger.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#4B4B4B]">
              Hamilton and his brother Whiskey would lay outside with the
              chickens, letting them climb on their backs and rest beside them.
              That simple connection inspired the heart of the farm.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-block rounded-full bg-[#171717] px-8 py-4 font-semibold text-white transition hover:bg-[#2A2A2A]"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171717] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B89A67]">
            Hamilton’s Hen House
          </p>

          <h3 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Fresh Eggs. Local Farm. Real Quality.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Order directly from our farm and enjoy locally raised eggs from
            happy hens and quail.
          </p>

          <Link
            href="/order"
            className="mt-10 inline-block rounded-full bg-[#B89A67] px-10 py-5 font-semibold text-[#171717] transition hover:scale-105"
          >
            Order Fresh Eggs
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#111111] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div>
            <h4 className="text-2xl font-black">Hamilton’s Hen House</h4>

            <p className="mt-1 text-sm text-white/60">
              Farm Fresh Eggs • Local Farm
            </p>
          </div>

          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/order">Order</Link>
          </div>

          <p className="text-sm text-white/40">
            © 2026 Hamilton’s Hen House
          </p>
        </div>
      </footer>
    </main>
  );
}