"use client";

import Image from "next/image";

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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#64B496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10"/><path d="m7 21 5-5 5 5"/><path d="M22 7H2l1-4h18l1 4z"/>
        </svg>
      ),
      title: "Product Packing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#64B496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
        </svg>
      ),
      title: "24X7 Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#64B496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "Delivery in 5 Days",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#64B496" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
      title: "Payment Secure",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-[60px] lg:py-[80px] overflow-hidden">
      
      {/* Side Decorative — hidden on small screens to prevent overflow */}
      <div className="absolute left-[5%] top-[-20px] pointer-events-none hidden lg:block">
        <Image src="/images/leaf.png" alt="Decoration" width={110} height={110} className="object-contain -rotate-45" />
      </div>
      <div className="absolute right-[-15px] top-[180px] pointer-events-none hidden lg:block">
        <Image src="/images/byngn.png" alt="Decoration" width={90} height={90} className="object-contain rotate-12" />
      </div>
      <div className="absolute left-[-30px] bottom-[100px] pointer-events-none hidden lg:block">
        <Image src="/images/peach.png" alt="Decoration" width={130} height={130} className="object-contain rotate-45" />
      </div>

      <div className="mx-auto w-full max-w-[1296px] px-4">
        
        {/* Top 3 Promotional Banners Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {promoBanners.map((banner, index) => (
            <div
              key={index}
              className="relative flex w-full overflow-hidden rounded-[8px] p-6 flex-col justify-between min-h-[200px] sm:min-h-[228px]"
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
                <h3 className="font-['Arial'] text-[18px] sm:text-[20px] font-bold leading-[24px] text-[#2B2B2D] capitalize">
                  {banner.title}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-poppins text-[18px] sm:text-[20px] font-bold text-[#F53E32]">
                    {banner.discount}
                  </span>
                  <span className="font-poppins text-[13px] text-[#777777]">
                    Off on first order
                  </span>
                </div>
              </div>

              {/* Shop Now Button */}
              <div className="z-10 mt-4">
                <a
                  href="#"
                  className="inline-flex h-[38px] w-[100px] items-center justify-center rounded-[5px] bg-[#F53E32] font-['Arial'] text-[14px] font-bold text-white transition-transform hover:scale-105"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4 Services Cards Grid */}
        <div className="mt-[40px] sm:mt-[50px] grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-between rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] p-4 sm:p-6 text-center transition-shadow hover:shadow-md min-h-[160px] sm:min-h-[182px]"
            >
              {/* Service Icon & Custom Top Indicator Line */}
              <div className="flex flex-col items-center">
                <div className="h-[1px] w-[50px] sm:w-[61px] bg-[#64B496] mb-3" />
                <div className="flex h-[38px] w-[40px] items-center justify-center sm:h-[41px] sm:w-[43px]">
                  {service.icon}
                </div>
              </div>

              {/* Service Details */}
              <div className="flex flex-col items-center">
                <h4 className="font-poppins text-[14px] sm:text-[18px] font-semibold leading-[26px] sm:leading-[30px] text-[#2B2B2D]">
                  {service.title}
                </h4>
                <p className="mt-1 font-poppins text-[12px] sm:text-[14px] font-light leading-[20px] sm:leading-[22px] text-[#7A7A7A]">
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