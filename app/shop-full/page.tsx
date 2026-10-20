"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, ShoppingCart, Heart, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type ShopProduct = {
  id: number;
  category: string;
  title: string;
  image: string;
  rating: number;
  reviewLabel: string;
  price: string;
  oldPrice: string;
};

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 1,
    category: "Vegetables",
    title: "Fresh organic villa farm lomon",
    image: "/images/a.jpg",
    rating: 4.5,
    reviewLabel: "(4.5)",
    price: "$120.25",
    oldPrice: "$123.25",
  },
  {
    id: 2,
    category: "Snacks",
    title: "Best snakes with hazel nut pack",
    image: "/images/b.jpg",
    rating: 5,
    reviewLabel: "(5.0)",
    price: "$145",
    oldPrice: "$150",
  },
  {
    id: 3,
    category: "Fruits",
    title: "Fresh organic apple 1kg simla",
    image: "/images/c.jpg",
    rating: 4.5,
    reviewLabel: "(4.5)",
    price: "$120.25",
    oldPrice: "$123.25",
  },
  {
    id: 4,
    category: "Fruits",
    title: "Organic fresh watermelon 1kg",
    image: "/images/cake.jpg",
    rating: 3.2,
    reviewLabel: "(3.2)",
    price: "$50.30",
    oldPrice: "$72.60",
  },
  {
    id: 5,
    category: "Snacks",
    title: "Sweet crunchy nut mix 250gm pack",
    image: "/images/carot.jpg",
    rating: 5,
    reviewLabel: "(5.0)",
    price: "$120.25",
    oldPrice: "$123.25",
  },
  {
    id: 6,
    category: "Snacks",
    title: "Delicious white boiled fresh bread and toast",
    image: "/images/chery.png",
    rating: 4,
    reviewLabel: "(4.0)",
    price: "$28",
    oldPrice: "$32",
  },
  {
    id: 7,
    category: "Snacks",
    title: "Delicious white boiled fresh bread and toast",
    image: "/images/chili.png",
    rating: 4,
    reviewLabel: "(4.0)",
    price: "$24",
    oldPrice: "$29",
  },
  {
    id: 8,
    category: "Snacks",
    title: "Delicious white boiled fresh bread and toast",
    image: "/images/choc.jpg",
    rating: 4,
    reviewLabel: "(4.0)",
    price: "$22",
    oldPrice: "$27",
  },
];

