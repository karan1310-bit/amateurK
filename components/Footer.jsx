"use client";

import Link from "next/link";
import Image from "next/image";
import Eyes from "./Eye";
import Clock from "./Clock";
import Effect from "./Effect";

export default function Footer() {
  return (
    <footer className=" text-white px-4 sm:px-8 lg:px-16 pt-8 md:pt-12 pb-6 md:pb-8 font-satoshi">
      <div className="">
        {/* Top Section with 3 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-gray-600 pb-10">
          {/* Menu */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-4 border-b border-gray-600 pb-2 md:pb-4">Menu</h3>
            <ul className="space-y-2 leading-tight text-base md:text-lg">
              <li><Effect title="Home" link="#" /></li>
              <li><Effect title="Services" link="#" /></li>
              <li><Effect title="Works" link="#" /></li>
              <li><Effect title="About" link="#" /></li>
              <li><Effect title="Testimonials" link="#" /></li>
              <li><Effect title="Contact" link="#" /></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-4 border-b border-gray-600 pb-2 md:pb-4">Socials</h3>
            <ul className="space-y-2 text-base md:text-lg leading-tight">
              <li><Effect title="LinkedIn" link="#" /></li>
              <li><Effect title="YouTube" link="#" /></li>
              <li><Effect title="Instagram" link="#" /></li>
              <li><Effect title="Bento" link="#" /></li>
              <li><Effect title="Github" link="#" /></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="hidden md:flex justify-end items-end">
            <Eyes className="" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between items-start sm:items-center pt-6 text-base md:text-lg">
          <p className="text-xl font-normal leading-tight tracking-tight">
            © 2025 Karan<br className="sm:hidden" /> All rights reserved.
          </p>

          {/* Local Time */}
          <div className="text-right">
            <p className="font-normal uppercase text-base md:text-lg tracking-wider">Local Time</p>
            <Clock />
          </div>
        </div>
      </div>


    </footer>
  );
}
