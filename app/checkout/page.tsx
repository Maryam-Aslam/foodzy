"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState<"free" | "flat">("free");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "upi" | "bank">("cod");
  const [customerOption, setCustomerOption] = useState<"register" | "guest">("register");
  const [addressOption, setAddressOption] = useState<"existing" | "new">("new");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* Red Banner */}
      <section className="relative w-full h-[70px] bg-[#F53E32] flex items-center">
        <div className="mx-auto w-full max-w-[1320px] px-4 flex items-center justify-between">
          <h1 className="font-manrope font-bold text-[19px] leading-[19px] tracking-[0.48px] text-white">
            Checkout
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
              Checkout
            </span>
          </nav>
        </div>
      </section>

      {/* Main Checkout Area */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="mx-auto w-full max-w-[1320px]">
          {orderPlaced && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-[5px] font-segoe text-[15px] flex items-center justify-between">
              <span>Thank you! Your order has been placed successfully.</span>
              <button
                onClick={() => setOrderPlaced(false)}
                className="text-green-700 font-bold hover:underline"
              >
                Dismiss
              </button>
            </div>
          )}

          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Summary & Options (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Summary Card */}
              <div className="border border-[#E9E9E9] rounded-[5px] bg-white p-[16px] shadow-sm">
                <h3 className="font-segoe font-semibold text-[20px] leading-[24px] text-black mb-4">
                  Summary
                </h3>

                <div className="space-y-3 font-segoe">
                  <div className="flex items-center justify-between text-[14px] leading-[24px]">
                    <span className="text-[#7A7A7A]">Sub-Total</span>
                    <span className="text-black font-normal text-[15px]">$80.00</span>
                  </div>
                  <div className="flex items-center justify-between text-[14px] leading-[24px]">
                    <span className="text-[#7A7A7A]">Delivery Charges</span>
                    <span className="text-black font-normal text-[15px]">$80.00</span>
                  </div>
                </div>

                <div className="border-t border-[#E9E9E9] mt-4 pt-3 flex items-center justify-between">
                  <span className="font-manrope font-semibold text-[16px] leading-[24px] text-[#2B2B2D]">
                    Total Amount
                  </span>
                  <span className="font-manrope font-semibold text-[16px] leading-[24px] text-black">
                    $80.00
                  </span>
                </div>

                {/* Products Preview */}
                <div className="border-t border-[#E9E9E9] mt-6 pt-5 space-y-4">
                  {/* Product 1 */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-[80px] h-[80px] shrink-0 border border-[#E9E9E9] rounded-[5px] bg-[#F7F7F8] p-1 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/add.jpg"
                        alt="Dates Value Pack Pouch"
                        fill
                        sizes="80px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-segoe font-normal text-[15px] leading-[18px] text-black truncate">
                        Dates Value Pack Pouch
                      </h4>
                      <div className="flex items-center gap-[2px] mt-1.5 text-[#F4A263]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" stroke="none" />
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-poppins font-bold text-[16px] leading-[28px] text-[#64B496]">
                          $120.25
                        </span>
                        <span className="font-poppins font-normal text-[13px] leading-[23px] text-[#7A7A7A] line-through">
                          $123.25
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product 2 */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-[80px] h-[80px] shrink-0 border border-[#E9E9E9] rounded-[5px] bg-[#F7F7F8] p-1 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/nuts.png"
                        alt="Smoked Honey Spiced Nuts"
                        fill
                        sizes="80px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-segoe font-normal text-[15px] leading-[18px] text-black truncate">
                        Smoked Honey Spiced Nuts
                      </h4>
                      <div className="flex items-center gap-[2px] mt-1.5 text-[#F4A263]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" stroke="none" />
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-poppins font-bold text-[16px] leading-[28px] text-[#64B496]">
                          $120.25
                        </span>
                        <span className="font-poppins font-normal text-[13px] leading-[23px] text-[#7A7A7A] line-through">
                          $123.25
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Method Card */}
              <div className="border border-[#E9E9E9] rounded-[5px] bg-white p-[16px] shadow-sm">
                <h3 className="font-segoe font-semibold text-[20px] leading-[24px] text-black mb-2">
                  Delivery Method
                </h3>
                <p className="font-segoe font-normal text-[13.9px] leading-[24px] text-[#7A7A7A] mb-4">
                  Please select the preferred shipping method to use on this order.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {/* Free Shipping */}
                  <div>
                    <span className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                      Free Shipping
                    </span>
                    <label
                      onClick={() => setShippingMethod("free")}
                      className="flex items-center gap-2 cursor-pointer select-none"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          shippingMethod === "free"
                            ? "border-[#F53E32]"
                            : "border-[#DDDDDD]"
                        }`}
                      >
                        {shippingMethod === "free" && (
                          <span className="w-2 h-2 rounded-full bg-[#F53E32]" />
                        )}
                      </span>
                      <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                        Rate - $0 .00
                      </span>
                    </label>
                  </div>

                  {/* Flat Rate */}
                  <div>
                    <span className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                      Flat Rate
                    </span>
                    <label
                      onClick={() => setShippingMethod("flat")}
                      className="flex items-center gap-2 cursor-pointer select-none"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          shippingMethod === "flat"
                            ? "border-[#F53E32]"
                            : "border-[#DDDDDD]"
                        }`}
                      >
                        {shippingMethod === "flat" && (
                          <span className="w-2 h-2 rounded-full bg-[#F53E32]" />
                        )}
                      </span>
                      <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                        Rate - $5.00
                      </span>
                    </label>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2.5">
                    Add Comments About Your Order
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your comments here..."
                    className="w-full border border-[#E9E9E9] rounded-[5px] p-3 font-segoe text-[14px] text-[#444444] placeholder-[#A0A0A0] focus:outline-none focus:border-[#F53E32] resize-none transition-colors"
                  ></textarea>
                </div>
              </div>

              {/* Payment Method Card */}
              <div className="border border-[#E9E9E9] rounded-[5px] bg-white p-[16px] shadow-sm">
                <h3 className="font-segoe font-semibold text-[20px] leading-[24px] text-black mb-2">
                  Payment Method
                </h3>
                <p className="font-segoe font-light text-[14px] leading-[24px] text-[#7A7A7A] mb-4">
                  Please select the preferred payment method to use on this order.
                </p>

                <div className="space-y-3">
                  {/* COD */}
                  <label
                    onClick={() => setPaymentMethod("cod")}
                    className="flex items-center gap-2.5 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === "cod"
                          ? "border-[#F53E32]"
                          : "border-[#DDDDDD]"
                      }`}
                    >
                      {paymentMethod === "cod" && (
                        <span className="w-2 h-2 rounded-full bg-[#F53E32]" />
                      )}
                    </span>
                    <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                      Cash On Delivery
                    </span>
                  </label>

                  {/* UPI */}
                  <label
                    onClick={() => setPaymentMethod("upi")}
                    className="flex items-center gap-2.5 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === "upi"
                          ? "border-[#F53E32]"
                          : "border-[#DDDDDD]"
                      }`}
                    >
                      {paymentMethod === "upi" && (
                        <span className="w-2 h-2 rounded-full bg-[#F53E32]" />
                      )}
                    </span>
                    <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                      UPI
                    </span>
                  </label>

                  {/* Bank Transfer */}
                  <label
                    onClick={() => setPaymentMethod("bank")}
                    className="flex items-center gap-2.5 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === "bank"
                          ? "border-[#F53E32]"
                          : "border-[#DDDDDD]"
                      }`}
                    >
                      {paymentMethod === "bank" && (
                        <span className="w-2 h-2 rounded-full bg-[#F53E32]" />
                      )}
                    </span>
                    <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                      Bank Transfer
                    </span>
                  </label>
                </div>
              </div>

              {/* Payment Methods Badges Card */}
              <div className="border border-[#E9E9E9] rounded-[5px] bg-white p-[16px] shadow-sm">
                <h3 className="font-segoe font-semibold text-[20px] leading-[24px] text-black mb-4">
                  Payment Method
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Visa Badge */}
                  <div className="h-[28px] px-2.5 border border-[#E9E9E9] rounded-[4px] bg-[#00579F] flex items-center justify-center shadow-xs">
                    <span className="font-bold text-white italic text-[13px] tracking-widest font-sans">
                      VISA
                    </span>
                  </div>
                  {/* Mastercard Badge */}
                  <div className="h-[28px] px-2 border border-[#E9E9E9] rounded-[4px] bg-white flex items-center gap-[2px] shadow-xs">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#EB001B] inline-block opacity-90" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#F79E1B] inline-block -ml-2 opacity-90" />
                  </div>
                  {/* PayPal Badge */}
                  <div className="h-[28px] px-2.5 border border-[#E9E9E9] rounded-[4px] bg-[#003087] flex items-center justify-center shadow-xs">
                    <span className="font-bold text-white text-[12px] italic tracking-tight font-sans">
                      PayPal
                    </span>
                  </div>
                  {/* Skrill Badge */}
                  <div className="h-[28px] px-2.5 border border-[#E9E9E9] rounded-[4px] bg-[#81185B] flex items-center justify-center shadow-xs">
                    <span className="font-bold text-white text-[11px] font-sans">
                      Skrill
                    </span>
                  </div>
                  {/* Maestro Badge */}
                  <div className="h-[28px] px-2 border border-[#E9E9E9] rounded-[4px] bg-white flex items-center gap-[2px] shadow-xs">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#0061A8] inline-block opacity-90" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#CC0000] inline-block -ml-2 opacity-90" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Customers & Billing (8 cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* New Customer & Returning Customer Card */}
              <div className="border border-[#E9E9E9] rounded-[5px] bg-white p-[25px] shadow-sm">
                <h3 className="font-montserrat font-semibold text-[20px] leading-[20px] text-[#2B2B2D] mb-4">
                  New Customer
                </h3>

                <span className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-3">
                  Checkout Options
                </span>

                <div className="flex items-center gap-6 mb-4">
                  <label
                    onClick={() => setCustomerOption("register")}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        customerOption === "register"
                          ? "border-[#64B496]"
                          : "border-[#DDDDDD]"
                      }`}
                    >
                      {customerOption === "register" && (
                        <span className="w-2 h-2 rounded-full bg-[#64B496]" />
                      )}
                    </span>
                    <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                      Register Account
                    </span>
                  </label>

                  <label
                    onClick={() => setCustomerOption("guest")}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        customerOption === "guest"
                          ? "border-[#64B496]"
                          : "border-[#DDDDDD]"
                      }`}
                    >
                      {customerOption === "guest" && (
                        <span className="w-2 h-2 rounded-full bg-[#64B496]" />
                      )}
                    </span>
                    <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                      Guest Account
                    </span>
                  </label>
                </div>

                <p className="font-segoe font-normal text-[13.9px] leading-[24px] text-[#7A7A7A] max-w-[620px] mb-5">
                  By creating an account you will be able to shop faster, be up to date on an order&apos;s status, and keep track of the orders you have previously made.
                </p>

                <button
                  type="button"
                  className="bg-[#F53E32] hover:bg-[#e03429] text-white font-manrope font-bold text-[14px] leading-[17px] tracking-[0.48px] px-6 py-2.5 rounded-[5px] transition-colors"
                >
                  Continue
                </button>

                {/* Returning Customer Section */}
                <div className="border-t border-[#E9E9E9] mt-8 pt-8">
                  <h3 className="font-montserrat font-semibold text-[20px] leading-[20px] text-[#2B2B2D] mb-5">
                    Returning Customer
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#444444] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#444444] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex items-center gap-4">
                      <button
                        type="button"
                        className="bg-[#F53E32] hover:bg-[#e03429] text-white font-manrope font-bold text-[14px] leading-[17px] tracking-[0.48px] px-6 py-2.5 rounded-[5px] transition-colors"
                      >
                        Login
                      </button>
                      <Link
                        href="#"
                        className="font-segoe font-semibold text-[15px] leading-[24px] tracking-[0.8px] text-[#2B2B2D] underline hover:text-[#F53E32] transition-colors"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Details Card */}
              <div className="border border-[#E9E9E9] rounded-[5px] bg-white p-[25px] shadow-sm">
                <h3 className="font-montserrat font-semibold text-[20px] leading-[24px] text-[#2B2B2D] mb-4">
                  Billing Details
                </h3>

                <span className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-3">
                  Checkout Options
                </span>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <label
                    onClick={() => setAddressOption("existing")}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        addressOption === "existing"
                          ? "border-[#F53E32]"
                          : "border-[#DDDDDD]"
                      }`}
                    >
                      {addressOption === "existing" && (
                        <span className="w-2 h-2 rounded-full bg-[#F53E32]" />
                      )}
                    </span>
                    <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                      I want to use an existing address
                    </span>
                  </label>

                  <label
                    onClick={() => setAddressOption("new")}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        addressOption === "new"
                          ? "border-[#F53E32]"
                          : "border-[#DDDDDD]"
                      }`}
                    >
                      {addressOption === "new" && (
                        <span className="w-2 h-2 rounded-full bg-[#F53E32]" />
                      )}
                    </span>
                    <span className="font-segoe text-[14px] leading-[16px] text-[#7A7A7A]">
                      I want to use new address
                    </span>
                  </label>
                </div>

                {/* Form fields */}
                <div className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your first name"
                        className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#444444] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your last name"
                        className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#444444] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address Line 1"
                      className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#444444] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] transition-colors"
                    />
                  </div>

                  {/* City & Post Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                        City *
                      </label>
                      <div className="relative">
                        <select
                          defaultValue=""
                          required
                          className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#7A7A7A] bg-white appearance-none focus:outline-none focus:border-[#F53E32] transition-colors cursor-pointer"
                        >
                          <option value="" disabled>
                            City
                          </option>
                          <option value="ny">New York</option>
                          <option value="la">Los Angeles</option>
                          <option value="ch">Chicago</option>
                          <option value="ho">Houston</option>
                        </select>
                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A7A7A]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                        Post Code
                      </label>
                      <input
                        type="text"
                        placeholder="Post Code"
                        className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#444444] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Country & Region State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                        Country *
                      </label>
                      <div className="relative">
                        <select
                          defaultValue=""
                          required
                          className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#7A7A7A] bg-white appearance-none focus:outline-none focus:border-[#F53E32] transition-colors cursor-pointer"
                        >
                          <option value="" disabled>
                            Country
                          </option>
                          <option value="us">United States</option>
                          <option value="ca">Canada</option>
                          <option value="uk">United Kingdom</option>
                          <option value="au">Australia</option>
                        </select>
                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A7A7A]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-segoe text-[15px] leading-[15px] text-[#2B2B2D] mb-2">
                        Region State
                      </label>
                      <div className="relative">
                        <select
                          defaultValue=""
                          className="w-full h-[50px] border border-[#E9E9E9] rounded-[5px] px-4 font-segoe text-[14px] text-[#7A7A7A] bg-white appearance-none focus:outline-none focus:border-[#F53E32] transition-colors cursor-pointer"
                        >
                          <option value="" disabled>
                            Region/State
                          </option>
                          <option value="ca">California</option>
                          <option value="tx">Texas</option>
                          <option value="fl">Florida</option>
                          <option value="ny">New York</option>
                        </select>
                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A7A7A]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#F53E32] hover:bg-[#e03429] text-white font-manrope font-bold text-[15px] leading-[18px] tracking-[0.48px] px-8 py-3.5 rounded-[5px] transition-colors shadow-sm cursor-pointer"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
