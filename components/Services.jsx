'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {
  useGSAP(() => {
    // Split and animate heading
    const firstMsgSplit = SplitText.create('.first-message', {
      type: 'words',
    });

    gsap.to(firstMsgSplit.words, {
      color: '#ffffff',
      ease: 'power1.in',
      stagger: 1,
      scrollTrigger: {
        trigger: '.message-content',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
      },
    });

    // INDIVIDUAL box animations (same as .msg-text-scroll logic)
    const titles = ['first-title', 'second-title', 'third-title', 'fourth-title'];

    titles.forEach((titleClass) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: `.${titleClass}`,
          start: 'top 100%',
          end: 'top 70%',
          scrub: true,
        },
      }).to(`.${titleClass}`, {
        duration: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        opacity: 1,
        ease: 'circ.inOut',
      });
    });
  }, []);

  return (
    <section className="bg-[#3a3733] text-[#ffffff] font-turtosk min-h-screen w-screen overflow-hidden flex justify-start items-s relative z-20 message-content">
      <div className="w-full px-4 py-4 md:pt-8 flex justify-center items-center">
        <div className="w-full h-full">
          {/* Headings */}
          <div className="flex flex-col items-center justify-center gap-14 md:gap-4 text-center uppercase font-normal tracking-wide leading-tight text-5xl md:text-[5.5rem]">
            <h1 className="first-message max-w-xs md:max-w-4xl text-[#faeade10]">
              How Can I Help You?
            </h1>

            {/* All 4 ClipPathStyle Titles */}
            <div className="relative w-full flex flex-col justify-center items-center mt-44">

              {/* 1. Shelf Stable */}
              <div
                className="absolute max-w-full overflow-hidden rotate-[3deg] -translate-y-40 md:-translate-y-24 border-[0.5vw] border-[#222123] z-12 first-title opacity-0"
                style={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
              >
                <div className="bg-[#c88e64] px-5 pt-3 pb-3 md:pt-1 md:pb-7">
                  <h2 className="text-[#faeade] leading-none text-[3.2rem] md:text-[6rem] font-bold uppercase tracking-wide">
                    Web Design
                  </h2>
                </div>
              </div>

              {/* 2. Protein + Caffeine */}
              <div
                className="absolute max-w-full overflow-hidden rotate-[-1deg] -translate-y-20 md:translate-y-8 border-[0.5vw] border-[#222123] z-10 second-title opacity-0"
                style={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
              >
                <div className="bg-[#faeade] px-5 pt-3 pb-3 md:pt-1 md:pb-7">
                  <h2 className="text-[#222123] leading-none text-[2.3rem] md:text-[6rem] font-bold uppercase tracking-wide">
                    Web Developement
                  </h2>
                </div>
              </div>

              {/* 3. Infinitely Recyclable */}
              <div
                className="absolute max-w-full overflow-hidden rotate-[1deg] -translate-y-0 md:translate-y-40 border-[0.5vw] border-[#222123] z-12 third-title opacity-0"
                style={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
              >
                <div className="bg-[#7F3B2D] px-5 pt-3 pb-3 md:pt-1 md:pb-7">
                  <h2 className="text-[#faeade] leading-none text-[3.2rem] md:text-[6rem] font-bold uppercase tracking-wide">
                    Creative Dev
                  </h2>
                </div>
              </div>

              {/* 4. Lactose Free */}
              <div
                className="absolute max-w-full overflow-hidden rotate-[-4deg] translate-y-20 md:translate-y-72 border-[0.5vw] border-[#222123] z-10 fourth-title opacity-0"
                style={{ clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)' }}
              >
                <div className="bg-[#FED775] px-5 pt-3 pb-3 md:pt-1 md:pb-7">
                  <h2 className="text-[#2E2D2F] leading-none text-[3.2rem] md:text-[6rem] font-bold uppercase tracking-wide">
                    Animations
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
