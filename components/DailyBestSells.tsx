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
  rating: number; // percentage of stars filled (e.g. 80 = 4 of 5)
  progress: number; // percentage width of red progress bar
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
    progress: 49.6,
    sold: "Sold: 90/120",
  },
  {
    id: 2,
    brand: "Hodo Foods",
    title: "Angie's Boomchickapop Sweet and womnies",
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
    <div className="flex items-center gap-[2px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={14} fill="currentColor" stroke="none" className="shrink-0" />
      ))}
    </div>
  );
  return (
    <div className="relative inline-block">
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

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="relative flex flex-col justify-between overflow-hidden rounded-[15px] border border-[#ECECEC] bg-white p-4 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:p-5">
      {/* Badge */}
      <span
        className="absolute left-0 top-0 z-10 rounded-br-[15px] rounded-tl-[15px] px-3.5 py-1.5 font-lato text-[12px] font-bold text-white shadow-sm"
        style={{ background: p.badge.color }}
      >
        {p.badge.label}
      </span>

      {/* Image Area */}
      <div className="relative mx-auto mt-4 h-[180px] w-full sm:h-[200px]">
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(min-width: 1280px) 250px, (min-width: 768px) 40vw, 90vw"
          className="object-contain"
        />
      </div>

      {/* Content Info */}
      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div>
          <span className="font-lato text-[12px] text-[#ADADAD]">{p.brand}</span>
          <h4 className="mt-1 font-quicksand text-[15px] font-bold leading-[20px] text-[#253D4E] line-clamp-2">
            {p.title}
          </h4>

          <div className="mt-2.5">
            <Stars percent={p.rating} />
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-quicksand text-[18px] font-bold text-[#3BB77E]">
              {p.price}
            </span>
            <span className="font-quicksand text-[14px] font-bold text-[#ADADAD] line-through">
              {p.oldPrice}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 h-[6px] w-full overflow-hidden rounded-[4px] bg-[#E9ECEF]">
            <div className="h-full bg-[#F53E32]" style={{ width: `${p.progress}%` }} />
          </div>
          <div className="mt-2 font-lato text-[13px] text-[#253D4E]">
            {p.sold}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          className="mt-4 flex h-[40px] w-full items-center justify-center gap-2 rounded-[4px] bg-[#F53E32] font-quicksand text-[14px] font-bold text-white transition-colors hover:bg-[#e0362b]"
        >
          <ShoppingCart size={16} strokeWidth={1.8} />
          Add To Cart
        </button>
      </div>
    </article>
  );
}

export default function DailyBestSells() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Featured");

  return (
    <section className="w-full bg-white py-[60px]">
      <div className="mx-auto w-full max-w-[1550px] px-4">
        {/* Header: title + tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-quicksand text-[24px] font-bold leading-[38px] text-[#253D4E] sm:text-[32px]">
            Daily Best Sells
          </h3>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`font-quicksand text-[14px] sm:text-[16px] font-semibold transition-colors hover:text-[#3BB77E] ${
                  activeTab === tab ? "text-[#3BB77E]" : "text-[#253D4E]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Body: banner + product grid */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[330px_1fr] xl:items-start">
          {/* Promo Banner */}
          <div className="relative flex h-[350px] w-full flex-col justify-between overflow-hidden rounded-[15px] p-8 sm:h-[400px] xl:h-[480px]">
            <Image
              src="/images/image.png"
              alt="Bring nature into your home"
              fill
              sizes="(min-width: 1280px) 330px, 100vw"
              className="object-cover"
            />
            {/* Overlay tint */}
            <div className="absolute inset-0 bg-[#293d30]/30" />

            <div className="relative z-10 max-w-[220px]">
              <h2 className="font-quicksand text-[32px] font-bold leading-[40px] text-white sm:text-[36px] sm:leading-[44px]">
                Bring nature into your home
              </h2>
            </div>

            <div className="relative z-10">
              <Link
                href="#"
                className="inline-flex h-[38px] items-center gap-2 rounded-[4px] bg-[#F53E32] px-4 font-quicksand text-[13px] font-bold text-white transition-colors hover:bg-[#e0362b]"
              >
                Shop Now
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Product Cards Container with Nav Arrows */}
          <div className="relative">
            {/* Slider arrows */}
            <button
              type="button"
              aria-label="Previous"
              className="absolute -left-4 top-[45%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#F2F3F4] text-[#7E7E7E] shadow-sm transition-colors hover:bg-[#3BB77E] hover:text-white xl:flex"
            >
              <ArrowLeft size={16} strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="absolute -right-4 top-[45%] z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#F2F3F4] text-[#7E7E7E] shadow-sm transition-colors hover:bg-[#3BB77E] hover:text-white xl:flex"
            >
              <ArrowRight size={16} strokeWidth={2} />
            </button>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}