import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
      <section className="border-b border-[#D8CBB6]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
              Our Story
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Meet Hamilton
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-[#4B4B4B]">
              Hamilton’s Hen House started with one pig, a few chickens, and a
              simple idea — people deserve to know where their food comes from.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#4B4B4B]">
              What started as a small personal homestead quickly became
              something bigger after seeing how much joy the animals brought not
              only to us, but everyone around them.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-[#B89A67]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-[#D8CBB6] bg-white shadow-2xl">
              <div className="aspect-[4/5] w-full bg-[#E7DDCF]">
                <Image
                  src="/hamilton.jpg"
                  alt="Hamilton the Pig"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
            How It Started
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            The Pig That Started It All
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-relaxed text-[#4B4B4B]">
            <p>
              Hamilton was originally brought to a local school as a baby pig
              so kids could spend time with him, pet him, and learn about farm
              animals. He had a personality that instantly stood out — playful,
              sweet, and incredibly gentle.
            </p>

            <p>
              When the school needed to find him a new home, we stepped in
              without hesitation. We had completely fallen in love with him and
              knew he belonged with us.
            </p>

            <p>
              Before Hamilton’s Hen House ever became a business, we already
              had chickens simply as pets and for our own food. What surprised
              us most was the relationship that formed between the pigs and the
              birds.
            </p>

            <p>
              Hamilton and his brother Whiskey would spend hours laying outside
              with the chickens, letting them climb onto their backs and rest
              beside them in the sun. It became something that felt wholesome,
              peaceful, and strangely special.
            </p>

            <p>
              Over time, friends and family became interested not just in the
              animals, but in the food itself. People loved knowing exactly
              where their eggs came from, how the animals were treated, and the
              care that went into everything.
            </p>

            <p>
              That’s when we realized this could become more than a small
              backyard homestead. Hamilton’s Hen House was built around the idea
              that local farming should feel personal, transparent, and
              connected to the people it feeds.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="border-y border-[#D8CBB6] bg-[#EFE7DA] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-[40px] border border-[#D8CBB6] bg-white shadow-2xl">
              <div className="aspect-[4/5] bg-[#E7DDCF]">
                <Image
                  src="/founders.jpg"
                  alt="Founders of Hamilton's Hen House"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
                The Founders
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Built From Love For Animals & Simple Living
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[#4B4B4B]">
                Hamilton’s Hen House was founded by two people who simply loved
                animals and wanted to build something meaningful together.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-[#4B4B4B]">
                What began with caring for a few backyard animals turned into a
                growing local farm focused on fresh food, transparency, and
                treating every animal with love and respect.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-[#4B4B4B]">
                Every carton of eggs represents the lifestyle we’ve built around
                our animals, our home, and our belief that food should feel
                connected to real people again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
              Life Around The Farm
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Moments From Hamilton’s Hen House
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {["/farm1.jpg", "/farm2.jpg", "/farm3.jpg"].map(
              (image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-[30px] border border-[#D8CBB6] bg-white shadow-xl"
                >
                  <div className="aspect-[4/5] bg-[#E7DDCF]">
                    <Image
                      src={image}
                      alt={`Farm photo ${index + 1}`}
                      width={800}
                      height={1000}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171717] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B89A67]">
            Hamilton’s Hen House
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            From Our Farm To Your Table
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Fresh eggs raised with care by animals that are part of the family.
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