function Stars({ rating }: { rating: number }) {
  const row = (
    <div className="flex gap-[2px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={13} fill="currentColor" stroke="none" />
      ))}
    </div>
  );
  const pct = (rating / 5) * 100;
  return (
    <div className="relative inline-flex">
      <div className="text-[#E4E4E4]">{row}</div>
      <div
        className="absolute inset-y-0 left-0 overflow-hidden text-[#F5885F]"
        style={{ width: `${pct}%` }}
      >
        {row}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <div className="group relative flex flex-col items-center rounded-[5px] border border-[#E9E9E9] bg-white pb-[24px] pt-[13px] overflow-visible">
      {/* Image Container with visible overflow for hover buttons */}
      <div className="relative mx-[13px] flex h-[280px] w-[calc(100%-26px)] items-center justify-center overflow-visible rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8]">
        <div className="absolute inset-0 overflow-hidden rounded-[5px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 300px, 50vw"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Hover Action Buttons */}
        <div className="absolute -bottom-[16px] left-1/2 flex -translate-x-1/2 gap-[15px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20">
          <button
            type="button"
            aria-label="Add to cart"
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#E9E9E9] bg-[#F7F7F8] text-[#64B496] shadow-sm transition-colors hover:bg-[#64B496] hover:text-white"
          >
            <ShoppingCart size={15} />
          </button>
          <button
            type="button"
            aria-label="Add to wishlist"
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#E9E9E9] bg-[#F7F7F8] text-[#64B496] shadow-sm transition-colors hover:bg-[#64B496] hover:text-white"
          >
            <Heart size={15} />
          </button>
        </div>
      </div>

      <div className="mt-[24px] flex flex-col items-center px-[13px] text-center">
        <span className="font-segoe text-[13px] leading-5 tracking-[0.48px] text-[#777777]">
          {product.category}
        </span>

        <div className="mt-[7px] flex items-center gap-[6px]">
          <Stars rating={product.rating} />
          <span className="font-poppins text-[11px] leading-[10px] tracking-[0.48px] text-[#999999]">
            {product.reviewLabel}
          </span>
        </div>

        <Link
          href="/product"
          className="mt-[3px] font-poppins text-[15px] font-medium leading-6 tracking-[0.48px] text-[#2B2B2D] hover:text-[#F53E32]"
        >
          {product.title}
        </Link>

        <div className="mt-[5px] flex items-baseline gap-2">
          <span className="font-poppins text-[16px] font-bold leading-7 tracking-[0.48px] text-[#F53E32]">
            {product.price}
          </span>
          <span className="font-poppins text-[13px] leading-[23px] tracking-[0.48px] text-[#7A7A7A] line-through">
            {product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FullWidthShopPageNew() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <main className="w-full bg-white">
      <Header />

      {/* Red Banner Section */}
      <section className="relative w-full h-[70px] bg-[#F53E32] flex items-center">
        <div className="mx-auto w-full max-w-[1320px] px-4 flex items-center justify-between">
          <h2 className="font-manrope font-bold text-[19px] leading-[19px] tracking-[0.48px] text-white">
            Shop
          </h2>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-poppins font-medium text-[14px] leading-[18px] tracking-[0.48px] text-white capitalize hover:opacity-80"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-white opacity-80" />
            <span className="font-poppins font-medium text-[14px] leading-[18px] tracking-[0.48px] text-white opacity-85 capitalize">
              Shop
            </span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="w-full py-10 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[1320px]">
          
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-[#F7F7F8] border border-[#E9E9E9] rounded-[5px] px-4 py-3 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <button className="p-2 bg-white border border-[#E9E9E9] rounded-[5px] hover:bg-gray-50 transition-colors">
                <SlidersHorizontal size={18} className="text-[#000000]" />
              </button>
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-2 border border-[#E9E9E9] rounded-[5px] transition-colors ${viewMode === "grid" ? "bg-[#F53E32] text-white" : "bg-white text-[#000000]"}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-2 border border-[#E9E9E9] rounded-[5px] transition-colors ${viewMode === "list" ? "bg-[#F53E32] text-white" : "bg-white text-[#000000]"}`}
              >
                <List size={18} />
              </button>
              <span className="font-poppins font-normal text-[14px] text-[#7A7A7A] tracking-[0.48px] ml-2">
                We found 29 items for you!
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white border border-[#E9E9E9] rounded-[5px] px-4 py-2">
              <span className="font-poppins text-[15px] text-[#7A7A7A]">Sort By :</span>
              <select className="bg-transparent font-poppins text-[15px] text-[#7A7A7A] focus:outline-none cursor-pointer">
                <option value="featured">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* 4-Column Product Grid */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SHOP_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="px-4 py-2 border border-[#E9E9E9] rounded-[5px] font-poppins text-[14px] text-[#7A7A7A] hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="w-10 h-10 bg-[#F53E32] text-white rounded-[5px] font-poppins font-bold text-[14px] flex items-center justify-center shadow-sm">
              1
            </button>
            <button className="w-10 h-10 border border-[#E9E9E9] rounded-[5px] font-poppins text-[14px] text-[#7A7A7A] hover:bg-gray-50 flex items-center justify-center transition-colors">
              2
            </button>
            <button className="w-10 h-10 border border-[#E9E9E9] rounded-[5px] font-poppins text-[14px] text-[#7A7A7A] hover:bg-gray-50 flex items-center justify-center transition-colors">
              3
            </button>
            <button className="px-4 py-2 border border-[#E9E9E9] rounded-[5px] font-poppins text-[14px] text-[#7A7A7A] hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}