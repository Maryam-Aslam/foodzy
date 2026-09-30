"use client";

import { useState } from "react";
import { Grid3x3, List, ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  "Featured",
  "Best Selling",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
];

type Props = {
  itemCount: number;
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
};

export default function ShopToolbar({ itemCount, view, onViewChange }: Props) {
  const [sort, setSort] = useState(SORT_OPTIONS[0]);

  return (
    <div className="flex h-auto min-h-[47px] w-full flex-wrap items-center gap-4 rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] px-[6px] py-2 sm:flex-nowrap">
      {/* Grid / List toggle */}
      <div className="flex h-[35px] shrink-0 gap-[5px]">
        <button
          type="button"
          aria-label="Grid view"
          aria-pressed={view === "grid"}
          onClick={() => onViewChange("grid")}
          className={`flex h-[35px] w-[35px] items-center justify-center rounded-[5px] border border-[#E9E9E9] transition-colors ${
            view === "grid" ? "bg-[#F53E32] text-white" : "bg-white text-black"
          }`}
        >
          <Grid3x3 size={18} />
        </button>
        <button
          type="button"
          aria-label="List view"
          aria-pressed={view === "list"}
          onClick={() => onViewChange("list")}
          className={`flex h-[35px] w-[35px] items-center justify-center rounded-[5px] border border-[#E9E9E9] transition-colors ${
            view === "list" ? "bg-[#F53E32] text-white" : "bg-white text-black"
          }`}
        >
          <List size={18} />
        </button>
      </div>

      {/* Item count */}
      <p className="flex-1 font-poppins text-[14px] leading-[26px] tracking-[0.48px] text-[#7A7A7A]">
        We found {itemCount} items for you!
      </p>

      {/* Sort */}
      <label className="relative flex h-[35px] shrink-0 items-center rounded-[5px] border border-[#E9E9E9] bg-white pl-4 pr-9">
        <span className="font-poppins text-[15px] leading-[26px] tracking-[0.48px] text-[#7A7A7A]">
          Sort By :
        </span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="ml-2 appearance-none bg-transparent font-poppins text-[15px] leading-[18px] text-[#7A7A7A] focus:outline-none"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={10}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#343A40]"
        />
      </label>
    </div>
  );
}