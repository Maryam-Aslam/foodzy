"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShoppingCart, Star } from "lucide-react";

type Product = {
  id: number;
  brand: string;
  title: string;
  image: string;
  badge: { label: string; color: string };
  price: string;
  oldPrice: string;
  rating: number; // % of stars filled (80 = 4 of 5)
  progress: number; // % width of red progress bar
  sold: string;
};

const TABS = ["Featured", "Popular", "New added"] as const;

const PRODUCTS: Product[] = [
  {
    id: 1,
    brand: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    image: "/images/a.jpg",
    badge: { label: "Save 35%", color: "#3BB77E" },
    price: "$238.85",
    oldPrice: "$245.8",
    rating: 80,
    progress: 49.6, // 116px of 234px, as in the Figma spec
    sold: "Sold: 90/120",
  },
  {
    id: 2,
    brand: "Hodo Foods",
    title: "Angie’s Boomchickapop Sweet and womnies",
    image: "/images/b.jpg",
    badge: { label: "Sale", color: "#67BCEE" },
    price: "$238.85",
    oldPrice: "$245.8",
    rating: 80,
    progress: 49.6,
    sold: "Sold: 90/120",
  },
  {
    id: 3,
    brand: "Hodo Foods",
    title: "Foster Farms Takeout Crispy Classic",
    image: "/images/c.jpg",
    badge: { label: "Best sale", color: "#F59758" },
    price: "$238.85",
    oldPrice: "$245.8",
    rating: 80,
    progress: 49.6,
    sold: "Sold: 90/120",
  },
  {
    id: 4,
    brand: "Hodo Foods",
    title: "Blue Diamond Almonds Lightly Salted",
    image: "/images/d.jpg",
    badge: { label: "Save 15%", color: "#F74B81" },
    price: "$238.85",
    oldPrice: "$245.8",
    rating: 80,
    progress: 49.6,
    sold: "Sold: 90/120",
  },
];

function Stars({ percent }: { percent: number }) {
  const row = (
    <div className="flex w-[60px] shrink-0">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={12} fill="currentColor" stroke="none" className="shrink-0" />
      ))}
    </div>
  );
  return (
    <div className="relative h-[12px] w-[60px]">
      <div className="text-[#E4E4E4]">{row}</div>
      <div
        className="absolute inset-y-0 left-0 overflow-hidden text-[#FDC040]"
        style={{ width: `${percent}%` }}
      >
        {row}
      </div>
    </div>
  );
}

