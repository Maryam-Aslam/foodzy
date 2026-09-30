"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopBanner from "@/app/shop/ShopBanner";
import ShopToolbar from "@/app/shop/ShopToolbar";
import ShopProductGrid, {
  SHOP_PRODUCTS,
} from "@/app/shop/ShopProductGrid";
import Pagination from "@/app/shop/Pagination";
import ProductSidebar from "@/app/product/ProductSidebar";

export default function ShopPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <main>
      <Header />
      <ShopBanner />

      <section className="w-full bg-white px-4 py-10 sm:px-8 xl:px-[312px]">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-8 lg:flex-row lg:items-start">
          <ProductSidebar />

          <div className="w-full flex-1">
            <ShopToolbar
              itemCount={29}
              view={view}
              onViewChange={setView}
            />
            <div className="mt-6">
              <ShopProductGrid products={SHOP_PRODUCTS} />
            </div>
            <Pagination totalPages={3} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}