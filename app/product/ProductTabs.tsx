"use client";

import { useState } from "react";

const TABS = ["Description", "Information", "Review"] as const;

export default function ProductTabs() {
  const [active, setActive] = useState<(typeof TABS)[number]>("Description");

  return (
    <div className="mt-[25px] w-full rounded-[5px] border border-[#E9E9E9] bg-white p-[25px]">
      {/* Tab list */}
      <div
        role="tablist"
        className="flex items-center gap-8 border-b border-[#DEE2E6]"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={`relative flex h-[51.5px] items-center font-poppins text-[17px] font-semibold leading-[26px] transition-colors ${
              active === tab ? "text-[#F53E32]" : "text-[#2B2B2D]"
            }`}
          >
            {tab}
            {active === tab && (
              <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#64B496]" />
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      {active === "Description" && (
        <div>
          <p className="pt-[33px] font-poppins text-[14px] leading-6 tracking-[0.48px] text-[#7A7A7A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in
            vero sapiente odio, error dolore vero temporibus consequatur,
            nobis veniam odit dignissimos consectetur quae in perferendis
            doloribusdebitis corporis, eaque dicta, repellat amet, illum
            adipisci vel perferendis dolor! Quis vel consequuntur repellat
            distinctio rem. Corrupti ratione alias odio, error dolore
            temporibus consequatur, nobis veniam odit laborum dignissimos
            consectetur quae vero in perferendis provident quis.
          </p>

          <h4 className="mt-[30px] border-b border-[#E9E9E9] pb-[18px] font-poppins text-[16px] font-medium leading-6 tracking-[0.48px] text-[#2B2B2D]">
            Packaging &amp; Delivery
          </h4>

          <p className="pt-[30px] font-poppins text-[14px] leading-6 tracking-[0.48px] text-[#7A7A7A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in
            vero perferendis dolor! Quis vel consequuntur repellat distinctio
            rem. Corrupti ratione alias odio, error dolore temporibus
            consequatur, nobis veniam odit laborum dignissimos consectetur
            quae vero in perferendis provident quis.
          </p>
        </div>
      )}

      {active === "Information" && (
        <p className="pt-[33px] font-poppins text-[14px] leading-6 tracking-[0.48px] text-[#7A7A7A]">
          Additional product information goes here.
        </p>
      )}

      {active === "Review" && (
        <p className="pt-[33px] font-poppins text-[14px] leading-6 tracking-[0.48px] text-[#7A7A7A]">
          Customer reviews go here.
        </p>
      )}
    </div>
  );
}