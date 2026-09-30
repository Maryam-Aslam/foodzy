import type { Metadata } from "next";
import Header from "@/components/Header";
import HomeThreeHero from "@/components/HomeThreeHero";
import PromoBannersSection from "@/components/PromoBanner";
import PopularProductsSection from "@/components/PopularProductsSection";
import DailyBestSells from "@/components/DailyBestSells";
import DealsOfTheDay from "@/components/DealsOfTheDay";
import ProductWidgetsSection from "@/components/ProductWidgetsSection";
import NewsletterBanner from "@/components/NewsletterBannerthree";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Foodzy | Home Three",
};

export default function HomeThree() {
  return (
    <main>
      <Header />
      <HomeThreeHero/>
      <PromoBannersSection/>
      <PopularProductsSection/>
      <DailyBestSells/>
      <DealsOfTheDay/>
      <ProductWidgetsSection/>
      <NewsletterBanner/>
     
      

      <Footer/>
    </main>
  );
}