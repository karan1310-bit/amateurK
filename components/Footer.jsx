"use client";

import Link from "next/link";
import Image from "next/image";
import Eyes from "./Eye";
import Clock from "./Clock";
import Effect from "./Effect";

export default function Footer() {
  return (
    <footer className=" text-white px-8 md:px-16 pt-8 md:pt-12 pb-6 md:pb-8 font-satoshi">
      <div className="">
        {/* Top Section with 3 Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-gray-600 pb-10">
          {/* Menu */}
          <div>
            <h3 className="font-normal text-lg md:text-2xl mb-4 border-b border-gray-600 pb-2 md:pb-4">Menu</h3>
            <ul className="space-y-2 leading-tight text-sm md:text-lg">
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
            <h3 className="font-normal text-lg md:text-2xl mb-4 border-b border-gray-600 pb-2 md:pb-4">Socials</h3>
            <ul className="space-y-2 text-base md:text-sm leading-tight">
              <li><Effect title="LinkedIn" link="https://www.linkedin.com/in/karan-singh-bhati-2b4888316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" /></li>
              <li><Effect title="X" link="https://x.com/bhati_131?t=vnNfkKdx59cJmwNvNuOHrQ&s=09" /></li>
              <li><Effect title="Instagram" link="https://www.instagram.com/bhati_.01?igsh=Z3VyZjlpYjh5Znc2" /></li>
              <li><Effect title="Github" link="https://github.com/karan1310-bit" /></li>
              <li><Effect title="Mail" link="mailto:kfreelance131@gmail.com" /></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="hidden md:flex justify-end items-end">
            <Eyes className="" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between items-start sm:items-center pt-6 text-sm md:text-lg">
          <p className="text-sm font-normal leading-tight tracking-tight">
            © 2025 Karan<br className="sm:hidden" /> All rights reserved.
          </p>

          {/* Local Time */}
          <div className="text-right">
            <p className="font-normal uppercase text-sm md:text-lg tracking-wider">Local Time</p>
            <Clock />
          </div>
        </div>
      </div>


    </footer>
  );
}
