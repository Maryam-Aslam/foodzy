"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ totalPages = 3 }: { totalPages?: number }) {
  const [page, setPage] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-[45px] flex items-center justify-center gap-2"
    >
      <button
        type="button"
        disabled={page === 1}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="flex h-10 items-center gap-1 rounded-[5px] border border-[#E9E9E9] px-4 font-poppins text-[14px] text-[#7A7A7A] transition-colors hover:border-[#F53E32] hover:text-[#F53E32] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={14} />
        Previous
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => setPage(p)}
          aria-current={page === p ? "page" : undefined}
          className={`flex h-10 w-10 items-center justify-center rounded-[5px] border font-poppins text-[14px] transition-colors ${
            page === p
              ? "border-[#F53E32] bg-[#F53E32] text-white"
              : "border-[#E9E9E9] text-[#7A7A7A] hover:border-[#F53E32] hover:text-[#F53E32]"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        className="flex h-10 items-center gap-1 rounded-[5px] border border-[#E9E9E9] px-4 font-poppins text-[14px] text-[#7A7A7A] transition-colors hover:border-[#F53E32] hover:text-[#F53E32] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <ChevronRight size={14} />
      </button>
    </nav>
  );
}