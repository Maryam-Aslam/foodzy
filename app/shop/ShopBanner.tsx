import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ShopBanner() {
  return (
    <section className="w-full bg-[#F53E32]">
      <div className="mx-auto flex h-[70px] w-full max-w-container items-center justify-between px-4 sm:px-8 xl:px-[312px]">
        <h2 className="font-manrope text-[19px] font-bold leading-[19px] tracking-[0.48px] text-white">
          Shop
        </h2>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-poppins text-[14px] font-medium capitalize leading-[18px] tracking-[0.48px] text-white">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page" className="opacity-90">
              Shop
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}