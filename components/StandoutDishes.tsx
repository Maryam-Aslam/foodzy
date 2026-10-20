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
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="max-w-[580px]">
            <span className="block font-inter text-[12px] font-bold uppercase leading-6 tracking-[0.175em] text-[#FF6868] sm:text-[16px] md:text-[20px]">
              Special Dishes
            </span>
            <h2 className="mt-3 font-inter text-[28px] font-bold leading-[38px] text-black sm:mt-6 sm:text-[44px] sm:leading-[58px] md:text-[60px] md:leading-[79px]">
              Standout Dishes From Our Menu
            </h2>
          </div>

          <div className="flex items-center gap-6 sm:gap-[50px] sm:pt-2 xl:mt-[126px]">
            <button
              type="button"
              aria-label="Previous"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#EFEFEF] text-[#6F6E6E] transition-colors hover:bg-[#e2e2e2] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px]"
            >
              <ChevronLeft size={26} strokeWidth={4} />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F53E32] text-white transition-colors hover:bg-[#e0362b] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px]"
            >
              <ChevronRight size={26} strokeWidth={4} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 xl:mt-[63px] xl:grid-cols-3 xl:gap-[39.5px]">
          {DISHES.map((dish) => (
            <article
              key={dish.title}
              className="relative w-full max-w-[446px] rounded-[21px] bg-white shadow-[2px_9px_42px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Heart tab */}
              <span className="absolute right-0 top-0 flex h-[65px] w-[76px] items-center justify-center rounded-bl-[42.5px] rounded-tr-[20px] bg-[#F53E32] text-white sm:h-[75px] sm:w-[87px]">
                <Heart
                  size={22}
                  strokeWidth={2.5}
                  fill={dish.liked ? "currentColor" : "none"}
                />
              </span>

              {/* Image */}
              <div className="relative mx-auto mt-[30px] sm:mt-[37px] h-[200px] w-[200px] max-w-[65%] sm:h-[250px] sm:w-[250px] sm:max-w-[70%] md:h-[276px] md:w-[276px]">
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
              <div className="px-6 pb-6 sm:px-[46px] sm:pb-8">
                <h3 className="mt-[20px] sm:mt-[25px] font-inter text-[22px] sm:text-[30px] font-semibold leading-tight text-black">
                  {dish.title}
                </h3>
                <p className="mt-3 font-inter text-[16px] sm:text-[22px] font-semibold leading-[27px] text-[#555555]">
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