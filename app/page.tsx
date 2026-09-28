import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularCategories from "@/components/PopularCategories";
import DailyBestSells from "@/components/DailyBestSells";
import StandoutDishes from "@/components/StandoutDishes";
import DealsOfTheDay from "@/components/DealsOfTheDay";
import WhyPeopleChooseUs from "@/components/WhyPeopleChooseUs";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PopularCategories />
      <DailyBestSells />
      <StandoutDishes />
      <DealsOfTheDay />
      <WhyPeopleChooseUs />
      <NewsletterBanner />
      <Footer />
    </main>
  );
}