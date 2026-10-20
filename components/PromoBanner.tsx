"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PromoBanner = {
  title: string;
  image: string;
  bgClass: string;
};

const PROMO_BANNERS: PromoBanner[] = [
  {
    title: "Everyday Fresh & Clean with Our Products",
    image: "/images/ttone.png",
    bgClass: "bg-[#F4EFEA]",
  },
  {
    title: "Make your Breakfast Healthy and Easy",
    image: "/images/tttwo.png",
    bgClass: "bg-[#F7EFEF]",
  },
  {
    title: "The best Organic Products Online",
    image: "/images/ttthree.png",
    bgClass: "bg-[#EFEFF4]",
  },
];

export default function PromoBannersSection() {
  return (
    <section className="relative w-full py-[60px] bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1720px] px-4">
        
        {/* Responsive grid — 1 col on mobile, 3 cols on lg+ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {PROMO_BANNERS.map((banner, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${banner.bgClass} flex items-center rounded-[10px] shadow-sm group min-h-[180px] sm:min-h-[220px] lg:min-h-[260px]`}
            >
              {/* Background Banner Product Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover object-right transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col items-start max-w-[55%] p-5 sm:p-8 sm:max-w-[230px]">
                {/* Heading */}
                <h4 className="font-['Quicksand'] font-bold text-[18px] sm:text-[22px] lg:text-[24px] leading-[1.3] text-[#253D4E]">
                  {banner.title}
                </h4>

                {/* Shop Now Button */}
                <Link
                  href="#"
                  className="mt-4 sm:mt-6 inline-flex items-center justify-center gap-2 h-[30px] px-3 sm:px-[16px] bg-[#F53E32] hover:bg-[#e03328] transition-colors rounded-[4px] font-['Quicksand'] font-bold text-[11px] sm:text-[12px] leading-[16px] tracking-[0.5px] text-white shadow-sm"
                >
                  Shop Now
                  <ArrowRight size={12} className="text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}