import Image from "next/image";
import { Send } from "lucide-react";

const FEATURES = [
  {
    title: "Best prices & offers",
    text: "Orders $50 or more",
    icon: "/images/icona.png",
  },
  {
    title: "Free delivery",
    text: "24/7 amazing services",
    icon: "/images/iconb.png",
  },
  {
    title: "Great daily deal",
    text: "When you sign up",
    icon: "/images/iconc.png",
  },
  {
    title: "Wide assortment",
    text: "Mega Discounts",
    icon: "/images/icond.png",
  },
  {
    title: "Easy returns",
    text: "Within 30 days",
    icon: "/images/icone.png",
  },
];

export default function NewsletterBanner() {
  return (
    <section className="w-full bg-white px-4 py-[60px] sm:py-[80px]">
      <div className="mx-auto w-full max-w-[1609px]">
        {/* Banner */}
        <div className="relative w-full overflow-hidden rounded-[20px] bg-[#0F0F0F] bg-[radial-gradient(ellipse_at_0%_0%,rgba(150,133,88,0.65),transparent_55%),linear-gradient(90deg,#6F6242_0%,#2B261B_38%,#0F0F0F_62%)]">
          {/* Product image */}
          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[280px] w-[480px] lg:block xl:right-[30px] xl:h-[345px] xl:w-[634px]">
            <Image
              src="/images/myimg.png"
              alt="Delivery man holding a box of fresh vegetables"
              fill
              sizes="634px"
              className="object-contain object-bottom"
            />
          </div>

          <div className="relative z-10 px-5 py-10 sm:px-10 sm:py-14 md:px-[78px]">
            <h2 className="max-w-[440px] font-quicksand text-[24px] font-bold leading-[34px] text-white sm:max-w-[529px] sm:text-[34px] sm:leading-[44px] md:text-[40px] md:leading-[48px]">
              Stay home &amp; get your daily needs from our shop
            </h2>

            <p className="mt-4 font-lato text-[15px] leading-6 text-[#9C9C9C] sm:mt-[20px] sm:text-[18px]">
              Start Your Daily Shopping with{" "}
              <span className="text-[#3BB77E]">Nest Mart</span>
            </p>

            {/* Email form */}
            <form className="mt-6 flex w-full max-w-[473px] items-center overflow-hidden rounded-[50px] bg-white sm:mt-[46px]">
              <Send
                size={18}
                strokeWidth={1.5}
                className="ml-4 shrink-0 text-[#8A8A82] sm:ml-[26px]"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="ml-3 h-[52px] min-w-0 flex-1 bg-transparent font-lato text-[14px] text-[#253D4E] placeholder:text-[#A8A692] focus:outline-none sm:h-[64px] sm:text-[16px]"
              />
              <button
                type="submit"
                className="m-1 h-[44px] shrink-0 rounded-[50px] bg-[linear-gradient(90deg,#FA7F63_0%,#F66A55_100%)] px-4 font-quicksand text-[13px] font-bold tracking-[0.5px] text-white transition-opacity hover:opacity-90 sm:h-[54px] sm:px-6 sm:text-[15px]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Feature strip */}
        <div className="mt-[40px] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-px">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-4 rounded-[10px] bg-[#F4F6FA] px-4 py-4 sm:gap-5 sm:px-5 sm:py-0 sm:h-[107px]"
            >
              <div className="relative h-[48px] w-[48px] shrink-0 sm:h-[60px] sm:w-[60px]">
                <Image
                  src={f.icon}
                  alt=""
                  fill
                  sizes="60px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-quicksand text-[15px] font-semibold leading-[22px] text-[#242424] sm:text-[18px]">
                  {f.title}
                </h3>
                <p className="mt-[3px] font-lato text-[13px] leading-6 text-[#ADADAD] sm:text-[16px]">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}