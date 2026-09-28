import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function BrushCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 223 157"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#CD7A1D" strokeLinecap="round" fill="none">
        <line x1="24" y1="-12" x2="250" y2="170" strokeWidth="12" />
        <line x1="59" y1="-12" x2="285" y2="170" strokeWidth="18" />
        <line x1="94" y1="-12" x2="320" y2="170" strokeWidth="10" />
        <line x1="129" y1="-12" x2="355" y2="170" strokeWidth="16" />
        <line x1="164" y1="-12" x2="390" y2="170" strokeWidth="12" />
      </g>
    </svg>
  );
}

export default function HeroTwo() {
  return (
    <section className="w-full bg-[#20252A]">
      <div className="mx-auto w-full max-w-[1920px] [container-type:inline-size]">
        {/* Canvas: 1920x891 scaled with --s at lg+, stacked column below */}
        <div className="relative flex flex-col gap-8 overflow-hidden px-6 py-14 sm:px-10 lg:block lg:h-[calc(891*var(--s))] lg:p-0 lg:[--s:calc(100cqw/1920)]">
          {/* ===== DESKTOP (lg+): bgtwo.png already has the text, 50% OFF ring and orange corners ===== */}
          <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
            <Image
              src="/images/bgtwo.png"
              alt=""
              fill
              sizes="(min-width: 1920px) 1920px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Screen-reader / SEO text for the words that live inside the image */}
          <h1 className="text-[34px] font-black uppercase leading-[42px] text-white lg:sr-only">
            The best way to stuff your wallet.
          </h1>
          <p className="hidden lg:sr-only lg:block">
            Super Delicious. Today&apos;s Best Deal: 50% off.
          </p>

          {/* ===== MOBILE / TABLET (below lg): live text version ===== */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(50%_50%_at_91.67%_8.33%,#7F7F7F_0%,#2A3035_100%)] lg:hidden" />
          <BrushCorner className="pointer-events-none absolute right-0 top-0 z-0 h-auto w-[110px] lg:hidden" />
          <BrushCorner className="pointer-events-none absolute bottom-0 left-0 z-0 h-auto w-[120px] rotate-180 lg:hidden" />

          <p className="relative z-20 font-inter text-[24px] leading-[30px] text-[#CC791D] sm:text-[30px] lg:hidden">
            Super Delicious
          </p>
          <p className="relative z-20 font-inter text-[18px] leading-6 text-[#CC791D] sm:text-[22px] lg:hidden">
            Today&apos;s Best Deal
          </p>
          <div className="relative z-20 h-[155px] w-[223px] lg:hidden">
            <svg
              viewBox="0 0 223 155"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <ellipse
                cx="111"
                cy="78"
                rx="106"
                ry="70"
                transform="rotate(-6 111 78)"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
              />
            </svg>
            <span className="absolute left-[15.5%] top-[19.4%] font-inter text-[69px] leading-none text-white">
              50%
            </span>
            <span className="absolute left-[16.3%] top-[55.6%] font-inter text-[54px] leading-none text-white">
              OFF
            </span>
          </div>

          {/* ===== SHARED (mobile + desktop): pasta, Order Now, contact ===== */}
          {/* Pasta image */}
          <div className="relative z-10 aspect-[1300/743] w-full drop-shadow-[0_21px_33px_rgba(0,0,0,0.25)] lg:absolute lg:left-[calc(649*var(--s))] lg:top-[calc(81*var(--s))] lg:w-[calc(1300*var(--s))]">
            <Image
              src="/images/pagetwo.png"
              alt="Spaghetti twirled on a fork above a plate of pasta"
              fill
              priority
              sizes="(min-width: 1024px) 68vw, 100vw"
              className="object-contain"
            />
          </div>

          {/* Order Now (sizes in em so it scales with the font size) */}
          <Link
            href="#"
            className="relative z-20 flex h-[3.3333em] w-[12.2em] items-center rounded-full bg-[#CD7A1D] font-montserrat text-[15px] font-bold uppercase text-white transition-opacity hover:opacity-90 lg:absolute lg:left-[calc(286*var(--s))] lg:top-[calc(547*var(--s))] lg:text-[length:calc(15*var(--s))]"
          >
            <span className="ml-[0.4667em] flex h-[2.4em] w-[2.4em] shrink-0 items-center justify-center rounded-full bg-white text-[#CD7A1D]">
              <ArrowRight className="h-[0.9em] w-[0.9em]" strokeWidth={3} />
            </span>
            <span className="ml-[0.7333em] leading-none">Order Now</span>
          </Link>

          {/* Contact */}
          <div className="relative z-20 text-left lg:absolute lg:right-[calc(317*var(--s))] lg:top-[calc(806*var(--s))] lg:text-right">
            <Link
              href="tel:6097913583"
              className="block font-montserrat text-[22px] font-extrabold leading-none text-[#CD7A1D] lg:text-[length:calc(26*var(--s))]"
            >
              609-791-3583
            </Link>
            <p className="mt-2 font-montserrat text-[13px] font-semibold uppercase tracking-[0.05em] text-white lg:mt-[calc(8*var(--s))] lg:text-[length:calc(16*var(--s))]">
              www.exemple.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}