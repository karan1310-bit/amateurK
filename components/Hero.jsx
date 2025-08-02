'use client';

import Image from 'next/image';
import { FiArrowDownLeft } from 'react-icons/fi';
import FlairButton from './Button';
import Header from './Header';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function HeroSection() {
  useGSAP(() => {
    // Developer split animation
    const split = SplitText.create('.hero-developer', { type: 'chars' });

    gsap
      .timeline({ delay: 0.5 })
      .to('.hero-text-scroll', {
        duration: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'circ.out',
      })
      .from(
        split.chars,
        {
          yPercent: 200,
          stagger: 0.025,
          ease: 'power2.out',
        },
        '-=0.7'
      );

    // Animate everything up from hidden
    gsap.from(['.text-creative', '.animate-up'], {
      y: 100,
      opacity: 0,
      duration: 1.3,
      ease: 'power4.out',
      stagger: 0.2,
      delay: 0.3,
    });

    // Scroll-triggered section scale/rotate
    gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-wrapper',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    }).to('.hero-wrapper', {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: 'power1.inOut',
    });
  });

  return (
    <section className="overflow-hidden">
      <div className="hero-wrapper flex flex-col justify-between ">
        <Header />
        <div className="hero-container bg-[#ffffff] text-black px-4 md:px-8 pb-20">
          <div className="md:text-center mt-8 md:mt-8">
            <div className="flex flex-col md:flex-row md:justify-center md:items-end gap-0 md:gap-8 mb-6 md:mb-12">
              {/* CREATIVE */}
              <div className="overflow-hidden">
                <h1 className="text-creative text-[6rem] md:text-[9rem] font-normal font-turtosk pb-0 md:pb-6 uppercase leading-none tracking-tight">
                  CREATIVE
                </h1>
              </div>

              {/* DEVELOPER */}
              <div className="hero-text-scroll rotate-[-2.5deg] border-[1vw] w-fit md:border-[0.5vw] border-[#8B8B72] [clip-path:polygon(50%_0,50%_0,50%_100%,50%_100%)]">
                <div className="bg-[#3a3733]">
                  <h1 className="hero-developer uppercase text-[4rem] md:text-[8rem] font-turtosk font-normal text-[#FFFFFF] leading-[1.1] tracking-wide px-4 pb-2 md:pb-6 pt-2 md:pt-0">
                    Developer
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:h-[50vh] flex-col md:flex-row justify-between items-start md:items-start gap-6 md:gap-16">
            {/* LEFT COLUMN */}
            <div className="w-full md:w-1/3 min-h-full space-y-2 md:space-y-4">
              <div className="overflow-hidden">
                <div className="animate-up hidden md:block text-xl text-[#5c5c49] mt-4 mb-8">
                  <FiArrowDownLeft className="inline-block text-2xl text-[#5c5c49] rotate-270" />
                </div>
              </div>

              <div className="overflow-hidden">
                <p className="animate-up text-gray-800 mb-2 md:mb-4 text-xl sm:text-3xl font-satoshi leading-[1.1] md:leading-none">
                  I help growing brands and startups gain an unfair advantage through
                  premium, results driven websites.
                </p>
              </div>

              <div className="overflow-hidden">
                <span className="animate-up inline-block">
                  <FlairButton />
                </span>
              </div>
            </div>

            {/* CENTER IMAGE */}
            <div className="w-full md:w-1/3 h-full justify-center hidden md:flex">
              <div className="overflow-hidden w-full flex justify-center">
                <div className="animate-up w-48 h-60 sm:w-52 sm:h-64 md:w-80 md:h-full relative overflow-hidden">
                  <Image
                    src="/images/hero.jpg"
                    alt="K"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full md:w-1/3 h-full justify-end font-satoshi text-right text-gray-900 mt-4 md:mt-0 hidden md:flex overflow-hidden">
              <div className="animate-up flex flex-col justify-end items-end">
                <p className="uppercase text-lg tracking-wide">
                  Available for freelance work
                </p>
                <p className="text-3xl sm:text-8xl tracking-tight font-semibold">AUG ‘25</p>
              </div>
            </div>

            {/* MOBILE LAYOUT (now animated!) */}
            <div className="flex md:hidden w-full h-full justify-end items-end">
              {/* IMAGE */}
              <div className="w-1/2 h-full flex justify-center overflow-hidden">
                <div className="animate-up w-48 h-60 relative overflow-hidden">
                  <Image
                    src="/images/hero.jpg"
                    alt="Huy Nguyen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="w-1/2 flex flex-col justify-end items-end font-satoshi text-right text-gray-900 overflow-hidden">
                <div className="animate-up">
                  <p className="uppercase text-base tracking-wide leading-none">
                    Available for freelance work
                  </p>
                  <p className="text-2xl sm:text-8xl font-bold">AUG ‘25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
