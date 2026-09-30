"use client";

import { useState } from "react";

type CheckItem = { label: string; count?: string; swatch?: string };

const CATEGORIES: CheckItem[] = [
  { label: "Juice & Drinks", count: "[20]" },
  { label: "Dairy & Milk", count: "[54]" },
  { label: "Snack & Spice", count: "[64]" },
];

const COLORS: CheckItem[] = [
  { label: "Blue", swatch: "#6C9EFF" },
  { label: "Yellow", swatch: "#DEDE44" },
  { label: "Red", swatch: "#FB5555" },
  { label: "Green", swatch: "#64B496" },
];

const WEIGHTS: CheckItem[] = [
  { label: "2kg Pack" },
  { label: "20kg Pack" },
  { label: "30kg pack" },
];

const TAGS = ["Vegetables", "Juice", "Food", "Dry Fruits", "Vegetables", "Juice"];

function CheckRow({ item }: { item: CheckItem }) {
  return (
    <label className="flex cursor-pointer items-center justify-between py-[9px]">
      <span className="flex items-center gap-3">
        <input
          type="checkbox"
          className="h-[18px] w-[18px] rounded-[5px] border border-[#DDDDDD] text-[#F53E32] focus:ring-[#F53E32]"
        />
        <span className="font-poppins text-[14px] capitalize leading-[21px] tracking-[0.48px] text-[#7A7A7A]">
          {item.label}
        </span>
      </span>
      {item.count && (
        <span className="font-poppins text-[12px] leading-[18px] tracking-[0.48px] text-[#7A7A7A]">
          {item.count}
        </span>
      )}
      {item.swatch && (
        <span
          className="h-5 w-5 rounded-[5px]"
          style={{ background: item.swatch }}
        />
      )}
    </label>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="border-b border-[#E9E9E9] pb-[13.5px] pt-[25px] font-poppins text-[16px] font-medium capitalize leading-[26px] tracking-[0.48px] text-[#2B2B2D] first:pt-0">
      {children}
    </h4>
  );
}

export default function ProductSidebar() {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(250);
  const floor = 0;
  const ceiling = 500;
  const minPct = ((min - floor) / (ceiling - floor)) * 100;
  const maxPct = ((max - floor) / (ceiling - floor)) * 100;

  return (
    <aside className="w-full max-w-[312px] rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] p-[25px]">
      {/* Product Category */}
      <SectionHeading>Product Category</SectionHeading>
      <div>
        {CATEGORIES.map((item) => (
          <CheckRow key={item.label} item={item} />
        ))}
      </div>

      {/* Filter By Price */}
      <SectionHeading>Filter By Price</SectionHeading>
      <div className="pt-[25px]">
        <div className="relative h-[3px] w-full rounded-[3px] bg-[#CECECE]">
          <div
            className="absolute h-full rounded-[3px] bg-[#F53E32]"
            style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
          />
          <input
            type="range"
            min={floor}
            max={ceiling}
            value={min}
            onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1))}
            className="pointer-events-none absolute inset-0 h-[3px] w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F53E32]"
          />
          <input
            type="range"
            min={floor}
            max={ceiling}
            value={max}
            onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1))}
            className="pointer-events-none absolute inset-0 h-[3px] w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F53E32]"
          />
        </div>

        <p className="mt-[27px] flex h-[21px] items-center gap-1 font-poppins text-[15px] font-bold leading-[18px] tracking-[0.48px] text-black">
          Price :
          <span className="text-[#7A7A7A]">
            ${min} - ${max}
          </span>
        </p>

        <button
          type="button"
          className="mt-[17px] flex h-[40px] w-[80.23px] items-center justify-center rounded-[5px] border border-[#F53E32] bg-[#F53E32] font-manrope text-[14px] font-bold capitalize text-white transition-colors hover:bg-[#e0362b]"
        >
          Filter
        </button>
      </div>

      {/* Colors (reuses "Product Category" label as in the Figma spec) */}
      <SectionHeading>Product Category</SectionHeading>
      <div>
        {COLORS.map((item) => (
          <CheckRow key={item.label} item={item} />
        ))}
      </div>

      {/* Weight */}
      <SectionHeading>Weight</SectionHeading>
      <div>
        {WEIGHTS.map((item) => (
          <CheckRow key={item.label} item={item} />
        ))}
      </div>

      {/* Products Tags */}
      <SectionHeading>Products Tages</SectionHeading>
      <div className="flex flex-wrap gap-[9px] pt-[17px]">
        {TAGS.map((tag, i) => (
          <button
            key={`${tag}-${i}`}
            type="button"
            className="flex h-8 items-center rounded-[5px] border border-[#E9E9E9] bg-white px-4 font-poppins text-[14px] capitalize leading-[30px] tracking-[0.48px] text-[#7A7A7A] transition-colors hover:border-[#F53E32] hover:text-[#F53E32]"
          >
            {tag}
          </button>
        ))}
      </div>
    </aside>
  );
}