import Link from "next/link";
import { ArrowRight, Facebook, Youtube, Twitter, Instagram } from "lucide-react";

const HERO_IMAGES = {
  bg: "/images/cover.png",
  texture: "/images/hero/Texture-01.png",
  glow: "/images/hero/Glow.png",
  layer32: "/images/hero/Layer-32.png",
  chili01: "/images/hero/Chili-01.png",
  chili02: "/images/hero/Chili-02.png",
  roastTurkey:
    "/images/hero/roast_turkey_png_transparent_background__4__by_anavrin_ai_dfoc0ff-pre.png",
} as const;

export default function Hero() {
  return (
    <section className="w-full overflow-hidden bg-[#2D1914]">
      <div className="hero-stage">
        <div className="hero-canvas">
          {/* Color Fill */}
          <div className="absolute left-0 top-0 h-[898px] w-[1920px] bg-[#2D1914]" />

          {/* Bg-Image-Here */}
          <img
            src={HERO_IMAGES.bg}
            alt=""
            className="pointer-events-none absolute left-[-124px] top-[-137px] h-[1916px] w-[1356px] max-w-none object-cover"
          />

          {/* Texture-01 */}
          <img
            src={HERO_IMAGES.texture}
            alt=""
            className="pointer-events-none absolute left-0 top-0 h-[914px] w-[1920px] max-w-none object-cover mix-blend-soft-light"
          />

          {/* Dark overlay */}
          <div className="pointer-events-none absolute left-0 top-0 h-[898px] w-[1920px] bg-black/30" />

          {/* Glow */}
          <img
            src={HERO_IMAGES.glow}
            alt=""
            className="pointer-events-none absolute left-0 top-0 h-[897px] w-[1920px] max-w-none object-cover opacity-65 mix-blend-screen"
          />

          {/* Chili-01 */}
          <img
            src={HERO_IMAGES.chili01}
            alt=""
            className="pointer-events-none absolute left-[-39px] top-[-43px] z-20 h-[283px] w-[203px] max-w-none object-contain"
          />

          {/* Heading-Text / gold plate */}
          <div className="absolute left-[85px] top-[261px] z-10 h-[370px] w-[908px] bg-[#B1A350]" />

          {/* Layer 32 — title texture */}
          <img
            src={HERO_IMAGES.layer32}
            alt=""
            className="pointer-events-none absolute left-[139px] top-[286px] z-10 h-[320px] w-[799px] max-w-none object-contain"
          />

          {/* Super */}
          <p className="font-inspiration absolute left-[387.66px] top-[133.54px] z-20 w-[251px] origin-center -rotate-[6deg] text-[80px] font-normal leading-[102px] text-[#CBB777]">
            Super
          </p>

          {/* Delicious */}
          <p className="absolute left-[317.69px] top-[178.86px] z-20 w-[453.68px] origin-center -rotate-[6deg] font-inter text-[83px] font-bold italic leading-[100px] text-[#FFF4D9] [text-shadow:-2.78898px_31.8782px_32px_rgba(51,45,44,0.55)]">
            Delicious
          </p>

          {/* Roast Turkey */}
          <h1 className="font-krona absolute left-[233px] top-[301px] z-20 w-[523.7px] origin-center -rotate-[6deg] text-[97px] font-normal uppercase leading-[121px] text-[#34201B]">
            Roast Turkey
          </h1>

          {/* Button */}
          <Link
            href="#"
            className="absolute left-[299px] top-[720px] z-30 block h-[63px] w-[269px]"
          >
            <span className="absolute left-[1.37px] top-[1.9px] h-[59.17px] w-[266.49px] bg-[#CCB777]" />
            <span className="absolute left-[1.37px] top-[1.9px] h-[59.17px] w-[66.42px] bg-[#36241E]" />
            <ArrowRight
              className="absolute left-[24.06px] top-[20.39px] h-[22.22px] w-[22.68px] text-[#F9E5C3]"
              strokeWidth={2.5}
            />
            <span className="font-montserrat absolute left-[89.8px] top-[23px] whitespace-nowrap text-[24px] font-extrabold leading-[29px] text-[#402F25]">
              Order Now
            </span>
          </Link>

          {/* Roast turkey photo */}
          <img
            src={HERO_IMAGES.roastTurkey}
            alt="Roast Turkey"
            className="absolute left-[1122px] top-[58px] z-20 h-[658px] w-[658px] max-w-none object-contain"
          />

          {/* Chili-02 */}
          <img
            src={HERO_IMAGES.chili02}
            alt=""
            className="pointer-events-none absolute left-[1449px] top-[299px] z-20 h-[221px] w-[197px] max-w-none object-contain"
          />

          {/* Follow-Us */}
          <div className="absolute left-[1543px] top-[735px] z-30 h-[50px] w-[133px]">
            <p className="font-montserrat absolute left-[20.35px] top-px whitespace-nowrap text-[13px] font-bold leading-4 text-[#CBB678]">
              Follow Us Now
            </p>
            <div className="absolute left-[1.88px] top-[21.08px] flex items-center text-[#FFF6DC]">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-[27.07px] w-[27.55px] items-center justify-center hover:opacity-80"
              >
                <Facebook size={22} fill="currentColor" strokeWidth={0} />
              </Link>
              <Link
                href="#"
                aria-label="Youtube"
                className="ml-[8.07px] flex h-[27.07px] w-[27.55px] items-center justify-center hover:opacity-80"
              >
                <Youtube size={22} fill="currentColor" strokeWidth={0} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="ml-[7.66px] flex h-[27.08px] w-[27.27px] items-center justify-center hover:opacity-80"
              >
                <Twitter size={20} fill="currentColor" strokeWidth={0} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="ml-[6.47px] flex h-[27.08px] w-[27.27px] items-center justify-center hover:opacity-80"
              >
                <Instagram size={20} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <p className="font-montserrat absolute left-[1509px] top-[814px] z-30 w-[541.2px] text-[14px] font-extrabold leading-[17px] text-[#CBB777]">
            Call Us : 658-7854-9634
          </p>
          <p className="font-montserrat absolute left-[1511.1px] top-[835px] z-30 w-[441.1px] text-[13px] font-normal leading-4 text-[#FFF5DB]">
            Typeyourwebsitehere
          </p>
        </div>
      </div>
    </section>
  );
}
