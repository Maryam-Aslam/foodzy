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
    <section className="relative w-full py-[60px] bg-white overflow-x-auto">
      
      {/* Outer wrapper allowing a wide container so cards stay in one line */}
      <div className="mx-auto w-full max-w-[1720px] px-4 flex justify-center">
        
        {/* Single Line Flex Container */}
        <div className="flex flex-row items-center gap-6">
          {PROMO_BANNERS.map((banner, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${banner.bgClass} flex items-center px-[50px] shadow-sm group`}
              style={{
                width: '535.66px',
                height: '307.38px',
                borderRadius: '10px',
                flexShrink: 0,
              }}
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
              <div className="relative z-10 flex flex-col items-start max-w-[230px]">
                {/* Heading */}
                <h4 className="font-['Quicksand'] font-bold text-[24px] leading-[29px] text-[#253D4E]">
                  {banner.title}
                </h4>

                {/* Shop Now Button */}
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center justify-center gap-2 h-[31.59px] px-[16px] bg-[#F53E32] hover:bg-[#e03328] transition-colors rounded-[4px] font-['Quicksand'] font-bold text-[12px] leading-[16px] tracking-[0.5px] text-white shadow-sm"
                >
                  Shop Now
                  <ArrowRight size={14} className="text-white" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}