"use client";

import Image from "next/image";
import Link from "next/link";
import { Package, Headphones, Clock, ShieldCheck } from "lucide-react";

export default function PromoServices() {
  const promoBanners = [
    {
      title: "Healthy Bakery Products",
      discount: "30%",
      image: "/images/onebg.jpg",
    },
    {
      title: "Fresh Snacks & Sweets",
      discount: "20%",
      image: "/images/twobg.jpg",
    },
    {
      title: "Fresh & Healthy Organic Fruits",
      discount: "35%",
      image: "/images/threebg.jpg",
    },
  ];

  const services = [
    {
      icon: <Package size={26} className="text-[#64B496]" />,
      title: "Product Packing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: <Headphones size={26} className="text-[#64B496]" />,
      title: "24X7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: <Clock size={26} className="text-[#64B496]" />,
      title: "Delivery in 5 Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: <ShieldCheck size={26} className="text-[#64B496]" />,
      title: "Payment Secure",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-[60px] lg:py-[80px] overflow-hidden">
      
     {/* Side Decorative Watermarks / Vector Illustrations */}
<div className="absolute left-[5%] top-[-20px] pointer-events-none">
  <Image src="/images/leaf.png" alt="Decoration" width={110} height={110} className="object-contain -rotate-45" />
</div>

<div className="absolute right-[-15px] top-[180px] pointer-events-none ">
  <Image src="/images/byngn.png" alt="Decoration" width={90} height={90} className="object-contain rotate-12" />
</div>

<div className="absolute left-[-30px] bottom-[100px] pointer-events-none ">
  <Image src="/images/peach.png" alt="Decoration" width={130} height={130} className="object-contain rotate-45" />
</div>

      <div className="mx-auto w-full max-w-[1296px] px-4">
        
        {/* Top 3 Promotional Banners Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {promoBanners.map((banner, index) => (
            <div
              key={index}
              className="relative flex h-[228.8px] w-full overflow-hidden rounded-[8px] p-[30px] flex-col justify-between"
            >
              {/* Full Background Image */}
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
              />

              {/* Left Text Content */}
              <div className="z-10 max-w-[180px]">
                <h3 className="font-['Arial'] text-[20px] font-bold leading-[24px] text-[#2B2B2D] capitalize">
                  {banner.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-poppins text-[20px] font-bold text-[#F53E32]">
                    {banner.discount}
                  </span>
                  <span className="font-poppins text-[13px] text-[#777777]">
                    Off on first order
                  </span>
                </div>
              </div>

              {/* Shop Now Button */}
              <div className="z-10">
                <Link
                  href="#"
                  className="inline-flex h-[40px] w-[104px] items-center justify-center rounded-[5px] bg-[#F53E32] font-['Arial'] text-[14px] font-bold text-white transition-transform hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4 Services Cards Grid */}
        <div className="mt-[50px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex h-[182px] flex-col items-center justify-between rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] p-6 text-center transition-shadow hover:shadow-md"
            >
              {/* Service Icon & Custom Top Indicator Line */}
              <div className="flex flex-col items-center">
                <div className="h-[1px] w-[61px] bg-[#64B496] mb-3" />
                <div className="flex h-[41px] w-[43.48px] items-center justify-center">
                  {service.icon}
                </div>
              </div>

              {/* Service Details */}
              <div className="flex flex-col items-center">
                <h4 className="font-poppins text-[18px] font-semibold leading-[30px] text-[#2B2B2D]">
                  {service.title}
                </h4>
                <p className="mt-1 font-poppins text-[14px] font-light leading-[22px] text-[#7A7A7A]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}