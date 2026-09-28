import Image from "next/image";
import Link from "next/link";

type Shadow = {
  w: number;
  h: number;
  x: number;
  y: number;
  blur: number;
  rotate?: number;
};

type Category = {
  title: string;
  count: string;
  image: string;
  href: string;
  card: { w: number; h: number };
  extraClass?: string; // xl-only tweaks (e.g. group spacing from Figma)
  circle: { size: number; left: number; top: number; bg: string };
  img: { w: number; h: number; x: number; y: number }; // relative to circle
  shadows: Shadow[]; // relative to circle
  title_: { left: number; top: number; className?: string };
  countPos: { left: number; top: number; w: number };
};

const CREAM = "rgba(192, 178, 99, 0.17)";
const LIGHT = "#F4F2E4";

const CATEGORIES: Category[] = [
  {
    title: "Main Dish",
    count: "(86 dishes)",
    image: "/images/one.png",
    href: "#",
    card: { w: 280, h: 280 },
    circle: { size: 117, left: 72, top: 33, bg: CREAM },
    img: { w: 106, h: 78, x: 5, y: 20 },
    shadows: [{ w: 54, h: 11, x: 32, y: 76, blur: 6 }],
    title_: { left: 56, top: 158 },
    countPos: { left: 64, top: 194, w: 140 },
  },
  {
    title: "Break Fast",
    count: "(12 break fast)",
    image: "/images/two.png",
    href: "#",
    card: { w: 254, h: 286 },
    extraClass: "xl:mr-[9px]",
    circle: { size: 110, left: 73, top: 39, bg: CREAM },
    img: { w: 80, h: 52, x: 15, y: 27 },
    shadows: [
      { w: 46.21, h: 10.11, x: 20.69, y: 58.65, blur: 5, rotate: -3.19 },
      { w: 29.75, h: 15.94, x: 55.14, y: 47.99, blur: 5, rotate: 36.38 },
    ],
    title_: { left: 61, top: 154 },
    countPos: { left: 58, top: 194, w: 158 },
  },
  {
    title: "Dessert",
    count: "(48 dessert)",
    image: "/images/three.png",
    href: "#",
    card: { w: 237, h: 286 },
    circle: { size: 117, left: 48, top: 32, bg: CREAM },
    img: { w: 85, h: 75, x: 16, y: 21 },
    shadows: [{ w: 46, h: 13, x: 36, y: 96, blur: 5 }],
    title_: { left: 71, top: 154 },
    countPos: { left: 63, top: 202, w: 132 },
  },
  {
    title: "Browse All",
    count: "(255 Items)",
    image: "/images/four.png",
    href: "#",
    card: { w: 254, h: 286 },
    circle: { size: 113, left: 72, top: 43, bg: LIGHT },
    img: { w: 57, h: 68, x: 28, y: 22 },
    shadows: [
      { w: 33, h: 14, x: 22, y: 74, blur: 5 },
      { w: 33, h: 13, x: 49, y: 82, blur: 5 },
    ],
    title_: { left: 54, top: 164 },
    countPos: { left: 70, top: 212, w: 122 },
  },
  {
    title: "Breakfast Food",
    count: "(205 Items)",
    image: "/images/fivee.png",
    href: "#",
    card: { w: 254, h: 286 },
    circle: { size: 113, left: 72, top: 43, bg: LIGHT },
    img: { w: 80, h: 92, x: 17, y: 11 },
    shadows: [
      { w: 33, h: 14, x: 22, y: 74, blur: 5 },
      { w: 33, h: 13, x: 49, y: 82, blur: 5 },
    ],
    title_: {
      left: 23,
      top: 165,
      className: "font-nunito text-[31px] font-medium leading-[120%] text-black",
    },
    countPos: { left: 70, top: 212, w: 122 },
  },
];

export default function PopularCategories() {
  return (
    <section className="w-full bg-white px-4 py-[60px] sm:py-[100px]">
      <div className="mx-auto flex w-full max-w-[1540px] flex-col items-center">
        {/* Header */}
        <span className="font-montserrat text-[14px] font-bold uppercase tracking-[0.12em] text-[#FF4732] sm:text-[20px]">
          Customer Favorites
        </span>
        <h2 className="mt-3 text-center font-inter text-[36px] font-bold leading-tight text-black sm:text-[56px]">
          Popular Catagories
        </h2>

        {/* Cards */}
        <div className="mt-10 flex w-full flex-wrap items-end justify-center gap-6 sm:mt-[56px] lg:gap-[40px] xl:gap-[63px]">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              style={{ width: cat.card.w, height: cat.card.h }}
              className={`group relative block shrink-0 rounded-[20px] bg-white shadow-[2px_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-2 ${
                cat.extraClass ?? ""
              }`}
            >
              {/* Circle + image + blurred shadows */}
              <div
                className="absolute rounded-full"
                style={{
                  width: cat.circle.size,
                  height: cat.circle.size,
                  left: cat.circle.left,
                  top: cat.circle.top,
                  background: cat.circle.bg,
                }}
              >
                {cat.shadows.map((s, i) => (
                  <span
                    key={i}
                    className="absolute rounded-full bg-[#2B2B2B]"
                    style={{
                      width: s.w,
                      height: s.h,
                      left: s.x,
                      top: s.y,
                      filter: `blur(${s.blur}px)`,
                      transform: s.rotate ? `rotate(${s.rotate}deg)` : undefined,
                    }}
                  />
                ))}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={cat.img.w}
                  height={cat.img.h}
                  className="absolute object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{ left: cat.img.x, top: cat.img.y }}
                />
              </div>

              {/* Title */}
              <h3
                className={`absolute whitespace-nowrap ${
                  cat.title_.className ??
                  "font-inter text-[30px] font-semibold leading-[36px] text-[#1E1E1E]"
                }`}
                style={{ left: cat.title_.left, top: cat.title_.top }}
              >
                {cat.title}
              </h3>

              {/* Count */}
              <p
                className="absolute whitespace-nowrap text-center font-inter text-[22px] font-medium leading-[27px] text-[#555555]"
                style={{
                  left: cat.countPos.left,
                  top: cat.countPos.top,
                  width: cat.countPos.w,
                }}
              >
                {cat.count}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}