"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Trash2, Plus, Minus, Star, ShoppingCart, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 1,
    title: "Organic Lemon",
    image: "/images/lemon.png",
    price: 56.0,
    quantity: 1,
  },
  {
    id: 2,
    title: "Apple Juice",
    image: "/images/aplz.png",
    price: 75.0,
    quantity: 1,
  },
  {
    id: 3,
    title: "Watermelon 5kg Pack",
    image: "/images/wmln.png",
    price: 48.0,
    quantity: 1,
  },
  {
    id: 4,
    title: "Pomegranate 5 kg pack",
    image: "/images/anar.jpg",
    price: 90.0,
    quantity: 1,
  },
  {
    id: 5,
    title: "Organic Peach Fruits",
    image: "/images/peach.png",
    price: 50.0,
    quantity: 1,
  },
];

const POPULAR_PRODUCTS = [
  {
    id: 1,
    category: "Snacks",
    title: "Best snacks with hazel nut mix pack 308gm",
    image: "/images/choc.jpg",
    rating: 5,
    reviewLabel: "(5.0)",
    price: "$120.25",
    oldPrice: "$123.25",
  },
  {
    id: 2,
    category: "Snacks",
    title: "Sweet snacks crunchy nut mix 250gm pack",
    image: "/images/add.jpg",
    rating: 5,
    reviewLabel: "(5.0)",
    price: "$100.00",
    oldPrice: "$110.00",
  },
  {
    id: 3,
    category: "Snacks",
    title: "Best snacks with hazel nut mix pack 308gm",
    image: "/images/lemon.png",
    rating: 4.5,
    reviewLabel: "(4.5)",
    price: "$120.25",
    oldPrice: "$123.25",
  },
  {
    id: 4,
    category: "Snacks",
    title: "Sweet snacks crunchy nut mix 250gm pack",
    image: "/images/aplz.png",
    rating: 5,
    reviewLabel: "(5.0)",
    price: "$100.00",
    oldPrice: "$110.00",
  },
];

