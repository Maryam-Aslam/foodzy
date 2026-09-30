import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/app/product/PageBanner";
import ProductSidebar from "@/app/product/ProductSidebar";
import ProductGallery from "@/app/product/ProductGallery";
import ProductInfo from "@/app/product/ProductInfo";
import ProductTabs from "@/app/product/ProductTabs";
import DetailPopularProducts from "./DetailPopularProducts";

export default function ProductPage() {
  return (
    <main>
      <Header />
      <PageBanner />

      <section className="w-full bg-white px-4 py-10 sm:px-8 xl:px-[312px]">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-8 lg:flex-row lg:items-start">
          <ProductSidebar />

          <div className="w-full flex-1">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
              <ProductGallery />
              <ProductInfo />
            </div>
            <ProductTabs />
          </div>
        </div>
      </section>

      {/* Popular Products section for Product Detail Page */}
      <DetailPopularProducts />

      <Footer />
    </main>
  );
}