"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, PackageCheck, Headphones, Clock, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <main className="w-full bg-white">
      <Header />

      {/* Red Banner Section */}
      <section className="relative w-full min-h-[60px] bg-[#F53E32] flex items-center py-4 sm:min-h-[70px] sm:py-0">
        <div className="mx-auto w-full max-w-[1320px] px-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-manrope font-bold text-[17px] sm:text-[19px] leading-[19px] tracking-[0.48px] text-white">
            About Us
          </h2>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="font-poppins font-medium text-[13px] sm:text-[14px] leading-[18px] tracking-[0.48px] text-white capitalize hover:opacity-80"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-white opacity-80" />
            <span className="font-poppins font-medium text-[13px] sm:text-[14px] leading-[18px] tracking-[0.48px] text-white opacity-85 capitalize">
              About Us
            </span>
          </div>
        </div>
      </section>

      {/* About The Carrot Section */}
      <section className="w-full py-12 px-4 sm:py-16 sm:px-6">
        <div className="mx-auto w-full max-w-[1320px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Area */}
          <div className="flex flex-col order-2 lg:order-1">
            <h2 className="font-poppins font-bold text-[24px] sm:text-[32px] leading-[36px] sm:leading-[40px] text-[#2B2B2D] tracking-[0.48px] mb-5">
              About The Carrot
            </h2>
            <p className="font-poppins font-normal text-[14px] leading-[24px] text-[#7A7A7A] tracking-[0.48px] mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda rerum quod. Tempora magni autem a voluptatibus neque.
            </p>
            <p className="font-poppins font-normal text-[14px] leading-[24px] text-[#7A7A7A] tracking-[0.48px] mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus suscipit voluptatum eius perferendis amet!.
            </p>
            <p className="font-poppins font-normal text-[14px] leading-[24px] text-[#7A7A7A] tracking-[0.48px] mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet architecto est exercitationem optio ea maiores corporis beatae.
            </p>

            {/* Statistics Counters Box */}
            <div className="grid grid-cols-3 bg-[#F7F7F8] border border-[#E9E9E9] rounded-[5px] py-5 px-2 sm:py-[25px] sm:px-[13px]">
              
              {/* Stat 1: Vendors */}
              <div className="flex flex-col items-center text-center relative">
                <div className="flex items-baseline justify-center">
                  <span className="font-manrope font-bold text-[36px] sm:text-[50px] lg:text-[60px] leading-[1] text-[#F53E32]">
                    0.1
                  </span>
                  <span className="font-manrope font-bold text-[18px] sm:text-[24px] lg:text-[30px] leading-[1] text-[#7A7A7A] ml-1">
                    k
                  </span>
                </div>
                <span className="font-manrope font-semibold text-[12px] sm:text-[14px] lg:text-[16px] leading-[16px] tracking-[0.48px] text-[#212529] mt-[8px]">
                  Vendors
                </span>
              </div>

              {/* Stat 2: Customers */}
              <div className="flex flex-col items-center text-center relative border-x border-[#E9E9E9]">
                <div className="flex items-baseline justify-center">
                  <span className="font-manrope font-bold text-[36px] sm:text-[50px] lg:text-[60px] leading-[1] text-[#F53E32]">
                    23
                  </span>
                  <span className="font-manrope font-bold text-[18px] sm:text-[24px] lg:text-[30px] leading-[1] text-[#7A7A7A] ml-1">
                    k
                  </span>
                </div>
                <span className="font-manrope font-semibold text-[12px] sm:text-[14px] lg:text-[16px] leading-[16px] tracking-[0.48px] text-[#212529] mt-[8px]">
                  Customers
                </span>
              </div>

              {/* Stat 3: Products */}
              <div className="flex flex-col items-center text-center relative">
                <div className="flex items-baseline justify-center">
                  <span className="font-manrope font-bold text-[36px] sm:text-[50px] lg:text-[60px] leading-[1] text-[#F53E32]">
                    2
                  </span>
                  <span className="font-manrope font-bold text-[18px] sm:text-[24px] lg:text-[30px] leading-[1] text-[#7A7A7A] ml-1">
                    k
                  </span>
                </div>
                <span className="font-manrope font-semibold text-[12px] sm:text-[14px] lg:text-[16px] leading-[16px] tracking-[0.48px] text-[#212529] mt-[8px]">
                  Products
                </span>
              </div>

            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="relative w-full order-1 lg:order-2 rounded-[5px] overflow-hidden border border-[#E9E9E9] shadow-sm" style={{ paddingBottom: "65%" }}>
            <Image
              src="/images/thirdbj.png"
              alt="About Us Fresh Produce"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* 4 Feature Cards Section */}
      <section className="w-full pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[1320px] grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          
          {/* Card 1: Product Packing */}
          <div className="relative flex flex-col items-center text-center p-4 sm:p-[25px] bg-[#F7F7F8] border border-[#E9E9E9] rounded-[5px] min-h-[160px] sm:min-h-[184px]">
            <div className="text-[#64B496] mb-2 sm:mb-3">
              <PackageCheck size={28} />
            </div>
            <h4 className="font-poppins font-semibold text-[14px] sm:text-[18px] leading-[24px] sm:leading-[30px] tracking-[0.48px] text-[#2B2B2D]">
              Product Packing
            </h4>
            <p className="font-poppins font-light text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px] tracking-[0.48px] text-[#7A7A7A] mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

          {/* Card 2: 24X7 Support */}
          <div className="relative flex flex-col items-center text-center p-4 sm:p-[25px] bg-[#F7F7F8] border border-[#E9E9E9] rounded-[5px] min-h-[160px] sm:min-h-[184px]">
            <div className="text-[#64B496] mb-2 sm:mb-3">
              <Headphones size={28} />
            </div>
            <h4 className="font-poppins font-semibold text-[14px] sm:text-[18px] leading-[24px] sm:leading-[30px] tracking-[0.48px] text-[#2B2B2D]">
              24X7 Support
            </h4>
            <p className="font-poppins font-light text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px] tracking-[0.48px] text-[#7A7A7A] mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

          {/* Card 3: Delivery in 5 Days */}
          <div className="relative flex flex-col items-center text-center p-4 sm:p-[25px] bg-[#F7F7F8] border border-[#E9E9E9] rounded-[5px] min-h-[160px] sm:min-h-[184px]">
            <div className="text-[#64B496] mb-2 sm:mb-3">
              <Clock size={28} />
            </div>
            <h4 className="font-poppins font-semibold text-[14px] sm:text-[18px] leading-[24px] sm:leading-[30px] tracking-[0.48px] text-[#2B2B2D]">
              Delivery in 5 Days
            </h4>
            <p className="font-poppins font-light text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px] tracking-[0.48px] text-[#7A7A7A] mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

          {/* Card 4: Payment Secure */}
          <div className="relative flex flex-col items-center text-center p-4 sm:p-[25px] bg-[#F7F7F8] border border-[#E9E9E9] rounded-[5px] min-h-[160px] sm:min-h-[184px]">
            <div className="text-[#64B496] mb-2 sm:mb-3">
              <ShieldCheck size={28} />
            </div>
            <h4 className="font-poppins font-semibold text-[14px] sm:text-[18px] leading-[24px] sm:leading-[30px] tracking-[0.48px] text-[#2B2B2D]">
              Payment Secure
            </h4>
            <p className="font-poppins font-light text-[12px] sm:text-[14px] leading-[20px] sm:leading-[22px] tracking-[0.48px] text-[#7A7A7A] mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}