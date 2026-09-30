"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/choc.jpg",
    "/images/ctwo.jpg",
  "/images/cthree.jpg",
  "/images/cfour.jpg",
    "/images/cfive.jpg",


];

export default function ProductGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-[471px]">
      {/* Main image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8]">
        <Image
          src={IMAGES[active]}
          alt="Product image"
          fill
          sizes="(min-width: 1024px) 471px, 100vw"
          className="object-contain p-6 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-[18px] grid grid-cols-5 gap-[9px]">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            className={`relative aspect-square w-full overflow-hidden rounded-[5px] border transition-colors ${
              active === i ? "border-[#F53E32]" : "border-[#E9E9E9]"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="90px"
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}