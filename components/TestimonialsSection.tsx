
"use client";

import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  comment: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Stephen Smith",
    role: "Co Founder",
    comment:
      "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",
    image: "/images/tone.jpg",
  },
  {
    name: "Lorem Robinson",
    role: "Manager",
    comment:
      "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",
    image: "/images/ttwo.jpg",
  },
  {
    name: "Saddika Alard",
    role: "Team Leader",
    comment:
      "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",
    image: "/images/tthree.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-[40px] lg:py-[50px] bg-white overflow-hidden">
      {/* Side Decorative Watermark Illustration */}
      <div className="absolute left-[20px] top-[40px] pointer-events-none z-0 hidden lg:block">
        <Image
          src="/images/side.png"
          alt="Decoration"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-['Arial'] font-bold text-[32px] leading-[38.4px] text-[#2B2B2D] tracking-[0.48px] text-center">
            Great Words From People
          </h2>

          <p className="mt-[6px] max-w-[600px] font-['Poppins'] font-normal text-[14px] leading-[22px] text-[#7A7A7A] tracking-[0.48px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="relative mt-[60px] flex flex-col items-center rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] px-6 pt-[70px] pb-7 shadow-sm"
            >
              {/* Overlapping Circular Profile Avatar */}
              <div className="absolute -top-[60px] h-[120px] w-[120px] overflow-hidden rounded-full border-[13px] border-white shadow-sm bg-white">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top Quote Image */}
              <div className="absolute left-8 top-8 pointer-events-none">
                <Image
                  src="/images/top-comma.png"
                  alt="Quote"
                  width={45}
                  height={35}
                  className="object-contain"
                />
              </div>

              {/* Bottom Quote Image */}
              <div className="absolute right-8 bottom-8 pointer-events-none">
                <Image
                  src="/images/bottom-comma.png"
                  alt="Quote"
                  width={45}
                  height={35}
                  className="object-contain"
                />
              </div>

              {/* Role */}
              <span className="font-['Poppins'] font-normal text-[14px] leading-[20px] text-[#7A7A7A] tracking-[0.48px] text-center">
                {item.role}
              </span>

              {/* Name */}
              <h4 className="mt-1 font-['Poppins'] font-bold text-[18px] leading-[25px] text-[#2B2B2D] tracking-[0.48px] text-center">
                {item.name}
              </h4>

              {/* Comment */}
              <p className="mt-2 font-['Poppins'] font-normal text-[14px] leading-[24px] text-[#7A7A7A] tracking-[0.48px] text-center max-w-[290px]">
                {item.comment}
              </p>

              {/* Segmented Bottom Accent Line */}
              <div className="mt-5 flex items-center gap-[5px]">
                <div className="w-[23px] h-[1px] bg-[#F5885F]" />
                <div className="w-[23px] h-[1px] bg-[#F5885F]" />
                <div className="w-[23px] h-[1px] bg-[#F5885F]" />
                <div className="w-[23px] h-[1px] bg-[#F5885F]" />
                <div className="w-[23px] h-[1px] bg-[#F5885F]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
