"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: 1,
    question: "What Facilities Does Your Hotel Have?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.",
  },
  {
    id: 2,
    question: "How Do I Book A Room For My Vacation?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.",
  },
  {
    id: 3,
    question: "How We are best among others?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.",
  },
  {
    id: 4,
    question: "Is There Any Fitness Center In Your Hotel?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.",
  },
  {
    id: 5,
    question: "What Type Of Room Service Do You Offer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.",
  },
  {
    id: 6,
    question: "What Facilities Does Your Hotel Have?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.",
  },
  {
    id: 7,
    question: "How Do I Book A Room For My Vacation?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* Red Banner */}
      <section className="relative w-full h-[70px] bg-[#F53E32] flex items-center">
        <div className="mx-auto w-full max-w-[1320px] px-4 flex items-center justify-between">
          <h1 className="font-manrope font-bold text-[19px] leading-[19px] tracking-[0.48px] text-white">
            Faq
          </h1>
          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="font-poppins font-medium text-[14px] leading-[18px] tracking-[0.48px] text-white capitalize hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <span className="text-white opacity-80 text-[14px] font-poppins">-</span>
            <span className="font-poppins font-medium text-[14px] leading-[18px] tracking-[0.48px] text-white opacity-85 capitalize">
              Faq
            </span>
          </nav>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Image */}
            <div className="lg:col-span-6 w-full">
              <div className="relative w-full h-[450px] sm:h-[540px] lg:h-[600px] rounded-[5px] overflow-hidden border border-[#E9E9E9] shadow-sm">
                <Image
                  src="/images/faq-market.jpg"
                  alt="Fresh Organic Vegetables Market Stall"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-6 w-full flex flex-col gap-3">
              {FAQ_LIST.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={item.id + "-" + index}
                    className="border border-[#E9E9E9] rounded-[5px] bg-white transition-all overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-gray-50 focus:outline-none"
                    >
                      <span className="font-segoe font-semibold text-[15px] sm:text-[16px] leading-[22px] text-[#2B2B2D]">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <ChevronDown size={18} className="text-[#555555] shrink-0 ml-3" />
                      ) : (
                        <ChevronRight size={18} className="text-[#555555] shrink-0 ml-3" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#F0F0F0]">
                        <p className="font-segoe font-normal text-[14px] leading-[24px] text-[#7A7A7A]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
