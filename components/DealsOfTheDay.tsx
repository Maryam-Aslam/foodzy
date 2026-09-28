import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShoppingCart, Star } from "lucide-react";

type Deal = {
  id: number;
  title: string;
  image: string;
  rating: number; // % of stars filled
  ratingLabel: string;
  brand: string;
  price: string;
  oldPrice: string;
};

const DEALS: Deal[] = [
  {
    id: 1,
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    image: "/images/dealone.png",
    rating: 90,
    ratingLabel: "(4.0)",
    brand: "NestFood",
    price: "$32.85",
    oldPrice: "$33.8",
  },
  {
    id: 2,
    title: "Perdue Simply Smart Organics Gluten Free",
    image: "/images/dealtwo.png",
    rating: 90,
    ratingLabel: "(4.0)",
    brand: "Old El Paso",
    price: "$24.85",
    oldPrice: "$26.8",
  },
  {
    id: 3,
    title: "Signature Wood-Fired Mushroom and Caramelized",
    image: "/images/dealthree.png",
    rating: 80,
    ratingLabel: "(3.0)",
    brand: "Progresso",
    price: "$12.85",
    oldPrice: "$13.8",
  },
  {
    id: 4,
    title: "Simply Lemonade with Raspberry Juice",
    image: "/images/dealfour.png",
    rating: 80,
    ratingLabel: "(3.0)",
    brand: "Yoplait",
    price: "$15.85",
    oldPrice: "$16.8",
  },
];

function Stars({ percent }: { percent: number }) {
  const row = (
    <div className="flex w-[60px] shrink-0">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={12}
          fill="currentColor"
          stroke="none"
          className="shrink-0"
        />
      ))}
    </div>
  );
  return (
    <div className="relative h-[12px] w-[60px]">
      <div className="text-[#E4E4E4]">{row}</div>
      <div
        className="absolute inset-y-0 left-0 overflow-hidden text-[#FDC040]"
        style={{ width: `${percent}%` }}
      >
        {row}
      </div>
    </div>
  );
}

export default function DealsOfTheDay() {
  return (
    <section className="w-full bg-white px-4 py-[60px]">
      <div className="mx-auto w-full max-w-[1610px] xl:px-3">
        {/* Header */}
        <div className="flex min-h-[82.39px] items-start justify-between gap-4">
          <h3 className="-mt-px flex h-10 items-center font-quicksand text-[26px] font-bold leading-[38px] text-[#253D4E] sm:text-[32px]">
            Deals Of The Day
          </h3>
          <Link
            href="#"
            className="mt-[14.39px] flex h-6 items-center gap-1 font-lato text-[16px] leading-6 text-[#7E7E7E] transition-colors hover:text-[#3BB77E]"
          >
            All Deals
            <ChevronRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {DEALS.map((deal) => (
            <article
              key={deal.id}
              className="relative h-[462.55px] w-full max-w-[378.5px] rounded-[15px] bg-white"
            >
              {/* Image */}
              <div className="relative h-[335.17px] w-full overflow-hidden rounded-[15px] bg-[#F2F3F4]">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(min-width: 1280px) 378px, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Content box (overlaps image) */}
              <div className="absolute left-1/2 top-[245.17px] h-[192.38px] w-[calc(100%-53px)] max-w-[325.5px] -translate-x-1/2 rounded-[10px] bg-white px-[30px] pt-[24px] shadow-[5px_5px_15px_rgba(0,0,0,0.05)]">
                <h4 className="flex h-[39.19px] items-center font-quicksand text-[16px] font-bold leading-[19px] text-[#253D4E]">
                  <span className="line-clamp-2">{deal.title}</span>
                </h4>

                <div className="mt-[10.19px] flex h-[17px] items-center gap-[7.7px]">
                  <Stars percent={deal.rating} />
                  <span className="font-lato text-[14px] leading-6 text-[#B6B6B6]">
                    {deal.ratingLabel}
                  </span>
                </div>

                <p className="mt-[7px] flex h-[17px] items-center font-lato text-[14px] leading-6 text-[#B6B6B6]">
                  By&nbsp;
                  <Link href="#" className="text-[#3BB77E] hover:underline">
                    {deal.brand}
                  </Link>
                </p>

                <div className="mt-[19px] flex h-[36px] items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <span className="font-quicksand text-[18px] font-bold leading-6 text-[#3BB77E]">
                      {deal.price}
                    </span>
                    <span className="font-quicksand text-[14px] font-bold leading-6 text-[#ADADAD] line-through">
                      {deal.oldPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="flex h-[36px] w-[84.91px] items-center justify-center gap-[5px] rounded-[4px] bg-[#F53E32] font-lato text-[14px] font-bold leading-6 text-white transition-colors hover:bg-[#e0362b]"
                  >
                    <ShoppingCart size={14} strokeWidth={2} />
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}