function Stars({ rating }: { rating: number }) {
  const row = (
    <div className="flex gap-[2px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={13} fill="currentColor" stroke="none" />
      ))}
    </div>
  );
  const pct = (rating / 5) * 100;
  return (
    <div className="relative inline-flex">
      <div className="text-[#E4E4E4]">{row}</div>
      <div
        className="absolute inset-y-0 left-0 overflow-hidden text-[#F5885F]"
        style={{ width: `${pct}%` }}
      >
        {row}
      </div>
    </div>
  );
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="w-full bg-white min-h-screen">
      <Header />

      {/* Red Banner */}
      <section className="relative w-full h-[70px] bg-[#F53E32] flex items-center">
        <div className="mx-auto w-full max-w-[1320px] px-4 flex items-center justify-between">
          <h1 className="font-manrope font-bold text-[19px] leading-[19px] tracking-[0.48px] text-white">
            Cart
          </h1>
          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="font-poppins font-medium text-[14px] leading-[18px] tracking-[0.48px] text-white capitalize hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <span className="text-white opacity-80 text-[14px] font-poppins">/</span>
            <span className="font-poppins font-medium text-[14px] leading-[18px] tracking-[0.48px] text-white opacity-85 capitalize">
              Cart
            </span>
          </nav>
        </div>
      </section>

      {/* Cart Content */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="mx-auto w-full max-w-[1295px]">
          {/* Table Container */}
          <div className="w-full border border-[#E9E9E9] rounded-[5px] overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                {/* Table Header */}
                <thead>
                  <tr className="bg-[#E9E9E9] h-[46px] border-b border-[#E9E9E9]">
                    <th className="py-2 px-4 font-segoe font-semibold text-[15px] text-[#444444] capitalize w-[42%]">
                      Product
                    </th>
                    <th className="py-2 px-4 font-segoe font-semibold text-[15px] text-[#444444] capitalize w-[16%]">
                      Price
                    </th>
                    <th className="py-2 px-4 font-segoe font-semibold text-[15px] text-[#444444] capitalize text-center w-[20%]">
                      Quantity
                    </th>
                    <th className="py-2 px-4 font-segoe font-semibold text-[15px] text-[#444444] capitalize w-[14%]">
                      Total
                    </th>
                    <th className="py-2 px-4 font-segoe font-semibold text-[15px] text-[#444444] capitalize text-center w-[8%]">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => {
                      const itemTotal = (item.price * item.quantity).toFixed(2);
                      return (
                        <tr
                          key={item.id}
                          className="h-[111px] bg-[#F7F7F8] border-b border-[#E9E9E9] last:border-b-0 hover:bg-[#F2F2F3] transition-colors"
                        >
                          {/* Product Image & Name */}
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-[20px]">
                              <div className="relative w-[60px] h-[60px] shrink-0 border border-[#E9E9E9] rounded-[5px] bg-white flex items-center justify-center p-1 overflow-hidden">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="60px"
                                  className="object-contain p-1"
                                />
                              </div>
                              <span className="font-segoe font-normal text-[14px] leading-[21px] tracking-[0.6px] text-[#444444]">
                                {item.title}
                              </span>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="py-3 px-4">
                            <span className="font-segoe font-normal text-[15px] leading-[22px] tracking-[0.48px] text-[#555555]">
                              ${item.price.toFixed(2)}
                            </span>
                          </td>

                          {/* Quantity */}
                          <td className="py-3 px-4">
                            <div className="w-[80px] h-[30px] mx-auto bg-white border border-[#E9E9E9] rounded-[5px] flex items-center justify-between px-1">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-[24px] h-[25px] flex items-center justify-center font-segoe text-[16px] text-black hover:text-[#F53E32] transition-colors"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                              <span className="font-segoe font-semibold text-[14px] text-[#444444] select-none">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-[24px] h-[25px] flex items-center justify-center font-segoe text-[16px] text-black hover:text-[#F53E32] transition-colors"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                            </div>
                          </td>

                          {/* Total */}
                          <td className="py-3 px-4">
                            <span className="font-segoe font-normal text-[15px] leading-[22px] tracking-[0.48px] text-[#555555]">
                              ${itemTotal}
                            </span>
                          </td>

                          {/* Action (Remove) */}
                          <td className="py-3 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="text-[#555555] hover:text-[#F53E32] transition-colors p-2 inline-flex items-center justify-center"
                              title="Remove item"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-[#777777] font-segoe text-[16px]">
                        Your cart is empty.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Actions Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/shop"
              className="font-segoe font-normal text-[15px] leading-[20px] tracking-[0.8px] text-[#444444] underline hover:text-[#F53E32] transition-colors"
            >
              Continue Shopping
            </Link>

            <Link
              href="/checkout"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F53E32] hover:bg-[#e03429] text-white font-manrope font-bold text-[14px] leading-[17px] tracking-[0.48px] capitalize px-[28px] py-[11px] rounded-[5px] transition-colors shadow-sm"
            >
              Check Out
            </Link>
          </div>

          {/* Popular Products Section */}
          <div className="mt-20">
            <div className="text-center max-w-[650px] mx-auto mb-10">
              <h2 className="font-manrope font-bold text-[28px] leading-[34px] text-[#2B2B2D]">
                Popular Products
              </h2>
              <p className="mt-2 font-poppins font-normal text-[13px] leading-[22px] text-[#7A7A7A]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {POPULAR_PRODUCTS.map((prod) => (
                <div
                  key={prod.id}
                  className="group relative flex flex-col items-center rounded-[5px] border border-[#E9E9E9] bg-white pb-[24px] pt-[13px] hover:shadow-md transition-shadow"
                >
                  <div className="relative mx-[13px] flex h-[240px] w-[calc(100%-26px)] items-center justify-center overflow-hidden rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8]">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(min-width: 1024px) 250px, 50vw"
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Quick action buttons */}
                    <div className="absolute -bottom-[16px] left-1/2 flex -translate-x-1/2 gap-[15px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <button
                        type="button"
                        aria-label="Add to cart"
                        className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#E9E9E9] bg-[#F7F7F8] text-[#64B496] transition-colors hover:bg-[#64B496] hover:text-white"
                      >
                        <ShoppingCart size={15} />
                      </button>
                      <button
                        type="button"
                        aria-label="Add to wishlist"
                        className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-[#E9E9E9] bg-[#F7F7F8] text-[#64B496] transition-colors hover:bg-[#64B496] hover:text-white"
                      >
                        <Heart size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-[20px] flex flex-col items-center px-[13px] text-center w-full">
                    <span className="font-segoe text-[13px] leading-5 tracking-[0.48px] text-[#777777]">
                      {prod.category}
                    </span>

                    <div className="mt-[6px] flex items-center gap-[6px]">
                      <Stars rating={prod.rating} />
                      <span className="font-poppins text-[11px] leading-[10px] tracking-[0.48px] text-[#999999]">
                        {prod.reviewLabel}
                      </span>
                    </div>

                    <h3 className="mt-[8px] line-clamp-2 font-segoe font-semibold text-[14px] leading-5 text-[#2B2B2D] hover:text-[#F53E32] transition-colors cursor-pointer">
                      {prod.title}
                    </h3>

                    <div className="mt-[10px] flex items-center gap-2">
                      <span className="font-poppins font-bold text-[16px] leading-5 text-[#F53E32]">
                        {prod.price}
                      </span>
                      <span className="font-poppins text-[13px] leading-5 text-[#7A7A7A] line-through">
                        {prod.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
