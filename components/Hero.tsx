"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = 3;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide, isPaused, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-[#2D1914]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      {/* Slides Container */}
      <div className="relative w-full h-[520px] sm:h-[600px] md:h-[660px] lg:h-[720px] xl:h-[760px] overflow-hidden">
        {/* ========================================================================= */}
        {/* SLIDE 1: ROAST TURKEY (Hero One - Exact Figma Spec / Cover)              */}
        {/* ========================================================================= */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background & Banner Image */}
          <div className="absolute inset-0 bg-[#2D1914]">
            <Image
              src="/images/cover.png"
              alt="Super Delicious Roast Turkey"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Interactive Overlay & Clickable Hotspots */}
          <div className="relative mx-auto w-full max-w-[1920px] h-full px-6 sm:px-12 lg:px-24 flex flex-col justify-between py-8 lg:py-16 pointer-events-none">
            {/* Top spacer */}
            <div />

            {/* Bottom Controls / Action Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pointer-events-auto">
              {/* Order Now Button */}
              <Link
                href="/shop"
                className="group inline-flex items-center rounded-full bg-[#CCB777] hover:bg-[#bfa966] text-[#402F25] transition-all transform hover:scale-105 shadow-xl overflow-hidden pl-1 pr-7 py-1"
                aria-label="Order Now Roast Turkey"
              >
                <span className="w-12 h-12 rounded-full bg-[#36241E] flex items-center justify-center mr-4 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={20} className="text-[#F9E5C3]" />
                </span>
                <span className="font-montserrat font-extrabold text-[18px] sm:text-[22px] tracking-wide text-[#402F25]">
                  Order Now
                </span>
              </Link>

              {/* Contact & Follow Us */}
              <div className="hidden md:flex flex-col items-end text-right">
                <span className="font-montserrat font-bold text-[13px] text-[#CBB678] tracking-wider uppercase mb-2">
                  Follow Us Now
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="w-7 h-7 rounded-full bg-[#FFF6DC] hover:bg-white text-[#2D1914] flex items-center justify-center transition-colors"
                  >
                    <Facebook size={14} fill="currentColor" stroke="none" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="YouTube"
                    className="w-7 h-7 rounded-full bg-[#FFF6DC] hover:bg-white text-[#2D1914] flex items-center justify-center transition-colors"
                  >
                    <Youtube size={14} fill="currentColor" stroke="none" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Twitter"
                    className="w-7 h-7 rounded-full bg-[#FFF6DC] hover:bg-white text-[#2D1914] flex items-center justify-center transition-colors"
                  >
                    <Twitter size={14} fill="currentColor" stroke="none" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="w-7 h-7 rounded-full bg-[#FFF6DC] hover:bg-white text-[#2D1914] flex items-center justify-center transition-colors"
                  >
                    <Instagram size={14} />
                  </Link>
                </div>
                <div className="font-montserrat font-extrabold text-[14px] text-[#CBB777]">
                  Call Us : 658-7854-9634
                </div>
                <div className="font-montserrat text-[12px] text-[#FFF5DB]/80 mt-0.5">
                  Typeyourwebsitehere
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SLIDE 2: SPAGHETTI PASTA (Hero Two - 50% OFF Deal)                       */}
        {/* ========================================================================= */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-[#20252A]">
            <Image
              src="/images/pagetwocover.png"
              alt="Super Delicious Pasta Deal"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Interactive Button Overlay */}
          <div className="relative mx-auto w-full max-w-[1920px] h-full px-6 sm:px-12 lg:px-24 flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 pointer-events-none">
            <div>
              <Link
                href="/shop"
                className="group inline-flex items-center rounded-full bg-[#CD7A1D] hover:bg-[#b86c15] text-white transition-all transform hover:scale-105 shadow-xl overflow-hidden pl-1 pr-7 py-1 pointer-events-auto"
                aria-label="Order Now Pasta"
              >
                <span className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center mr-3 transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} className="text-white" />
                </span>
                <span className="font-montserrat font-extrabold text-[16px] sm:text-[19px] tracking-wider uppercase">
                  Order Now
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SLIDE 3: 100% ORGANIC VEGETABLES (Hero Three - Fresh Farm Produce)       */}
        {/* ========================================================================= */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4F6F8] via-[#EDF3EF] to-[#E3EFE8]" />

          <div className="relative mx-auto w-full max-w-[1320px] h-full px-6 flex flex-col lg:flex-row items-center justify-between py-10 lg:py-0">
            {/* Left Content */}
            <div className="max-w-[620px] z-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-poppins font-bold text-[18px] sm:text-[22px] text-[#F53E32] border-b-2 border-[#F53E32] pb-0.5">
                  100%
                </span>
                <span className="font-poppins font-bold text-[18px] sm:text-[22px] text-[#212529]">
                  Organic Vegetables
                </span>
              </div>

              <h2 className="font-manrope font-extrabold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-[#2B2B2D] mb-4">
                The best way to stuff your wallet.
              </h2>

              <p className="font-poppins font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#7A7A7A] mb-8 max-w-[500px]">
                Fresh organic fruits, vegetables, and groceries delivered straight from the farm to your doorstep with guaranteed purity.
              </p>

              {/* Action buttons / subscribe */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center bg-[#3BB77E] hover:bg-[#2ea870] text-white font-manrope font-bold text-[16px] px-8 py-3.5 rounded-full transition-all shadow-md transform hover:scale-105"
                >
                  Shop Fresh Produce
                </Link>

                <Link
                  href="/shop-full"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 border border-[#E9E9E9] text-[#2B2B2D] font-manrope font-semibold text-[16px] px-7 py-3.5 rounded-full transition-all shadow-sm"
                >
                  Explore Deals
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative w-full lg:w-[540px] h-[280px] sm:h-[360px] lg:h-[480px] mt-6 lg:mt-0 flex items-center justify-center">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/faq-market.jpg"
                  alt="Fresh Organic Vegetables"
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CAROUSEL NAVIGATION CONTROLS                                              */}
      {/* ========================================================================= */}

      {/* Left Arrow Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all transform hover:scale-110 shadow-lg border border-white/20 cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md flex items-center justify-center transition-all transform hover:scale-110 shadow-lg border border-white/20 cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {[...Array(slideCount)].map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx
                ? "w-8 h-2.5 bg-[#CBB777] shadow-md"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
