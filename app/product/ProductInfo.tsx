"use client";

import { useState } from "react";
import { Star, Heart, Minus, Plus, Eye } from "lucide-react";

const SPECS: { label: string; value: string }[] = [
  { label: "Brand", value: "ESTA BETTERU CO" },
  { label: "Flavour", value: "Super Saver Pack" },
  { label: "Diet Type", value: "Vegetarian" },
  { label: "Weight", value: "200 Grams" },
  { label: "Speciality", value: "Gluten Free, Sugar Free" },
  { label: "Info", value: "Egg Free, Allergen-Free" },
  { label: "Items", value: "1" },
];

const SIZES = ["50kg", "80kg", "120kg", "200kg"];

export default function ProductInfo() {
  const [size, setSize] = useState(SIZES[0]);
  const [qty, setQty] = useState(1);

  return (
    <div className="w-full max-w-[467px]">
      {/* Title + description */}
      <div className="border-b border-[#E9E9E9] pb-[18px]">
        <h1 className="font-segoe text-[22px] leading-[33px] tracking-[0.48px] text-[#2B2B2D]">
          Seeds Of Change Oraganic Quinoa, Brown
        </h1>
        <p className="mt-[17px] font-poppins text-[14px] leading-6 tracking-[0.48px] text-[#7A7A7A]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure
          minus error doloribus saepe natus?
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-[10px] border-b border-[#E9E9E9] py-[17px]">
        <div className="flex gap-[5.4px] text-[#F5885F]">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span className="font-poppins text-[15px] leading-[26px] tracking-[0.48px] text-[#7A7A7A]">
          ( 75 Review )
        </span>
      </div>

      {/* Specs */}
      <dl className="flex flex-col gap-[10px] border-b border-[#E9E9E9] py-[18px]">
        {SPECS.map((spec) => (
          <div key={spec.label} className="flex items-center gap-4">
            <dt className="flex w-[100px] shrink-0 items-center justify-between font-segoe text-[16px] font-semibold leading-6 tracking-[0.48px] text-[#2B2B2D]">
              {spec.label}
              <span>:</span>
            </dt>
            <dd className="font-segoe text-[16px] leading-6 tracking-[0.48px] text-[#777777]">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Price */}
      <div className="flex items-baseline gap-[17px] py-[18px]">
        <span className="font-poppins text-[24px] font-semibold leading-7 tracking-[0.48px] text-[#F53E32]">
          $120.25
        </span>
        <span className="font-poppins text-[16px] leading-7 tracking-[0.48px] text-[#7A7A7A] line-through">
          $123.25
        </span>
      </div>

      {/* Size / Weight */}
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-poppins text-[16px] font-medium leading-[25px] tracking-[0.48px] text-[#2B2B2D]">
          Size/Weight:
        </h3>
        {SIZES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSize(s)}
            className={`flex h-[38px] items-center justify-center rounded-[5px] border px-[11px] font-poppins text-[12px] leading-3 tracking-[0.48px] transition-colors ${
              size === s
                ? "border-[#F53E32] bg-[#F53E32] text-white"
                : "border-[#E9E9E9] bg-white text-[#777777] hover:border-[#F53E32]/50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Quantity + Add to cart + wishlist/compare */}
      <div className="mt-[26px] flex flex-wrap items-center gap-3">
        <div className="flex h-10 items-stretch overflow-hidden rounded-[5px] border border-[#E9E9E9]">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex w-9 items-center justify-center text-black hover:bg-gray-50"
          >
            <Minus size={14} />
          </button>
          <span className="flex w-10 items-center justify-center font-segoe text-[16px] text-black">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="flex w-9 items-center justify-center text-black hover:bg-gray-50"
          >
            <Plus size={14} />
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-[125px] items-center justify-center rounded-[5px] border border-[#F53E32] bg-[#F53E32] font-manrope text-[14px] font-bold capitalize text-white transition-colors hover:bg-[#e0362b]"
        >
          Add To Cart
        </button>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#E9E9E9] text-black transition-colors hover:border-[#F53E32] hover:text-[#F53E32]"
        >
          <Heart size={18} />
        </button>
        <button
          type="button"
          aria-label="Quick view"
          className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#E9E9E9] text-black transition-colors hover:border-[#F53E32] hover:text-[#F53E32]"
        >
          <Eye size={18} />
        </button>
      </div>
    </div>
  );
}