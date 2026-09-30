"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

type Product = {
  id: number;
  category: string;
  title: string;
  image: string;
  rating: number; // 0-5
  reviewLabel: string;
  price: string;
  oldPrice: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    category: "Snacks",
    title: "Best snakes with hazel nut mix pack 200gm",
    image: "/images/choc.jpg",
    rating: 4.5,
    reviewLabel: "(4.5)",
    price: "$120.25",
    oldPrice: "$123.25",
  },
  {
    id: 2,
    category: "Snacks",
    title: "Sweet snakes crunchy nut mix 250gm pack",
    image: "/images/ctwo.jpg",
    rating: 5,
    reviewLabel: "(5.0)",
    price: "$100.00",
    oldPrice: "$110.00",
  },
  {
    id: 3,
    category: "Snacks",
    title: "Best snakes with hazel nut mix pack 200gm",
    image: "/images/lmn.jpg",
    rating: 4.5,
    reviewLabel: "(4.5)",
    price: "$120.25",
    oldPrice: "$123.25",
  },
  {
    id: 4,
    category: "Snacks",
    title: "Sweet snakes crunchy nut mix 250gm pack",
    image: "/images/pthree.jpg",
    rating: 5,
    reviewLabel: "(5.0)",
    price: "$100.00",
    oldPrice: "$110.00",
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

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col items-center rounded-[5px] border border-[#E9E9E9] bg-white pb-[24px] pt-[13px]">
      {/* Image */}
      <div className="relative mx-[13px] flex h-[280px] w-[calc(100%-26px)] items-center justify-center overflow-hidden rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 300px, 50vw"
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />

        {/* Floating action buttons */}
        <div className="absolute -bottom-[16px] left-1/2 flex -translate-x-1/2 gap-[15px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <button
            type="button"
            aria-label="Add to cart"
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#E9E9E9] bg-[#F7F7F8] text-[#64B496] transition-colors hover:bg-[#64B496] hover:text-white"
          >
            <ShoppingCart size={15} />
          </button>
          <button
            type="button"
            aria-label="Add to wishlist"
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#E9E9E9] bg-[#F7F7F8] text-[#64B496] transition-colors hover:bg-[#64B496] hover:text-white"
          >
            <Heart size={15} />
          </button>
        </div>
      </div>

      {/* Details */}
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
          href="#"
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

export default function DetailPopularProducts() {
  return (
    <section className="w-full bg-white px-4 py-[60px] sm:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center">
        <h2 className="text-center font-manrope text-[26px] font-bold leading-[34px] tracking-[0.48px] text-[#2B2B2D] sm:text-[32px] sm:leading-[38px]">
          Popular Products
        </h2>
        <p className="mt-[9px] max-w-[600px] text-center font-poppins text-[14px] leading-[22px] tracking-[0.48px] text-[#7A7A7A]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et viverra maecenas accumsan
          lacus vel facilisis.
        </p>

        <div className="mt-[45px] grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}