"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Promo = { value: string; title: string; image: string };
type Tab = { name: string; count: string; promos: [Promo, Promo] };

const TABS: Tab[] = [
  {
    name: "Cake & Milk",
    count: "(65 items)",
    promos: [
      { value: "50", title: "Cake", image: "/images/cake.jpg" },
      { value: "40", title: "Milk", image: "/images/milk.jpg" },
    ],
  },
  {
    name: "Fresh Meat",
    count: "(30 items)",
    promos: [
      { value: "30", title: "Chicken", image: "/images/promo/chicken.jpg" },
      { value: "25", title: "Beef", image: "/images/promo/beef.jpg" },
    ],
  },
  {
    name: "Vegetables",
    count: "(25 items)",
    promos: [
      { value: "20", title: "Salad", image: "/images/promo/salad.jpg" },
      { value: "35", title: "Tomato", image: "/images/promo/tomato.jpg" },
    ],
  },
  {
    name: "Apple & Mango",
    count: "(45 items)",
    promos: [
      { value: "15", title: "Apple", image: "/images/promo/apple.jpg" },
      { value: "45", title: "Mango", image: "/images/promo/mango.jpg" },
    ],
  },
  {
    name: "Strawberry",
    count: "(68 items)",
    promos: [
      { value: "10", title: "Strawberry", image: "/images/promo/strawberry.jpg" },
      { value: "60", title: "Berry Mix", image: "/images/promo/berry-mix.jpg" },
    ],
  },
];

function PromoCard({ promo }: { promo: Promo }) {
  return (
    <div
      role="tabpanel"
      className="relative aspect-[416/520] w-full overflow-hidden rounded-[5px] bg-[#1C1C1C] lg:aspect-auto"
    >
      <Image
        src={promo.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 416px, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />

      {/* Dark circle behind the discount */}
      <span className="pointer-events-none absolute -left-10 -top-20 h-[200px] w-[200px] rounded-full bg-black/40" />

      {/* Discount */}
      <div className="absolute left-5 top-[22px] flex items-start font-[Arial,sans-serif] uppercase text-white">
        <span className="flex h-[60px] items-center text-[54px] font-bold leading-[65px] tracking-[0.48px]">
          {promo.value}
        </span>
        <span className="ml-[4.6px] mt-2 flex h-[43.8px] flex-col justify-center text-[19px] font-normal leading-[23px] tracking-[0.48px]">
          <span>%</span>
          <span>off</span>
        </span>
      </div>

      {/* Bottom gradient + title + button */}
      <div className="absolute inset-x-0 bottom-0 flex h-[138.39px] flex-col items-center gap-[13.4px] bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.5)_33.33%,rgba(0,0,0,0.2)_66.67%,rgba(0,0,0,0)_100%)] pt-[30px]">
        <h4 className="flex h-[25px] items-center font-[Arial,sans-serif] text-[22px] font-bold leading-[26px] tracking-[0.48px] text-white">
          {promo.title}
        </h4>
        <Link
          href="#"
          className="flex h-[40px] w-[118.28px] items-center justify-center rounded-[5px] bg-[#F53E32] font-[Arial,sans-serif] text-[14px] font-bold capitalize tracking-[0.48px] text-white transition-colors hover:bg-[#e0362b]"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default function PromoCategories() {
  const [active, setActive] = useState(0);
  const current = TABS[active];

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-[60px] sm:py-[80px]">
      {/* Decorative background mushroom illustration on the top right */}
      <Image
        src="/images/mashroom.png"
        alt=""
        width={50}
        height={50}
        className="pointer-events-none absolute right-[4%] top-[50px] hidden xl:block opacity-60"
      />

      <div className="mx-auto grid w-full max-w-[1296px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Category tabs */}
        <div
          role="tablist"
          aria-orientation="vertical"
          className="grid grid-cols-2 gap-3 sm:col-span-2 sm:grid-cols-3 lg:col-span-1 lg:grid-cols-1 lg:grid-rows-6 lg:gap-[14.14px]"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="flex min-h-[74.86px] flex-col items-center rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] px-2 pt-[18px] text-center transition-colors hover:border-[#F53E32]/40"
            >
              <span
                className={`flex h-[23px] items-center font-poppins text-[16px] font-medium leading-[23px] transition-colors ${
                  i === active ? "text-[#F53E32]" : "text-[#2B2B2D]"
                }`}
              >
                {tab.name}
              </span>
              <span className="mt-[5.86px] flex h-[17px] items-center font-poppins text-[12px] leading-[17px] text-[#7A7A7A]">
                {tab.count}
              </span>
            </button>
          ))}

          <Link
            href="#"
            className="flex min-h-[74.86px] items-center justify-center rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] font-[Arial,sans-serif] text-[16px] font-bold tracking-[0.48px] text-[#F53E32] transition-colors hover:border-[#F53E32]/40"
          >
            View More
          </Link>
        </div>

        {/* Two promo cards for the active tab */}
        {current.promos.map((promo) => (
          <PromoCard key={`${active}-${promo.title}`} promo={promo} />
        ))}
      </div>
    </section>
  );
}