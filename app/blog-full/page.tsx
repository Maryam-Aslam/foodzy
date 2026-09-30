"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Quote,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── data ─────────────────────────────────────────────────────────────────── */
const TAGS = ["Cabbage", "Appetizer", "Meat Food"];

/* ─── sub-components ────────────────────────────────────────────────────────── */
function BlogBanner() {
  return (
    <section className="relative w-full h-[70px] bg-[#F53E32] flex items-center">
      <div className="mx-auto w-full max-w-[1320px] px-4 flex items-center justify-between">
        <h2 className="font-manrope font-bold text-[19px] leading-[19px] tracking-[0.48px] text-white">
          Blog Details
        </h2>
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="font-poppins font-medium text-[14px] leading-[18px] tracking-[0.48px] text-white capitalize hover:opacity-80"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-white opacity-80" />
          <span className="font-poppins font-medium text-[14px] leading-[18px] tracking-[0.48px] text-white opacity-85 capitalize">
            Blog Details
          </span>
        </nav>
      </div>
    </section>
  );
}

/* ─── page ───────────────────────────────────────────────────────────────────── */
export default function BlogFullWidthPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      <BlogBanner />

      {/* Content */}
      <section className="w-full py-12 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[1320px]">

          {/* Meta line */}
          <p className="font-poppins font-semibold text-[15px] leading-[30px] tracking-[0.48px] text-[#F53E32] mb-1">
            By Admin &nbsp;/&nbsp; 97 Comments &nbsp;/&nbsp; Date - 09, 09, 2024
          </p>

          {/* Heading */}
          <h1 className="font-manrope font-bold text-[32px] leading-[38px] tracking-[0.48px] text-[#2B2B2D] mb-5">
            Health Benefits of a Row food
          </h1>

          {/* Body paragraphs */}
          <p className="font-poppins font-normal text-[14px] leading-[24px] tracking-[0.48px] text-[#7A7A7A] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt
            reprehenderit natus, soluta officia iure enim itaque. Iste qui exercitationem et odit
            beatae debitis ratione molestiae quis atque.
          </p>
          <p className="font-poppins font-normal text-[14px] leading-[24px] tracking-[0.48px] text-[#7A7A7A] mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus dolor odio
            nobis eum voluptatem laudantium magni veritatis sint! Aspernatur est quisquam modi
            laudantium.
          </p>

          {/* Hero blog image */}
          <div className="relative w-full h-[440px] rounded-[5px] overflow-hidden mb-8">
            <Image
              src="/images/mainbg.jpg"
              alt="Blog hero - Health benefits of raw food"
              fill
              className="object-cover"
              sizes="(min-width:1280px) 1296px, 100vw"
              priority
            />
          </div>

          {/* Two sub-images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full h-[305px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/bone.jpg"
                alt="Blog sub image 1"
                fill
                className="object-cover"
                sizes="(min-width:768px) 50vw, 100vw"
              />
            </div>
            <div className="relative w-full h-[305px] rounded-[5px] overflow-hidden">
              <Image
                src="/images/cc.jpg"
                alt="Blog sub image 2"
                fill
                className="object-cover"
                sizes="(min-width:768px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* Sub-image captions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              "Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!",
              "Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* Red quote/bookmark icon */}
                <div className="shrink-0 mt-[2px]">
                  <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H20L24 14.5L20 29H0V0Z" fill="#F53E32" />
                  </svg>
                </div>
                <p className="font-poppins font-bold text-[16px] leading-[29px] tracking-[0.48px] text-[#2B2B2D]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Long body paragraph */}
          <p className="font-poppins font-normal text-[14px] leading-[26px] tracking-[0.48px] text-[#7A7A7A] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia magni
            explicabo fuga molestiae architecto ipsa excepturi laudantium molestias, assumenda vel
            fugiat hic exercitationem. Necessitatibus itaque et id! Ratione accusantium voluptatum
            optio rerum facilis expedita.
          </p>

          {/* Quote / testimonial box */}
          <div className="relative w-full border border-[#E9E9E9] rounded-[5px] bg-white px-8 py-[35px] mb-8">
            <p className="font-poppins font-medium text-[14px] leading-[28px] tracking-[0.48px] text-[#2B2B2D] mb-6 pr-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum
              architecto odit soluta quas odio distinctio quae numquam? Quaerat nulla blanditiis
              possimus quae. Iusto doloribus, est aliquam delectus pariatur voluptatem cum iste
              exercitationem rem.
            </p>
            <p className="font-poppins font-bold text-[20px] leading-[20px] tracking-[0.48px] text-[#F53E32]">
              John Martin
            </p>
            {/* Quote icon top-right */}
            <div className="absolute right-6 top-6 opacity-50">
              <Quote size={48} className="text-[#F53E32] rotate-180" />
            </div>
          </div>

          {/* Tags bar */}
          <div className="w-full border border-[#E9E9E9] rounded-[5px] bg-white px-3 py-[11px] flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Left: tag pills */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-[6px] border border-[#E9E9E9] rounded-[5px] font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] text-[#7A7A7A] capitalize hover:bg-[#F53E32] hover:text-white hover:border-[#F53E32] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
            {/* Right: social icons */}
            <div className="flex items-center gap-2">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "Youtube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-[#E9E9E9] rounded-[5px] text-[#2B2B2D] hover:bg-[#F53E32] hover:text-white hover:border-[#F53E32] transition-colors"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-0 mb-2">
            <button className="h-[38px] px-4 border border-[#E9E9E9] rounded-l-[6px] bg-[#F7F7F8] font-segoe text-[16px] text-[#777777] hover:bg-gray-50 transition-colors flex items-center gap-1">
              <ChevronLeft size={16} /> Previous
            </button>
            <button className="h-[38px] w-[38px] bg-[#F53E32] border border-[#64B496] font-segoe text-[16px] text-white flex items-center justify-center">
              1
            </button>
            <button className="h-[38px] w-[38px] bg-white border border-[#E9E9E9] font-segoe text-[16px] text-[#777777] hover:bg-gray-50 flex items-center justify-center transition-colors">
              2
            </button>
            <button className="h-[38px] w-[38px] bg-white border border-[#E9E9E9] font-segoe text-[16px] text-[#777777] hover:bg-gray-50 flex items-center justify-center transition-colors">
              3
            </button>
            <button className="h-[38px] px-4 border border-[#E9E9E9] rounded-r-[6px] bg-white font-segoe text-[16px] text-[#777777] hover:bg-gray-50 transition-colors flex items-center gap-1">
              Next <ChevronRightIcon size={16} />
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
