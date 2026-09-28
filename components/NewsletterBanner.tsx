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
        <div className="relative min-h-[417px] w-full overflow-hidden rounded-[20px] bg-[#0F0F0F] bg-[radial-gradient(ellipse_at_0%_0%,rgba(150,133,88,0.65),transparent_55%),linear-gradient(90deg,#6F6242_0%,#2B261B_38%,#0F0F0F_62%)]">
          {/* Product image */}
          <div className="pointer-events-none absolute bottom-0 right-[20px] hidden h-[345.73px] w-[634.39px] lg:block xl:right-[50px]">
            <Image
              src="/images/myimg.png"
              alt="Delivery man holding a box of fresh vegetables"
              fill
              sizes="634px"
              className="object-contain object-bottom"
            />
          </div>

          <div className="relative z-10 px-6 py-12 sm:px-[78px] sm:pb-0 sm:pt-[83px]">
            <h2 className="max-w-[529px] font-quicksand text-[30px] font-bold leading-[38px] text-white sm:text-[40px] sm:leading-[48px]">
              Stay home &amp; get your daily needs from our shop
            </h2>

            <p className="mt-6 font-lato text-[16px] leading-6 text-[#9C9C9C] sm:mt-[20px] sm:text-[18px]">
              Start You&apos;r Daily Shopping with{" "}
              <span className="text-[#3BB77E]">Nest Mart</span>
            </p>

            {/* Email form */}
            <form className="mt-8 flex h-[64px] w-full max-w-[473px] items-center rounded-[50px] bg-white pr-[23px] sm:mt-[46px]">
              <Send
                size={18}
                strokeWidth={1.5}
                className="ml-[26px] shrink-0 text-[#8A8A82]"
              />
              <input
                type="email"
                placeholder="Your emaill address"
                className="ml-[14px] h-full min-w-0 flex-1 bg-transparent font-lato text-[16px] text-[#253D4E] placeholder:text-[#A8A692] focus:outline-none"
              />
              <button
                type="submit"
                className="h-full w-[120px] shrink-0 rounded-[50px] bg-[linear-gradient(90deg,#FA7F63_0%,#F66A55_100%)] font-quicksand text-[16px] font-bold tracking-[0.5px] text-white transition-opacity hover:opacity-90 sm:w-[159.73px]"
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
              className="flex h-[107px] items-center gap-5 rounded-[10px] bg-[#F4F6FA] px-5"
            >
              <div className="relative h-[60px] w-[60px] shrink-0">
                <Image
                  src={f.icon}
                  alt=""
                  fill
                  sizes="60px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-quicksand text-[18px] font-semibold leading-[22px] text-[#242424]">
                  {f.title}
                </h3>
                <p className="mt-[5px] font-lato text-[16px] leading-6 text-[#ADADAD]">
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