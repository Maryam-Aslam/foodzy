import Image from "next/image";
import Link from "next/link";

type Category = {
  title: string;
  count: string;
  image: string;
  href: string;
  bg: string;
};

const CATEGORIES: Category[] = [
  {
    title: "Main Dish",
    count: "86 dishes",
    image: "/images/one.png",
    href: "#",
    bg: "rgba(192, 178, 99, 0.17)",
  },
  {
    title: "Break Fast",
    count: "12 items",
    image: "/images/two.png",
    href: "#",
    bg: "rgba(192, 178, 99, 0.17)",
  },
  {
    title: "Dessert",
    count: "48 items",
    image: "/images/three.png",
    href: "#",
    bg: "rgba(192, 178, 99, 0.17)",
  },
  {
    title: "Browse All",
    count: "255 Items",
    image: "/images/four.png",
    href: "#",
    bg: "#F4F2E4",
  },
  {
    title: "Breakfast Food",
    count: "205 Items",
    image: "/images/fivee.png",
    href: "#",
    bg: "#F4F2E4",
  },
];

export default function PopularCategories() {
  return (
    <section className="w-full bg-white px-4 py-[60px] sm:py-[100px]">
      <div className="mx-auto flex w-full max-w-[1540px] flex-col items-center">
        {/* Header */}
        <span className="font-montserrat text-[12px] font-bold uppercase tracking-[0.12em] text-[#FF4732] sm:text-[16px] md:text-[20px]">
          Customer Favorites
        </span>
        <h2 className="mt-3 text-center font-inter text-[28px] font-bold leading-tight text-black sm:text-[40px] md:text-[56px]">
          Popular Categories
        </h2>

        {/* Cards — fully fluid */}
        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:mt-[56px] sm:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group flex flex-col items-center rounded-[20px] bg-white shadow-[2px_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-2 p-4 sm:p-6"
            >
              {/* Circle + image */}
              <div
                className="relative flex h-[90px] w-[90px] items-center justify-center rounded-full sm:h-[110px] sm:w-[110px] md:h-[120px] md:w-[120px]"
                style={{ background: cat.bg }}
              >
                <div className="relative h-[65px] w-[65px] sm:h-[80px] sm:w-[80px] md:h-[90px] md:w-[90px]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(min-width: 1024px) 90px, (min-width: 640px) 80px, 65px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-center font-inter text-[14px] font-semibold leading-tight text-[#1E1E1E] sm:text-[18px] md:text-[22px]">
                {cat.title}
              </h3>

              {/* Count */}
              <p className="mt-1 text-center font-inter text-[11px] font-medium text-[#555555] sm:text-[14px] md:text-[16px]">
                ({cat.count})
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}