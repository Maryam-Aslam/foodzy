"use client";

import Image from "next/image";
import Link from "next/link";

export default function OrganicBannerSection() {
  return (
    <section className="relative w-full py-[60px] lg:py-[80px] bg-white overflow-hidden">
      
      {/* Right-side Decorative Watermark — only on large screens */}
      <div className="absolute right-[30px] top-1/2 -translate-y-1/2 pointer-events-none z-0 hidden xl:block">
        <Image
          src="/images/chery.png" 
          alt="Decoration"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-4 relative z-10">
        
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr] sm:gap-6">
          
          {/* Card 1: Pasta/Food Image */}
          <div className="relative w-full overflow-hidden rounded-[5px] border border-[#E9E9E9] bg-white shadow-sm group" style={{ paddingBottom: "110%" }}>
            <Image
              src="/images/pasta.png" 
              alt="Delicious Pasta"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Card 2: Pizza Image */}
          <div className="relative w-full overflow-hidden rounded-[5px] border border-[#E9E9E9] bg-white shadow-sm group" style={{ paddingBottom: "110%" }}>
            <Image
              src="/images/piza.png" 
              alt="Fresh Pizza"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Card 3: Wide Organic & Healthy Vegetables Promotional Banner */}
          <div className="relative w-full overflow-hidden rounded-[5px] bg-[#E5E5E5] flex items-center justify-end group sm:col-span-2 lg:col-span-1" style={{ minHeight: "280px" }}>
            {/* Background Image for the Promo Card */}
            <Image
              src="/images/add.jpg" 
              alt="Organic & Healthy Vegetables"
              fill
              className="object-cover"
            />

            {/* Content Container aligned closer to the right edge */}
            <div className="relative z-10 flex flex-col items-end text-right max-w-[280px] sm:max-w-[340px] p-6 sm:p-8">
              <h3 
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(18px, 3vw, 24px)",
                  lineHeight: "1.5",
                  letterSpacing: "0.48px",
                  color: "#2B2B2D",
                  textAlign: "right",
                }}
              >
                Organic &amp; Healthy <br /> Vegetables
              </h3>
              
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-['Poppins'] font-bold text-[20px] sm:text-[24px] text-[#2B2B2D]">
                  25%
                </span>
                <span className="font-['Poppins'] font-normal text-[13px] sm:text-[14px] text-[#212529] uppercase tracking-wider">
                  OFF
                </span>
              </div>

              <Link
                href="#"
                className="mt-4 inline-flex h-[38px] sm:h-[40px] w-[100px] sm:w-[110px] items-center justify-center rounded-[5px] bg-[#F53E32] font-['Arial'] text-[14px] font-bold text-white transition-transform hover:scale-105 shadow-sm"
              >
                Shop Now
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}