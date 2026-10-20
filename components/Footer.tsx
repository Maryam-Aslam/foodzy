import Image from "next/image";
import Link from "next/link";
import {
  AtSign,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Delivery Information", href: "/faq" },
  { label: "Privacy Policy", href: "/faq" },
  { label: "Terms & Conditions", href: "/faq" },
  { label: "Contact Us", href: "/about" },
  { label: "Support Center", href: "/faq" },
];

const CATEGORY_LINKS = [
  { label: "Dairy & Bakery", href: "/shop" },
  { label: "Fruits & Vegetable", href: "/shop-full" },
  { label: "Snack & Spice", href: "/shop" },
  { label: "Juice & Drinks", href: "/shop-full" },
  { label: "Chicken & Meat", href: "/shop" },
  { label: "Fast Food", href: "/shop-full" },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X" },
  { icon: AtSign, label: "Pinterest" },
  { icon: Instagram, label: "Instagram" },
];

const GALLERY = [
  "/images/dd.jpg",
  "/images/ee.jpg",
  "/images/dd.jpg",
  "/images/ee.jpg",
  "/images/dd.jpg",
];

const headingClass =
  "font-[Arial,sans-serif] text-[16px] sm:text-[18px] font-bold leading-[23px] tracking-[0.48px] text-black";

const linkClass =
  "font-poppins text-[13px] sm:text-[14px] leading-[26px] tracking-[0.48px] text-[#777777] transition-colors hover:text-[#F53E32]";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-[#E9E9E9] bg-[#F7F7F8] overflow-hidden">
      {/* Decorative items — only on xl+ */}
      <Image
        src="/images/tomato.png"
        alt=""
        width={70}
        height={70}
        className="pointer-events-none absolute right-[4%] -top-[35px] hidden xl:block"
      />
      <Image
        src="/images/lemon.png"
        alt=""
        width={65}
        height={65}
        className="pointer-events-none absolute left-[-10px] top-[220px] hidden xl:block"
      />
      <Image
        src="/images/chili.png"
        alt=""
        width={120}
        height={60}
        className="pointer-events-none absolute bottom-[20px] right-[7%] hidden xl:block"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 pt-[50px] sm:px-6 xl:pt-[101px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-[1fr_180px_180px_380px] xl:gap-12">
          
          {/* Column 1: brand + contact */}
          <div className="sm:col-span-2 xl:col-span-1">
            <Link href="/" className="flex items-center gap-[10px]">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[14px]">
                <Image
                  src="/images/logo.png"
                  alt="Foodzy Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="flex flex-col">
                <span className="font-[Arial,sans-serif] text-[18px] font-bold leading-[18px] tracking-[0.48px] text-black">
                  Foodzy
                </span>
                <span className="mt-[5px] font-inter text-[10px] font-semibold leading-3 text-[#818181]">
                  A Treasure of Tastes
                </span>
              </span>
            </Link>

            <p className="mt-[18px] font-poppins text-[13px] sm:text-[14px] leading-6 tracking-[0.48px] text-[#7A7A7A] max-w-[380px]">
              FoodTrove is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>

            <ul className="mt-[24px] flex flex-col gap-[14px] font-poppins text-[13px] sm:text-[14px] tracking-[0.48px] text-[#777777]">
              <li className="flex items-start gap-[10px]">
                <MapPin size={17} className="mt-[3px] shrink-0 text-[#F53E32]" />
                <span className="max-w-[340px] leading-[23px]">
                  51 Green St, Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                </span>
              </li>
              <li className="flex items-center gap-[10px]">
                <Mail size={17} className="shrink-0 text-[#F53E32]" />
                <span className="leading-5">example@email.com</span>
              </li>
              <li className="flex items-center gap-[10px]">
                <Phone size={17} className="shrink-0 text-[#F53E32]" />
                <span className="leading-5">+91 123 4567890</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className={headingClass}>Company</h4>
            <ul className="mt-5 flex flex-col gap-[14px] sm:gap-[18px]">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Category */}
          <div>
            <h4 className={headingClass}>Category</h4>
            <ul className="mt-5 flex flex-col gap-[14px] sm:gap-[18px]">
              {CATEGORY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="sm:col-span-2 xl:col-span-1">
            <h4 className={headingClass}>Subscribe Our Newsletter</h4>

            <form className="relative mt-[17px] h-[44px] w-full max-w-[416px]">
              <input
                type="text"
                placeholder="Search here..."
                className="h-full w-full rounded-[5px] border border-[#E9E9E9] bg-white px-4 pr-12 font-poppins text-[14px] text-[#253D4E] placeholder:text-[#7A7A7A] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black"
              >
                <Send size={20} />
              </button>
            </form>

            <div className="mt-[24px] flex gap-2">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-[5px] border border-[#E1DFDF] bg-white text-black transition-colors hover:border-[#F53E32] hover:text-[#F53E32]"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>

            <div className="mt-[24px] grid grid-cols-5 gap-2 sm:gap-3 max-w-[300px] sm:max-w-[416px]">
              {GALLERY.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square w-full overflow-hidden rounded-[5px] bg-[#E9E9E9]"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="74px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[50px] border-t border-[#E9E9E9] py-[19px] text-center font-poppins text-[13px] sm:text-[14px] leading-[20px] tracking-[0.48px] text-black xl:mt-[80px]">
          © 2025 <span className="text-[#F53E32]">Foodzy</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}