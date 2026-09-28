import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Convenient and Reliable",
    description:
      "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
    icon: "/images/iconone.png",
  },
  {
    title: "Variety of Options",
    description:
      "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
    icon: "/images/icontwo.png",
  },
  {
    title: "Eat Burger",
    description:
      "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
    icon: "/images/iconthree.png",
  },
];

export default function WhyPeopleChooseUs() {
  return (
    <section className="w-full bg-white px-4 py-[60px] sm:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1301px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-[84px]">
        {/* Left: image */}
        <div className="relative aspect-[578/526] w-full max-w-[578px] shrink-0 overflow-hidden rounded-[29px] bg-[#EFCBE2]">
          <Image
            src="/images/choose.png"
            alt="Grilled chicken salad on a black plate"
            fill
            sizes="(min-width: 1024px) 578px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Right: heading + features */}
        <div className="flex w-full max-w-[639px] flex-col gap-[35px]">
          <h2 className="font-nunito text-[32px] font-bold leading-[120%] text-[#2D2D2D] sm:text-[50px]">
            Why People Choose us?
          </h2>

          <div className="flex w-full flex-col items-end gap-[41px]">
            {FEATURES.map((f) => (
              <article
                key={f.title}
                className="flex w-full max-w-[635px] flex-col items-start justify-center gap-4 rounded-[18px] bg-white px-4 py-[18px] shadow-[0_2px_4px_rgba(0,0,0,0.075)] sm:flex-row sm:items-center sm:gap-[26px]"
              >
                {/* Icon circle */}
                <div className="relative flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2.09px_4.19px_rgba(0,0,0,0.075)]">
                  <Image
                    src={f.icon}
                    alt=""
                    width={46}
                    height={44}
                    className="h-[44.08px] w-[45.92px] object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <h3 className="font-nunito text-[24px] font-semibold leading-[120%] text-black sm:text-[31px]">
                    {f.title}
                  </h3>
                  <p className="font-nunito text-[18px] font-medium leading-[130%] text-[#404040] sm:text-[20px]">
                    {f.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}