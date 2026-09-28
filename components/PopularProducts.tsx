"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

type Category = "All" | "Snack" | "Vegetable" | "Fruit" | "Bakery";

type Product = {
  id: string;
  category: string;
  rating: number;
  ratingCount: number;
  title: string;
  price: number;
  oldPrice: number;
  image: string;
};

const CATEGORIES: Category[] = ["All", "Snack", "Vegetable", "Fruit", "Bakery"];

const PRODUCTS: Product[] = [
  {
    id: "1",
    category: "Vegetable",
    rating: 4.5,
    ratingCount: 45,
    title: "Fresh organic villa farm lemon 500gm pack",
    price: 120.25,
    oldPrice: 123.25,
    image: "/images/lmn.jpg",
  },
  {
    id: "2",
    category: "Snack",
    rating: 5.0,
    ratingCount: 50,
    title: "Best snakes with hazel nut pack 200gm",
    price: 145,
    oldPrice: 150,
    image: "/images/ptwo.jpg",
  },
  {
    id: "3",
    category: "Fruit",
    rating: 4.5,
    ratingCount: 45,
    title: "Fresh organic apple 1kg simla marming",
    price: 120.25,
    oldPrice: 123.25,
    image: "/images/pthree.jpg",
  },
  {
    id: "4",
    category: "Fruit",
    rating: 3.2,
    ratingCount: 32,
    title: "Organic fresh venila farm watermelon 5kg",
    price: 50.30,
    oldPrice: 72.60,
    image: "/images/pfour.jpg",
  },
  {
    id: "5",
    category: "Snack",
    rating: 5.0,
    ratingCount: 50,
    title: "Sweet crunchy nut mix 250gm pack",
    price: 120.25,
    oldPrice: 123.25,
    image: "/images/pfive.jpg",
  },
  {
    id: "6",
    category: "Bakery",
    rating: 5.0,
    ratingCount: 50,
    title: "Delicious white baked fresh bread and toast",
    price: 20,
    oldPrice: 22.10,
    image: "/images/psix.jpg",
  },
];

export default function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) =>
          p.category.toLowerCase().startsWith(activeCategory.toLowerCase())
        );

  return (
    <section className="relative w-full bg-white pt-0 pb-[60px] lg:pb-[80px] overflow-hidden">
      
      {/* Side Decorative Watermarks / Vector Illustrations */}
      <div className="absolute left-[5%] top-[-20px] pointer-events-none opacity-25">
        <Image src="/images/leaf.png" alt="Decoration" width={110} height={110} className="object-contain -rotate-45" />
      </div>
      <div className="absolute right-[-15px] top-[180px] pointer-events-none opacity-25">
        <Image src="/images/byngn.png" alt="Decoration" width={90} height={90} className="object-contain rotate-12" />
      </div>
      <div className="absolute left-[-30px] bottom-[100px] pointer-events-none opacity-25">
        <Image src="/images/peach.png" alt="Decoration" width={130} height={130} className="object-contain rotate-45" />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[32px] font-bold leading-[38px] tracking-[0.48px] text-[#2B2B2D]">
            Popular Products
          </h2>
          <p className="mt-[10px] max-w-[600px] font-poppins text-[14px] font-normal leading-[22px] tracking-[0.48px] text-[#7A7A7A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore lacus vel facilisis.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="relative mt-[50px] grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[323px_1fr]">
          
          {/* Responsive Decorative Carrot Illustration */}
          <div 
            className="hidden lg:block absolute z-0 pointer-events-none 
                       xl:left-[-110px] 2xl:left-[-130px]"
            style={{
              top: '120px',
              left: '-80px',
              width: '80px',
              height: '110px',
              opacity: '1',
              transform: 'rotate(0deg)',
            }}
          >
            <Image
              src="/images/stab.png"
              alt="Decorative Carrot"
              width={80}
              height={110}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Left Sidebar (Categories + Banner) */}
          <div className="relative z-10 flex flex-col gap-6 h-full">
            {/* Category Filter List */}
            <div className="flex flex-col gap-[8px] rounded-[5px] bg-white">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex h-[49.33px] w-full items-center justify-between rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] px-[16px] transition-colors hover:border-[#F53E32] ${
                      isActive ? "border-[#F53E32]" : ""
                    }`}
                  >
                    <span
                      className={`font-poppins text-[14px] font-bold tracking-[0.48px] ${
                        isActive ? "text-[#F53E32]" : "text-[#2B2B2D]"
                      }`}
                    >
                      {cat}
                    </span>
                    <ArrowRight
                      size={16}
                      className={`transition-transform ${
                        isActive ? "rotate-0 text-[#F53E32]" : "text-[#2B2B2D]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Promotional Banner Card - Takes remaining height to perfectly match grid */}
            <div 
              className="relative overflow-hidden bg-[#1c1c1c] flex-1 w-full"
              style={{
                minHeight: '625px',
                borderRadius: '15px',
                opacity: '1',
                transform: 'rotate(0deg)',
              }}
            >
              <Image
                src="/images/tall.png"
                alt="Juicy Fruits"
                fill
                className="object-cover"
              />
              {/* Gradient fading from top to bottom so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />

              {/* Content positioned on the upper side */}
              <div className="absolute inset-x-0 top-10 flex flex-col items-start px-8">
                <span className="text-[40px] font-normal leading-[48px] text-white">
                  Juicy
                </span>
                <span className="text-[38px] font-black uppercase leading-[46px] text-[#F7E8AA]">
                  Fruits
                </span>
                <p className="mt-2 font-poppins text-[16px] font-normal text-white">
                  100% Natural
                </p>
                <Link
                  href="#"
                  className="mt-5 flex h-[40px] w-[104.28px] items-center justify-center rounded-[5px] bg-[#F53E32] text-[14px] font-bold capitalize text-white transition-transform hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#EAEAEA] bg-white transition-shadow hover:shadow-lg"
              >
                {/* Product Image Container */}
                <div className="relative h-[240px] w-full bg-[#F7F7F8]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Shopping Bag Badge */}
                <div className="relative flex justify-center">
                  <button
                    aria-label="Add to cart"
                    className="absolute -top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#EBEBEB] bg-white shadow-sm transition-transform hover:scale-110 hover:shadow-md"
                  >
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#F53E32]"
                    >
                      <path
                        d="M3.5 6.5V5.5C3.5 2.46243 5.96243 0 9 0C12.0376 0 14.5 2.46243 14.5 5.5V6.5M1.5 6.5H16.5C17.0523 6.5 17.5 6.94772 17.5 7.5V18.5C17.5 19.0523 17.0523 19.5 16.5 19.5H1.5C0.947715 19.5 0.5 19.0523 0.5 18.5V7.5C0.5 6.94772 0.947715 6.5 1.5 6.5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Product Details Area */}
                <div className="flex flex-col items-center px-4 pt-8 pb-6 text-center">
                  <span className="font-poppins text-[13px] font-medium text-[#888888]">
                    {product.category}
                  </span>

                  {/* Star Rating */}
                  <div className="mt-1 flex items-center gap-[3px]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-[#F88B58] text-[#F88B58]"
                            : "fill-none text-[#DDDDDD]"
                        }
                      />
                    ))}
                    <span className="ml-1 font-poppins text-[12px] text-[#888888]">
                      ({product.rating.toFixed(1)})
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 line-clamp-2 min-h-[44px] font-poppins text-[14px] font-semibold text-[#2B2B2D]">
                    {product.title}
                  </h3>

                  {/* Pricing */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-poppins text-[16px] font-bold text-[#F53E32]">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="font-poppins text-[13px] text-[#A0A0A0] line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}