export default function DailyBestSells() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Featured");

  return (
    <section className="w-full bg-white py-[60px]">
      <div className="mx-auto w-full max-w-[1610px] px-3">
        {/* Header: title + tabs */}
        <div className="flex min-h-[82.39px] flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <h3 className="-mt-px flex h-10 items-center font-quicksand text-[26px] font-bold leading-[38px] text-[#253D4E] sm:text-[32px]">
            Daily Best Sells
          </h3>

          <div className="flex items-center gap-5 pt-[18.39px] xl:pr-[19.7px]">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex h-4 items-center font-quicksand text-[16px] font-semibold leading-4 transition-colors hover:text-[#3BB77E] ${
                  activeTab === tab ? "text-[#3BB77E]" : "text-[#253D4E]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Body: banner + product cards */}
        <div className="flex flex-col items-center gap-6 xl:flex-row xl:items-start">
          {/* Banner */}
          <div className="relative h-[420px] w-full shrink-0 overflow-hidden rounded-[15px] bg-[#E7E7E7] xl:h-[520px] xl:w-[378.5px]">
            <Image
              src="/images/image.png"
              alt="Bring nature into your home"
              fill
              sizes="(min-width: 1280px) 378px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(229,220,137,0.26)]" />

            <div className="relative z-10 flex flex-col pl-6 pt-[49px] sm:pl-[50px]">
              <h2 className="flex h-[146px] w-[242.65px] items-center font-quicksand text-[40px] font-bold leading-[48px] text-white">
                Bring nature into your home
              </h2>
              <Link
                href="#"
                className="mt-[99px] flex h-[31.59px] w-[103.61px] items-center gap-[4.5px] rounded-[4px] bg-[#F53E32] pl-[13px] font-quicksand text-[12px] font-bold leading-[16px] tracking-[0.5px] text-white transition-colors hover:bg-[#e0362b]"
              >
                Shop Now
                <ArrowRight size={11} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="relative flex flex-wrap justify-center gap-6 xl:flex-nowrap xl:justify-start">
            {/* Slider arrows (desktop) */}
            <button
              type="button"
              aria-label="Previous"
              className="absolute left-5 top-[170.69px] z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-[#F2F3F4] text-[#7E7E7E] transition-colors hover:bg-[#3BB77E] hover:text-white xl:flex"
            >
              <ArrowLeft size={16} strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="absolute right-5 top-[170.69px] z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-[#F2F3F4] text-[#7E7E7E] transition-colors hover:bg-[#3BB77E] hover:text-white xl:flex"
            >
              <ArrowRight size={16} strokeWidth={2} />
            </button>

            {PRODUCTS.map((p) => (
              <article
                key={p.id}
                className="relative h-[521.38px] w-[278px] shrink-0 overflow-hidden rounded-[15px] border border-[#ECECEC] bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                {/* Image area + badge */}
                <div className="absolute inset-x-0 top-0 h-[251px] bg-white">
                  <div className="absolute left-[25px] right-[25px] top-[25px] h-[226px] overflow-hidden rounded-[15px]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="226px"
                      className="object-contain"
                    />
                  </div>
                  <span
                    className="absolute left-0 top-0 flex h-[31px] items-start rounded-br-[20px] rounded-tl-[15px] pl-5 pr-[19.5px] pt-[7px] font-lato text-[12px] leading-[15px] text-white"
                    style={{ background: p.badge.color }}
                  >
                    {p.badge.label}
                  </span>
                </div>

                {/* Brand */}
                <div className="absolute left-[20px] top-[256px] flex h-[15px] items-center whitespace-nowrap font-lato text-[12px] leading-[24px] text-[#ADADAD]">
                  {p.brand}
                </div>

                {/* Title */}
                <h4 className="absolute left-[20px] right-[20px] top-[280px] flex h-[39.19px] items-center font-quicksand text-[16px] font-bold leading-[19px] text-[#253D4E]">
                  <span>{p.title}</span>
                </h4>

                {/* Rating */}
                <div className="absolute left-[20px] top-[329.38px]">
                  <Stars percent={p.rating} />
                </div>

                {/* Prices */}
                <div className="absolute left-[20px] top-[363.38px] flex h-[23px] items-center font-quicksand text-[18px] font-bold leading-[24px] text-[#3BB77E]">
                  {p.price}
                </div>
                <div className="absolute left-[97.28px] top-[367.38px] flex h-[18px] items-center font-quicksand text-[14px] font-bold leading-[24px] text-[#ADADAD] line-through">
                  {p.oldPrice}
                </div>

                {/* Progress */}
                <div className="absolute left-[20px] right-[20px] top-[403.38px] h-[5px] overflow-hidden rounded-[4px] bg-[#E9ECEF]">
                  <div
                    className="h-full bg-[#F53E32]"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
                <div className="absolute left-[20px] top-[417.38px] flex h-[16px] items-center whitespace-nowrap font-lato text-[13px] leading-[24px] text-[#253D4E]">
                  {p.sold}
                </div>

                {/* Add to cart */}
                <button
                  type="button"
                  className="absolute inset-x-[20px] top-[452.38px] flex h-[47px] items-center justify-center rounded-[4px] bg-[#F53E32] font-quicksand text-[14px] font-bold leading-[21px] tracking-[0.5px] text-white transition-colors hover:bg-[#e0362b]"
                >
                  <span className="flex w-[20.16px] items-center justify-center">
                    <ShoppingCart size={18} strokeWidth={1.8} />
                  </span>
                  Add To Cart
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}