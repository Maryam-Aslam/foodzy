"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

type Product = {
  id: string;
  title: string;
  category: string;
  image: string;
  price: string;
  oldPrice: string;
  rating: string;
  vendor: string;
  badge?: { text: string; type: "hot" | "sale" | "new" | "best" };
};

const CATEGORIES = ["All", "Milks & Dairies", "Coffes & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"];

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    category: "Snack",
    image: "/images/product-1-1.jpg",
    price: "$28.85",
    oldPrice: "$32.8",
    rating: "(4.0)",
    vendor: "NestFood",
    badge: { text: "Hot", type: "hot" },
  },
  {
    id: "2",
    title: "All Natural Italian-Style Chicken Meatballs",
    category: "Hodo Foods",
    image: "/images/product-2-1.jpg",
    price: "$52.85",
    oldPrice: "$55.8",
    rating: "(3.5)",
    vendor: "Stouffer",
    badge: { text: "Sale", type: "sale" },
  },
  {
    id: "3",
    title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    category: "Snack",
    image: "/images/product-3-1.jpg",
    price: "$48.85",
    oldPrice: "$52.8",
    rating: "(4.0)",
    vendor: "StarKist",
    badge: { text: "New", type: "new" },
  },
  {
    id: "4",
    title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    category: "Vegetables",
    image: "/images/product-4-1.jpg",
    price: "$17.85",
    oldPrice: "$19.8",
    rating: "(4.0)",
    vendor: "NestFood",
  },
  {
    id: "5",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    category: "Pet Foods",
    image: "/images/product-5-1.jpg",
    price: "$23.85",
    oldPrice: "$25.8",
    rating: "(4.0)",
    vendor: "NestFood",
    badge: { text: "-14%", type: "best" },
  },
  {
    id: "6",
    title: "Chobani Complete Vanilla Greek Yogurt",
    category: "Hodo Foods",
    image: "/images/product-6-1.jpg",
    price: "$54.85",
    oldPrice: "$55.8",
    rating: "(4.0)",
    vendor: "NestFood",
  },
  {
    id: "7",
    title: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
    category: "Meats",
    image: "/images/product-7-1.jpg",
    price: "$32.85",
    oldPrice: "$33.8",
    rating: "(4.0)",
    vendor: "NestFood",
  },
  {
    id: "8",
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    category: "Snack",
    image: "/images/product-8-1.jpg",
    price: "$35.85",
    oldPrice: "$37.8",
    rating: "(4.0)",
    vendor: "NestFood",
    badge: { text: "Sale", type: "sale" },
  },
  {
    id: "9",
    title: "Gorton's Beer Battered Fish Fillets with soft paper",
    category: "Coffes & Teas",
    image: "/images/product-9-1.jpg",
    price: "$23.85",
    oldPrice: "$25.8",
    rating: "(4.0)",
    vendor: "Old El Paso",
    badge: { text: "Hot", type: "hot" },
  },
  {
    id: "10",
    title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    category: "Milks & Dairies",
    image: "/images/product-10-1.jpg",
    price: "$22.85",
    oldPrice: "$24.8",
    rating: "(2.0)",
    vendor: "Tysan",
  },
];

export default function PopularProductsSection() {
  const [activeTab, setActiveTab] = useState("All");

  // Filter products based on selected tab
  const filteredProducts = activeTab === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="relative w-full py-[60px] bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1610px] px-4">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col gap-4 mb-8">
          <h3 className="font-['Quicksand'] font-bold text-[24px] leading-[38px] text-[#253D4E] sm:text-[32px]">
            Popular Products
          </h3>

          {/* Category Tabs — horizontally scrollable on mobile */}
          <div className="flex flex-nowrap items-center gap-4 overflow-x-auto pb-1 sm:gap-6 sm:flex-wrap">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`font-['Quicksand'] font-semibold text-[13px] sm:text-[16px] shrink-0 transition-colors ${
                  activeTab === category ? "text-[#3BB77E]" : "text-[#253D4E] hover:text-[#3BB77E]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid — fluid columns */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 md:gap-5 lg:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col justify-between bg-white border border-[#ECECEC] rounded-[15px] p-3 sm:p-4 transition-shadow hover:shadow-md"
            >
              {/* Product Image & Badge Area */}
              <div className="relative w-full bg-[#F7F7F8] rounded-[12px] overflow-hidden flex items-center justify-center" style={{ paddingBottom: "90%" }}>
                {product.badge && (
                  <span
                    className={`absolute left-0 top-0 z-10 px-2 py-1 text-[10px] sm:text-[12px] font-['Lato'] text-white rounded-tl-[12px] rounded-br-[16px] ${
                      product.badge.type === "hot"
                        ? "bg-[#F74B81]"
                        : product.badge.type === "sale"
                        ? "bg-[#67BCEE]"
                        : product.badge.type === "new"
                        ? "bg-[#3BB77E]"
                        : "bg-[#F59758]"
                    }`}
                  >
                    {product.badge.text}
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-2 sm:p-4 transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col mt-2 sm:mt-3">
                <span className="font-['Lato'] text-[10px] sm:text-[12px] text-[#ADADAD]">
                  {product.category}
                </span>
                <h4 className="mt-1 font-['Poppins'] font-medium text-[12px] sm:text-[14px] leading-[18px] sm:leading-[22px] text-[#2B2B2D] tracking-[0.48px] line-clamp-2 min-h-[36px] sm:min-h-[44px]">
                  {product.title}
                </h4>

                {/* Rating & Vendor */}
                <div className="mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2">
                  <div className="flex items-center text-[#F5885F]">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={10} className="fill-current" />
                    ))}
                  </div>
                  <span className="font-['Lato'] text-[10px] sm:text-[12px] text-[#B6B6B6]">{product.rating}</span>
                </div>

                <span className="mt-1 font-['Lato'] text-[10px] sm:text-[12px] text-[#B6B6B6]">
                  By <span className="text-[#3BB77E]">{product.vendor}</span>
                </span>
              </div>

              {/* Price & Add Button */}
              <div className="mt-2 sm:mt-4 flex items-center justify-between gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="font-['Quicksand'] font-bold text-[14px] sm:text-[18px] text-[#3BB77E]">
                    {product.price}
                  </span>
                  <span className="font-['Quicksand'] font-bold text-[10px] sm:text-[14px] text-[#ADADAD] line-through hidden sm:inline">
                    {product.oldPrice}
                  </span>
                </div>

                <button
                  className="flex items-center gap-1 bg-[#F53E32] hover:bg-[#e03328] text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-[4px] font-['Lato'] font-bold text-[11px] sm:text-[14px] transition-colors shadow-sm shrink-0"
                >
                  <ShoppingCart size={11} className="text-white sm:hidden" />
                  <ShoppingCart size={14} className="text-white hidden sm:block" />
                  <span className="hidden sm:inline">Add</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}