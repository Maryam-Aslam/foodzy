"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─── shared input styles ─────────────────────────────────────────────────── */
const inputCls =
  "w-full h-[44px] border border-[#E9E9E9] rounded-[5px] bg-white px-[13px] font-segoe text-[14px] text-[#444444] placeholder-[#777777] focus:outline-none focus:border-[#F53E32] transition-colors";

const labelCls =
  "block font-segoe font-normal text-[15px] leading-[15px] text-[#444444] mb-[10px]";

/* ─── page ───────────────────────────────────────────────────────────────────── */
export default function LoginPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* Red Banner */}
      <section className="relative w-full h-[70px] bg-[#F53E32] flex items-center">
        <div className="mx-auto w-full max-w-[1320px] px-4 flex items-center justify-between">
          <h2 className="font-manrope font-bold text-[19px] leading-[19px] tracking-[0.48px] text-white">
            Login
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
              Login
            </span>
          </nav>
        </div>
      </section>

      {/* Form area */}
      <section className="w-full py-16 px-4 bg-[#F7F7F8] flex items-center justify-center min-h-[calc(100vh-70px-300px)]">
        <div className="w-full max-w-[400px] border border-[#E9E9E9] rounded-[5px] bg-white px-[31px] py-[30px]">

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

          {/* Email */}
          <div className="mb-4">
            <label className={labelCls} htmlFor="login-email">
              Email Address*
            </label>
            <input
              type="email"
              id="login-email"
              placeholder="Enter Your Email"
              className={inputCls}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className={labelCls} htmlFor="login-password">
              Password*
            </label>
            <input
              type="password"
              id="login-password"
              placeholder="Enter Your password"
              className={inputCls}
            />
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between mb-[30px]">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                id="login-remember"
                className="w-[18px] h-[18px] border border-[#E9E9E9] rounded-[5px] accent-[#F53E32] cursor-pointer"
              />
              <span className="font-segoe font-normal text-[15px] leading-[15px] text-[#777777]">
                Remember Me
              </span>
            </label>
            <Link
              href="#"
              className="font-segoe font-normal text-[14px] leading-[15px] text-[#777777] hover:text-[#F53E32] transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Actions row */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              id="login-submit"
              className="h-[40px] w-[80px] bg-[#F53E32] rounded-[5px] font-manrope font-bold text-[14px] leading-[17px] text-white capitalize hover:bg-[#d93229] transition-colors"
            >
              Login
            </button>
            <Link
              href="/register"
              className="font-segoe font-normal text-[16px] leading-[24px] tracking-[0.48px] text-[#777777] hover:text-[#F53E32] transition-colors"
            >
              Signup?
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
