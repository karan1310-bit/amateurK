'use client';

import Image from 'next/image';
import { FiArrowDownLeft } from 'react-icons/fi';
import FlairButton from './Button';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#f5f4f1] text-black px-4 sm:px-8 md:px-4 pt-10 pb-8 flex flex-col justify-between">

      {/* Big Heading */}
      <div className="md:text-center mt-20 md:mt-24">
        <h1 className=" text-[3.3rem] md:text-[11.3rem] font-bold font-proxima uppercase leading-none tracking-tight mb-2">
          CREATIVE
        </h1>
      </div>

      {/* Bottom 3-column layout */}
      <div className="flex md:h-[50vh] flex-col md:flex-row justify-between items-start md:px-8 md:items-start gap-8 md:gap-16">
        {/* Left: Arrow + Text + CTA */}
        <div className="w-full md:w-1/3 min-h-full">
          <div className="hidden md:block text-xl text-[#5c5c49] mt-4 mb-12">
             <FiArrowDownLeft className="inline-block text-2xl text-[#5c5c49] rotate-270" />
          </div>
          <p className="text-gray-800 mb-4 md:mb-6 text-xl sm:text-3xl font-satoshi leading-[1.1] md:leading-none">
            I help growing brands and startups gain an unfair advantage through
            premium, results driven websites.
          </p>
          <span>
            <FlairButton />
          </span>
        </div>

        {/* Center: Image */}
        <div className="hidden md:flex w-full md:w-1/3 h-full justify-center">
          <div className="w-48 h-60 sm:w-52 sm:h-64 md:w-80 md:h-full relative overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Huy Nguyen"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Freelance Info */}
        <div className="hidden md:flex w-full md:w-1/3 h-full justify-end font-satoshi text-right text-gray-900 mt-4 md:mt-0">
            <div className="flex flex-col justify-end items-end">
            <p className="uppercase text-lg tracking-wide">
              Available for freelance work
            </p>
            <p className="text-3xl sm:text-8xl font-bold">AUG ‘25</p>
          </div>
        </div>

{/* Mobile: Freelance Info */}
        <div className='flex md:hidden w-full h-full justify-end items-end'>
          <div className="flex w-1/2 h-full justify-center">
          <div className="w-48 h-60 relative overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Huy Nguyen"
              fill
              className="object-cover"
              priority
            />
          </div>
          </div>

          <div className="flex flex-col justify-end items-end w-1/2 font-satoshi text-right text-gray-900">
            <div className="">
            <p className="uppercase text-base tracking-wide leading-none">
              Available for freelance work
            </p>
            <p className="text-2xl sm:text-8xl font-bold">AUG ‘25</p>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}
