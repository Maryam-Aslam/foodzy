"use client";

import Image from "next/image";
import { Star } from "lucide-react";

type ProductItem = {
  title: string;
  image: string;
  price: string;
  oldPrice: string;
  rating: string;
};

type ColumnData = {
  title: string;
  products: ProductItem[];
};

const COLUMNS: ColumnData[] = [
  {
    title: "Top Selling",
    products: [
      {
        title: "Nestle Original Coffee-Mate Coffee Creamer",
        image: "/images/carot.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
      {
        title: "Nestle Original Coffee-Mate Coffee Creamer",
        image: "/images/ppr.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
      {
        title: "Nestle Original Coffee-Mate Coffee Creamer",
        image: "/images/corn.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
    ],
  },
  {
    title: "Trending Products",
    products: [
      {
        title: "Organic Cage-Free Grade A Large Brown Eggs",
        image: "/images/bnana.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
      {
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        image: "/images/slice.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
      {
        title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
        image: "/images/kivi.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
    ],
  },
  {
    title: "Recently added",
    products: [
      {
        title: "Pepperidge Farm Farmhouse Hearty White Bread",
        image: "/images/mngo.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
      {
        title: "Organic Frozen Triple Berry Blend",
        image: "/images/mayo.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
      {
        title: "Oroweat Country Buttermilk Bread",
        image: "/images/cornt.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
    ],
  },
  {
    title: "Top Rated",
    products: [
      {
        title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        image: "/images/anar.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
      {
        title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
        image: "/images/peer.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
      {
        title: "All Natural Italian-Style Chicken Meatballs",
        image: "/images/orangee.jpg",
        price: "$32.85",
        oldPrice: "$33.8",
        rating: "(4.0)",
      },
    ],
  },
];

export default function ProductWidgetsSection() {
  return (
    <section className="relative w-full py-[60px] bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1610px] px-4">
        
        {/* 4-Column Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLUMNS.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              
              {/* Column Heading with Bottom Border & Green Accent Line */}
              <div className="relative pb-3 border-b border-[#ECECEC] mb-6">
                <h4 className="font-['Quicksand'] font-bold text-[24px] leading-[29px] text-[#253D4E]">
                  {col.title}
                </h4>
                <div className="absolute left-0 bottom-[-1px] w-[80px] h-[2px] bg-[#BCE3C9]" />
              </div>

              {/* Product List */}
              <div className="flex flex-col gap-6">
                {col.products.map((product, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-4 group">
                    
                    {/* Thumbnail Image Container with standard img fallback if paths aren't loaded */}
                    <div className="relative w-[110px] h-[110px] min-w-[110px] min-h-[110px] bg-[#F7F7F8] rounded-[10px] overflow-hidden flex-shrink-0 border border-[#ECECEC] flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-start min-w-0 flex-1">
                      <h6 className="font-['Quicksand'] font-bold text-[16px] leading-[20px] text-[#253D4E] hover:text-[#3BB77E] transition-colors cursor-pointer">
                        {product.title}
                      </h6>

                      {/* Star Rating */}
                      <div className="mt-1 flex items-center gap-1">
                        <div className="flex text-[#F5885F]">
                          <Star size={12} className="fill-current" />
                        </div>
                        <span className="font-['Lato'] text-[14px] text-[#B6B6B6]">
                          {product.rating}
                        </span>
                      </div>

                      {/* Pricing */}
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="font-['Quicksand'] font-bold text-[18px] text-[#3BB77E]">
                          {product.price}
                        </span>
                        <span className="font-['Quicksand'] font-bold text-[14px] text-[#ADADAD] line-through">
                          {product.oldPrice}
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}