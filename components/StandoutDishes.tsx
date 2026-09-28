import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

type Dish = {
  title: string;
  description: string;
  image: string;
  liked: boolean;
  dropShadow?: boolean;
};

const DISHES: Dish[] = [
  {
    title: "Fattoush salad",
    description: "Description of the item",
    image: "/images/salad.png",
    liked: true,
  },
  {
    title: "Vegetable salad",
    description: "Description of the item",
    image: "/images/saladtwo.png",
    liked: false,
  },
  {
    title: "Egg vegi salad",
    description: "Description of the item",
    image: "/images/saladegg.png",
    liked: false,
    dropShadow: true,
  },
];

export default function StandoutDishes() {
  return (
    <section className="w-full bg-white px-4 py-[60px] sm:py-[80px]">
      <div className="mx-auto w-full max-w-[1419px]">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-[580px]">
            <span className="block font-inter text-[14px] font-bold uppercase leading-6 tracking-[0.175em] text-[#FF6868] sm:text-[20px]">
              Special Dishes
            </span>
            <h2 className="mt-4 font-inter text-[36px] font-bold leading-[48px] text-black sm:mt-10 sm:text-[60px] sm:leading-[79px]">
              Standout Dishes From Our Menu
            </h2>
          </div>

          <div className="flex items-center gap-[50px] sm:pt-0 xl:mt-[126px]">
            <button
              type="button"
              aria-label="Previous"
              className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#EFEFEF] text-[#6F6E6E] transition-colors hover:bg-[#e2e2e2] sm:h-[80px] sm:w-[80px]"
            >
              <ChevronLeft size={32} strokeWidth={4} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#F53E32] text-white transition-colors hover:bg-[#e0362b] sm:h-[80px] sm:w-[80px]"
            >
              <ChevronRight size={32} strokeWidth={4} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:mt-[63px] xl:grid-cols-3 xl:gap-[39.5px]">
          {DISHES.map((dish) => (
            <article
              key={dish.title}
              className="relative h-[523px] w-full max-w-[446px] rounded-[21px] bg-white shadow-[2px_9px_42px_rgba(0,0,0,0.08)]"
            >
              {/* Heart tab */}
              <span className="absolute right-0 top-0 flex h-[75px] w-[87px] items-center justify-center rounded-bl-[42.5px] rounded-tr-[20px] bg-[#F53E32] text-white">
                <Heart
                  size={24}
                  strokeWidth={2.5}
                  fill={dish.liked ? "currentColor" : "none"}
                />
              </span>

              {/* Image */}
              <div className="relative mx-auto mt-[37px] h-[276px] w-[276px] max-w-[70%]">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  sizes="276px"
                  className="object-contain"
                  style={
                    dish.dropShadow
                      ? { filter: "drop-shadow(2px 5px 9px rgba(0,0,0,0.4))" }
                      : undefined
                  }
                />
              </div>

              {/* Text */}
              <div className="px-[46px]">
                <h3 className="mt-[25px] font-inter text-[30px] font-semibold leading-[36px] text-black">
                  {dish.title}
                </h3>
                <p className="mt-[19px] font-inter text-[22px] font-semibold leading-[27px] text-[#555555]">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}