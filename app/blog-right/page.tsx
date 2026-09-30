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
  Search,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── data ─────────────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { name: "Milks & Dairies", count: 56 },
  { name: "Sea Food", count: 34 },
  { name: "Fresh Fruit", count: 53 },
  { name: "Pet Food", count: 21 },
  { name: "Meat Food", count: 45 },
];

const POPULAR_TAGS = [
  "Vegetables",
  "juice",
  "Meat Food",
  "Cabbage",
  "Organic food",
  "juice",
];

const GALLERY_IMAGES = [
  "/images/a.jpg",
  "/images/b.jpg",
  "/images/c.jpg",
  "/images/d.jpg",
  "/images/aa.jpg",
  "/images/bb.jpg",
];

/* ─── Sidebar ──────────────────────────────────────────────────────────────── */
function Sidebar() {
  return (
    <aside className="w-full lg:w-[300px] xl:w-[320px] shrink-0">
      <div className="border border-[#E9E9E9] rounded-[5px] bg-white p-[25px]">

        {/* Search */}
        <div className="flex mb-[45px]">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-1 h-[44px] border border-[#E9E9E9] rounded-l-[5px] px-4 font-poppins text-[14px] text-[#7A7A7A] placeholder-[#7A7A7A] focus:outline-none"
          />
          <button className="h-[44px] w-[44px] bg-[#F53E32] rounded-r-[5px] flex items-center justify-center shrink-0 hover:bg-[#d93229] transition-colors">
            <Search size={15} className="text-white" />
          </button>
        </div>

        {/* Category */}
        <h4 className="font-poppins font-medium text-[16px] leading-[16px] tracking-[0.48px] text-[#2B2B2D] mb-[20px]">
          Category
        </h4>
        <ul className="flex flex-col gap-[10px] mb-[45px]">
          {CATEGORIES.map((cat) => (
            <li
              key={cat.name}
              className="flex items-center justify-between border border-[#E9E9E9] rounded-[5px] h-[40px] px-[13px] hover:border-[#F53E32] transition-colors cursor-pointer"
            >
              <span className="font-poppins font-normal text-[14px] leading-[14px] tracking-[0.48px] text-[#7A7A7A]">
                {cat.name}
              </span>
              <span className="font-poppins font-normal text-[11px] leading-[11px] tracking-[0.48px] text-[#7A7A7A]">
                ({String(cat.count).padStart(2, " ")})
              </span>
            </li>
          ))}
        </ul>

        {/* Recent Post */}
        <h4 className="font-poppins font-medium text-[16px] leading-[16px] tracking-[0.48px] text-[#2B2B2D] mb-[20px]">
          Recent Post
        </h4>
        <div className="border border-[#E9E9E9] rounded-[5px] overflow-hidden mb-[45px]">
          {/* recent post image */}
          <div className="relative w-full h-[153px]">
            <Image
              src="/images/choose.png"
              alt="10 Tasty Organic Fruit"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
          <div className="p-4 text-center">
            <p className="font-poppins font-normal text-[13px] leading-[32px] tracking-[0.48px] text-[#F53E32]">
              Sep 09, 2023
            </p>
            <p className="font-poppins font-bold text-[14px] leading-[17px] tracking-[0.48px] text-[#2B2B2D] mb-1">
              10 Tasty Organic Fruit choose
            </p>
            <p className="font-poppins font-normal text-[13px] leading-[23px] tracking-[0.48px] text-[#7A7A7A]">
              Lorem ipsum dolor consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Latest Gallery */}
        <h4 className="font-poppins font-medium text-[16px] leading-[16px] tracking-[0.48px] text-[#2B2B2D] mb-[20px]">
          Latest Gallery
        </h4>
        <div className="grid grid-cols-3 gap-2 mb-[45px]">
          {GALLERY_IMAGES.map((src, i) => (
            <div key={i} className="relative h-[75px] rounded-[5px] overflow-hidden">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="100px"
              />
            </div>
          ))}
        </div>

        {/* Popular Tags */}
        <h4 className="font-poppins font-medium text-[16px] leading-[16px] tracking-[0.48px] text-[#2B2B2D] mb-[20px]">
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.map((tag, i) => (
            <button
              key={i}
              className="px-4 py-[6px] border border-[#E9E9E9] rounded-[5px] font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] text-[#7A7A7A] capitalize hover:bg-[#F53E32] hover:text-white hover:border-[#F53E32] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </aside>
  );
}

/* ─── page ───────────────────────────────────────────────────────────────────── */
export default function BlogRightSidePage() {
  return (
    <main className="w-full bg-white">
      <Header />

      {/* Banner */}
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

      {/* Main layout */}
      <section className="w-full py-12 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[1320px] flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Left Content Column ── */}
          <div className="flex-1 min-w-0">

            {/* Hero blog image */}
            <div className="relative w-full h-[464px] rounded-[5px] overflow-hidden mb-6">
              <Image
                src="/images/mainbg.jpg"
                alt="Blog hero - Health benefits of raw food"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 70vw, 100vw"
                priority
              />
            </div>

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
              laudantium. Assumenda neque vitae corrupti asperiores, quos vel aliquid hic nisi nostrum
              repellendus dolorem placeat vero odit.
            </p>

            {/* Two sub-images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="relative w-full h-[226px] rounded-[5px] overflow-hidden">
                <Image
                  src="/images/bone.jpg"
                  alt="Blog sub image 1"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 35vw, 100vw"
                />
              </div>
              <div className="relative w-full h-[226px] rounded-[5px] overflow-hidden">
                <Image
                  src="/images/cc.jpg"
                  alt="Blog sub image 2"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 35vw, 100vw"
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
              <p className="font-poppins font-medium text-[14px] leading-[28px] tracking-[0.48px] text-[#2B2B2D] mb-8 pr-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum
                architecto odit soluta quas odio distinctio quae numquam? Quaerat nulla blanditiis
                possimus quae. Iusto doloribus, est aliquam delectus pariatur voluptatem cum iste
                exercitationem rem.
              </p>
              <p className="font-poppins font-bold text-[20px] leading-[20px] tracking-[0.48px] text-[#F53E32]">
                John Martin
              </p>
              <div className="absolute right-6 top-6 opacity-50">
                <Quote size={48} className="text-[#F53E32] rotate-180" />
              </div>
            </div>

            {/* Tags + social bar */}
            <div className="w-full border border-[#E9E9E9] rounded-[5px] bg-white px-3 py-[11px] flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {["Cabbage", "Appetizer", "Meat Food"].map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-[6px] border border-[#E9E9E9] rounded-[5px] font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] text-[#7A7A7A] capitalize hover:bg-[#F53E32] hover:text-white hover:border-[#F53E32] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
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
            <div className="flex items-center gap-0 mb-2">
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

          {/* ── Right Sidebar ── */}
          <Sidebar />

        </div>
      </section>

      <Footer />
    </main>
  );
}
