"use client";

import Image from "next/image";
import Link from "next/link";
import FlairButton from "./Button";
import Effect from "./Effect";

export default function CTA() {
  return (
    <section className="w-full font-satoshi flex flex-col items-center justify-center md:min-h-screen px-6 md:px-8 lg:px-16 mt-16 md:mt-0 mb-16 md:mb-2">
      

      {/* Main Content Box */}
      <div className="bg-[#ffffff] text-center text-black w-full rounded-sm py-28 md:py-36 px-4 md:px-12 relative">
        <p className="text-gray-900 text-lg md:text-xl mb-8">
          (Need an unfair advantage?)
        </p>
        <h1 className="text-center uppercase font-normal tracking-wide leading-tighter text-7xl md:text-[7.5rem] font-turtosk mb-10 md:mb-12">
          LET&apos;S <br className="sm:hidden" /> MAKE IT HAPPEN
        </h1>

        <FlairButton />

        

        {/* Bottom Left Badge */}
        <div className="absolute flex left-4 bottom-3 items-center gap-2 border border-gray-500 rounded-md px-3 py-1 text-xs md:text-lg text-black">
          
          <div>
            <p>Working Globally</p>
            <p>Available Aug &apos;25</p>
          </div>
        </div>

        {/* Bottom Right Contact */}
        <div className="absolute right-4 bottom-4 text-right text-xs md:text-lg">
          <p className="">FOR FURTHER INQUIRIES</p>
          <Effect title="Kfreelance131@gmail.com" link="mailto:kfreelance131@gmail.com" />

        </div>
      </div>


    </section>
  );
}
