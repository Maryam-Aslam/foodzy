
"use client";

import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  author: string;
  category: string;
  title: string;
  image: string;
  date: string;
  month: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    author: "By Admin",
    category: "Snacks",
    title: "Urna pretium elit mauris cursus at elit Vestibulum.",
    image: "/images/bone.jpg",
    date: "10",
    month: "oct",
  },
  {
    author: "By Admin",
    category: "Food",
    title: "Best guide to Shopping for organic ingredients.",
    image: "/images/btwo.jpg",
    date: "09",
    month: "sep",
  },
  {
    author: "By Admin",
    category: "Snacks",
    title: "Cursus at elit vestibulum urna pretium elit mauris.",
    image: "/images/bthree.jpg",
    date: "12",
    month: "oct",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="relative w-full py-[40px] lg:py-[50px] bg-white overflow-hidden">
      
      {/* Left-side Decorative Illustration */}
      <div className="absolute left-[30px] bottom-[40px] pointer-events-none z-0 hidden lg:block">
        <Image
          src="/images/mashroom.png"
          alt="Decoration"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      {/* Right-side Decorative Illustration */}
      <div className="absolute right-[30px] top-[40px] pointer-events-none z-0 hidden lg:block">
        <Image
          src="/images/phol.png"
          alt="Decoration"
          width={70}
          height={70}
          className="object-contain"
        />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="font-['Arial'] font-bold text-[32px] leading-[38.4px] text-[#2B2B2D] tracking-[0.48px] text-center"
          >
            Latest News
          </h2>

          <p className="mt-[6px] max-w-[600px] font-['Poppins'] font-normal text-[14px] leading-[22px] text-[#7A7A7A] tracking-[0.48px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-[5px] border border-[#E9E9E9] bg-white overflow-hidden shadow-sm transition-shadow hover:shadow-md"
              style={{ height: "440.8px" }}
            >
              {/* Top Text Content Area */}
              <div className="flex flex-col px-[25px] pt-[22px]">
                
                {/* Meta Info */}
                <div className="flex items-center gap-2 font-['Poppins'] text-[14px] text-[#777777]">
                  <span>{post.author}</span>
                  <span>|</span>
                  <span className="font-['Arial']">{post.category}</span>
                </div>

                {/* Blog Title */}
                <h5 className="mt-[6px] font-['Poppins'] font-semibold text-[17px] leading-[24px] text-[#2B2B2D] tracking-[0.48px] line-clamp-2">
                  {post.title}
                </h5>

                {/* Read More */}
                <div className="mt-[10px]">
                  <Link
                    href="#"
                    className="inline-flex flex-col font-['Arial'] font-bold text-[14px] leading-[26px] text-[#64B496] tracking-[0.48px] transition-colors hover:opacity-80"
                  >
                    Read More
                    <span className="w-[30px] h-[1px] bg-[#64B496] mt-[-2px]" />
                  </Link>
                </div>
              </div>

              {/* Bottom Image Container */}
              <div className="relative w-full h-[275.54px] bg-[#F7F7F8] mt-auto">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-b-[5px] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Date Badge */}
                <div className="absolute right-[12px] bottom-[12px] w-[59.48px] h-[73.98px] bg-black/70 rounded-[5px] flex flex-col items-center justify-center text-white">
                  <span className="font-['Arial'] font-bold text-[23px] leading-[25px] tracking-[0.48px]">
                    {post.date}
                  </span>

                  <span className="font-['Consolas'] font-normal text-[17px] leading-[19px] tracking-[0.48px] uppercase mt-0.5">
                    {post.month}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
