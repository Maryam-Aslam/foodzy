import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroTwo from "@/components/HeroTwo";
import PromoCategories from "@/components/PromoCategories";
import PopularProducts from "@/components/PopularProducts";
import PromoServices from "@/components/PromoServices";
import GreatDealBanner from "@/components/GreatDealBanner";
import OrganicBannerSection from "@/components/OrganicBannerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Foodzy | Home Two",
};

export default function HomeTwo() {
  return (
    <main>
      <Header />
      <HeroTwo />
      <PromoCategories />
      <PopularProducts />
      <PromoServices />
      <GreatDealBanner/>
      <OrganicBannerSection/>
      <TestimonialsSection/>
      <LatestNewsSection/>

      <Footer/>
    </main>
  );
}