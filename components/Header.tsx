"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Search,
  User,
  Heart,
  ShoppingCart,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  hasChildren: boolean;
  children?: { label: string; href: string }[];
};

const NAV_LINKS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    hasChildren: true,
    children: [
      { label: "Home One", href: "/" },
      { label: "Home Two", href: "/home-two" },
    ],
  },
  { label: "Category", href: "#", hasChildren: true },
  { label: "Products", href: "#", hasChildren: true },
  { label: "Pages", href: "#", hasChildren: true },
  { label: "Blog", href: "#", hasChildren: true },
  { label: "Elements", href: "#", hasChildren: true },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);

  return (
    <header className="relative z-30 w-full border-b border-line bg-white">
      {/* ===== Top bar: hamburger / primary nav / phone ===== */}
      <div className="relative h-[55px] w-full bg-white shadow-topbar">
        <div className="mx-auto flex h-full max-w-container items-center justify-between px-4 sm:px-8 xl:px-[312px]">
          {/* Category / mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileNavOpen((v) => !v)}
            className="flex h-[35px] w-[35px] items-center justify-center rounded-[5px] border border-line text-[#2B2B2D] transition-colors hover:bg-gray-50 lg:hidden"
          >
            {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <button
            type="button"
            aria-label="Toggle category menu"
            className="hidden h-[35px] w-[35px] items-center justify-center rounded-[5px] border border-line text-[#2B2B2D] transition-colors hover:bg-gray-50 lg:flex"
          >
            <Menu size={20} />
          </button>

          {/* Primary nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 font-poppins text-sm font-medium tracking-[0.48px] text-black hover:text-primary"
                  >
                    {item.label}
                    {item.hasChildren && (
                      <ChevronDown size={14} strokeWidth={2} />
                    )}
                  </Link>

                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <ul className="w-[170px] rounded-[5px] border border-line bg-white py-2 shadow-lg">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-5 py-2 font-poppins text-sm font-medium tracking-[0.48px] text-black hover:bg-gray-50 hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone */}
          <Link
            href="tel:+1234567890"
            className="hidden items-center gap-2 font-segoe text-[15px] leading-[22px] text-black sm:flex"
          >
            <Phone size={20} className="text-ink-soft" />
            <span>+123 ( 456 ) ( 7890 )</span>
          </Link>
        </div>

        {/* Mobile nav drawer */}
        {mobileNavOpen && (
          <nav className="absolute left-0 top-full w-full border-b border-line bg-white shadow-lg lg:hidden">
            <ul className="flex flex-col divide-y divide-line px-4">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setHomeOpen((v) => !v)}
                        className="flex w-full items-center justify-between py-3 font-poppins text-sm font-medium text-black"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={homeOpen ? "rotate-180" : ""}
                        />
                      </button>
                      {homeOpen && (
                        <ul className="mb-3 flex flex-col border-l-2 border-line pl-4">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block py-2 font-poppins text-sm font-medium text-black"
                                onClick={() => setMobileNavOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 font-poppins text-sm font-medium text-black"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {item.label}
                      {item.hasChildren && <ChevronDown size={14} />}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* ===== Main header: logo / search / account-wishlist-cart ===== */}
      <div className="mx-auto flex h-auto min-h-[86px] max-w-container flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:flex-nowrap lg:gap-8 xl:px-[312px] xl:py-0">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
       <div className="relative h-[86px] w-[200px] shrink-0">
  <div className="absolute left-[-24px] top-[0.29px] h-[85.42px] w-[85.42px]">
    <Image src="/images/logo.png" alt="Foodzy Logo" fill className="object-contain" priority />
  </div>
  <span className="absolute left-[53.08px] top-[23.21px] flex h-[19.79px] w-[93.75px] items-center font-inter text-[24px] font-black tracking-[0.48px] text-black">
    Foodzy
  </span>
  <span className="absolute left-[47.88px] top-[51.33px] flex h-[9.37px] w-[128.13px] items-center font-inter text-[11.98px] font-semibold text-[#221F1F]">
    A Treasure of Tastes
  </span>
</div>
        </Link>

        {/* Search */}
        <form
          role="search"
          className="order-3 flex h-[45px] w-full min-w-0 flex-1 overflow-hidden rounded-[5px] border border-primary bg-white lg:order-none lg:max-w-[600px]"
        >
          <input
            type="text"
            placeholder="Search For items..."
            className="min-w-0 flex-1 bg-transparent px-4 font-poppins text-[13px] leading-5 text-ink-muted placeholder:text-ink-muted focus:outline-none"
          />
          <label className="relative hidden shrink-0 items-center border-l border-primary px-4 font-segoe text-[13px] leading-5 text-ink-soft sm:flex">
            <select
              className="appearance-none bg-transparent pr-5 focus:outline-none"
              defaultValue="all"
            >
              <option value="all">All Categories</option>
              <option value="fruits">Fruits &amp; Veg</option>
              <option value="bakery">Bakery</option>
              <option value="beverages">Beverages</option>
            </select>
            <ChevronDown
              size={12}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
            />
          </label>
          <button
            type="submit"
            aria-label="Search"
            className="flex w-[45px] shrink-0 items-center justify-center rounded-r-[5px] bg-primary-dark text-white transition-opacity hover:opacity-90"
          >
            <Search size={16} />
          </button>
        </form>

        {/* Account / Wishlist / Cart */}
        <div className="flex shrink-0 items-center gap-6 xl:gap-8">
          <Link
            href="#"
            className="hidden items-center gap-2 font-poppins text-[15px] font-medium tracking-[0.48px] text-black md:flex"
          >
            <User size={21} strokeWidth={1.75} />
            Account
          </Link>
          <Link
            href="#"
            className="hidden items-center gap-2 font-poppins text-[15px] font-medium tracking-[0.48px] text-black md:flex"
          >
            <Heart size={21} strokeWidth={1.75} />
            Wishlist
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 font-poppins text-[15px] font-medium tracking-[0.48px] text-black"
          >
            <ShoppingCart size={21} strokeWidth={1.75} />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}