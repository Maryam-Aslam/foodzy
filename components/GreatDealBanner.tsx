"use client";

import Image from "next/image";

export default function DealBanner() {
  return (
    <>
      <section className="relative w-full min-h-[300px] overflow-hidden flex items-center sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Background Image */}
        <Image
          src="/images/mainbg.jpg"
          alt="Great deal on organic food"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark overlay for readability on mobile */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/10" />

        {/* Main Container */}
        <div className="mx-auto w-full max-w-[1320px] px-4 relative z-10 py-10">
          {/* Deal Content Box */}
          <div
            className="relative w-full max-w-[420px] bg-white/95 backdrop-blur-sm p-5 sm:p-[24px]"
            style={{
              boxShadow: "-3px 3px 8px 5px rgba(0, 0, 0, 0.05)",
              borderRadius: "5px",
            }}
          >
            {/* Discount Badge (35% OFF) */}
            <div className="flex items-baseline gap-[6px]">
              <span
                style={{
                  fontFamily: "Consolas, monospace",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 4vw, 26px)",
                  lineHeight: "31px",
                  letterSpacing: "0.48px",
                  color: "#F53E32",
                }}
              >
                35%
              </span>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.48px",
                  color: "#212529",
                }}
              >
                OFF
              </span>
            </div>

            {/* Heading */}
            <h4
              className="mt-[13px]"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 4vw, 28px)",
                lineHeight: "1.25",
                letterSpacing: "0.48px",
                color: "#2B2B2D",
              }}
            >
              Great deal on organic food.
            </h4>

            {/* Description */}
            <p
              className="mt-[8px]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "24px",
                letterSpacing: "0.48px",
                color: "#000000",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              maecenas accumsan lacus vel facilisis.
            </p>

            {/* Countdown Box */}
            <div
              className="mt-[22px] box-border w-full max-w-[290px] h-[72px] flex items-center justify-around px-2 bg-white"
              style={{
                border: "1px solid #E9CBBE",
                borderRadius: "5px",
              }}
            >
              {/* Days */}
              <div className="flex flex-col items-center">
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0.48px",
                    color: "#2B2B2D",
                  }}
                >
                  326
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0.48px",
                    color: "#000000",
                  }}
                >
                  Days
                </span>
              </div>

              <span className="font-['Poppins'] font-normal text-[22px] text-[#000000] pb-2">.</span>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0.48px",
                    color: "#2B2B2D",
                  }}
                >
                  03
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0.48px",
                    color: "#000000",
                  }}
                >
                  Hrs
                </span>
              </div>

              <span className="font-['Poppins'] font-normal text-[22px] text-[#000000] pb-2">.</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0.48px",
                    color: "#2B2B2D",
                  }}
                >
                  06
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0.48px",
                    color: "#000000",
                  }}
                >
                  Min
                </span>
              </div>

              <span className="font-['Poppins'] font-normal text-[22px] text-[#000000] pb-2">.</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0.48px",
                    color: "#2B2B2D",
                  }}
                >
                  52
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0.48px",
                    color: "#000000",
                  }}
                >
                  Sec
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}