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
        <div className="flex items-center justify-between gap-4 mb-8">
          <h3 className="font-quicksand text-[24px] font-bold leading-[38px] text-[#253D4E] sm:text-[32px]">
            Deals Of The Day
          </h3>
          <Link
            href="#"
            className="flex items-center gap-1 font-lato text-[14px] sm:text-[16px] leading-6 text-[#7E7E7E] transition-colors hover:text-[#3BB77E] shrink-0"
          >
            All Deals
            <ChevronRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Cards — fluid grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {DEALS.map((deal) => (
            <article
              key={deal.id}
              className="flex flex-col overflow-hidden rounded-[15px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-[#F2F2F2]"
            >
              {/* Image */}
              <div className="relative h-[220px] w-full overflow-hidden rounded-t-[15px] bg-[#F2F3F4] sm:h-[260px]">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(min-width: 1280px) 378px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-5 py-5">
                <h4 className="font-quicksand text-[15px] font-bold leading-[20px] text-[#253D4E] line-clamp-2 min-h-[40px]">
                  {deal.title}
                </h4>

                <div className="mt-3 flex items-center gap-[7.7px]">
                  <Stars percent={deal.rating} />
                  <span className="font-lato text-[13px] leading-6 text-[#B6B6B6]">
                    {deal.ratingLabel}
                  </span>
                </div>

                <p className="mt-1 font-lato text-[13px] leading-6 text-[#B6B6B6]">
                  By&nbsp;
                  <Link href="#" className="text-[#3BB77E] hover:underline">
                    {deal.brand}
                  </Link>
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <span className="font-quicksand text-[17px] font-bold leading-6 text-[#3BB77E]">
                      {deal.price}
                    </span>
                    <span className="font-quicksand text-[13px] font-bold leading-6 text-[#ADADAD] line-through">
                      {deal.oldPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="flex h-[36px] min-w-[80px] items-center justify-center gap-[5px] rounded-[4px] bg-[#F53E32] px-3 font-lato text-[13px] font-bold leading-6 text-white transition-colors hover:bg-[#e0362b]"
                  >
                    <ShoppingCart size={13} strokeWidth={2} />
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