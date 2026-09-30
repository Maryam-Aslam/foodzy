"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── shared input styles ─────────────────────────────────────────────────── */
const inputCls =
  "w-full h-[41px] border border-[#E9E9E9] rounded-[5px] bg-white px-[13px] font-segoe text-[14px] text-[#444444] placeholder-[#777777] focus:outline-none focus:border-[#F53E32] transition-colors";

const selectCls =
  "w-full h-[41px] border border-[#E9E9E9] rounded-[5px] bg-[#EFEFEF] px-[13px] font-segoe text-[14px] text-[#777777] focus:outline-none focus:border-[#F53E32] transition-colors appearance-none cursor-pointer";

const labelCls =
  "block font-segoe font-normal text-[15px] leading-[15px] text-[#444444] mb-[10px]";

/* ─── page ───────────────────────────────────────────────────────────────────── */
export default function RegisterPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* Red Banner */}
      <section className="relative w-full h-[70px] bg-[#F53E32] flex items-center">
        <div className="mx-auto w-full max-w-[1320px] px-4 flex items-center justify-between">
          <h2 className="font-manrope font-bold text-[19px] leading-[19px] tracking-[0.48px] text-white">
            Register
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
              Register
            </span>
          </nav>
        </div>
      </section>

      {/* Form area */}
      <section className="w-full py-16 px-4 bg-[#F7F7F8] flex items-center justify-center min-h-[calc(100vh-70px-300px)]">
        <div className="w-full max-w-[600px] border border-[#E9E9E9] rounded-[5px] bg-white px-[31px] py-[30px]">

          {/* Logo */}
          <div className="flex flex-col items-center mb-[30px]">
            <div className="relative w-[62px] h-[62px] mb-2">
              <Image
                src="/images/logo.png"
                alt="Foodzy Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-manrope font-bold text-[20px] leading-[18px] tracking-[0.48px] text-[#2B2B2D]">
              Foodzy
            </span>
          </div>

          {/* Row 1 — First Name / Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelCls}>First Name*</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className={inputCls}
                id="register-first-name"
              />
            </div>
            <div>
              <label className={labelCls}>Last Name*</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className={inputCls}
                id="register-last-name"
              />
            </div>
          </div>

          {/* Row 2 — Email / Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelCls}>Email*</label>
              <input
                type="email"
                placeholder="Enter Your email"
                className={inputCls}
                id="register-email"
              />
            </div>
            <div>
              <label className={labelCls}>Phone Number*</label>
              <input
                type="tel"
                placeholder="Enter Your phone number"
                className={inputCls}
                id="register-phone"
              />
            </div>
          </div>

          {/* Row 3 — Address (full width) */}
          <div className="mb-4">
            <label className={labelCls}>Address*</label>
            <input
              type="text"
              placeholder="Address"
              className={inputCls}
              id="register-address"
            />
          </div>

          {/* Row 4 — City / Post Code */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelCls}>City*</label>
              <select className={selectCls} id="register-city" defaultValue="">
                <option value="" disabled>City</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Houston</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Post Code</label>
              <input
                type="text"
                placeholder="Post Code"
                className={inputCls}
                id="register-postcode"
              />
            </div>
          </div>

          {/* Row 5 — Country / Region State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[30px]">
            <div>
              <label className={labelCls}>Country*</label>
              <select className={selectCls} id="register-country" defaultValue="">
                <option value="" disabled>Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Region State*</label>
              <select className={selectCls} id="register-region" defaultValue="">
                <option value="" disabled>Region/State</option>
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
                <option>Florida</option>
              </select>
            </div>
          </div>

          {/* Actions row */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              id="register-submit"
              className="h-[40px] w-[89px] bg-[#F53E32] rounded-[5px] font-manrope font-bold text-[14px] leading-[17px] text-white capitalize hover:bg-[#d93229] transition-colors"
            >
              Signup
            </button>
            <Link
              href="/login"
              className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0.48px] text-[#777777] hover:text-[#F53E32] transition-colors"
            >
              Have an account?
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
