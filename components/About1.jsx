'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create('.first-message', {
      type: 'words',
    });

    const secMsgSplit = SplitText.create('.second-message', {
      type: 'words',
    });

    const paragraphSplit = SplitText.create('.message-content p', {
      type: 'words, lines',
      linesClass: 'paragraph-line',
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

    gsap.to(secMsgSplit.words, {
      color: '#ffffff',
      ease: 'power1.in',
      stagger: 1,
      scrollTrigger: {
        trigger: '.second-message',
        start: 'top 85%',
      end: 'top 50%',
        scrub: true,
      },
    });

    gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: '.msg-text-scroll',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
      },
    }).to('.msg-text-scroll', {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'circ.inOut',
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.message-content p',
        start: 'top 100%',
      },
    }).from(paragraphSplit.words, {
      yPercent: 300,
      ease: 'power1.inOut',
      duration: 1,
    });
  }, []);

  return (
    <section className="bg-[#3a3733] text-[#ffffff] font-turtosk min-h-screen w-screen overflow-hidden flex justify-center items-center relative z-20 message-content">
      <div className="w-full px-4 py-12 md:pt-16 flex justify-center items-center">
        <div className="w-full h-full">
          {/* Headings */}
          <div className="flex flex-col items-center justify-center gap-14 md:gap-4 text-center uppercase font-normal tracking-wide leading-tight text-5xl md:text-[5.5rem]">
            <h1 className="first-message max-w-xs md:max-w-4xl text-[#faeade10]">
              Design with purpose,
            </h1>

            <div
              className="absolute max-w-full overflow-hidden rotate-[3deg] -translate-y-14 md:-translate-y-12 border-[0.5vw] border-[#c88e64] z-10 msg-text-scroll"
              style={{
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
              }}
            >
              <div className="bg-[#7f3b2d] px-5 pb-3 md:pb-5">
                <h2 className="text-[#FFFFFF] leading-none">Stand Out</h2>
              </div>
            </div>

            <h1 className="second-message max-w-xs md:max-w-5xl pt-4 md:pt-28 text-[#faeade10]">
               build for growth, scale with confidence.
            </h1>
          </div>

          {/* Paragraph */}
          <div className="flex justify-center items-center mt-10 md:mt-12">
            <div className="max-w-4xl px-10 flex justify-center items-center overflow-hidden">
              <div className="overflow-hidden">
    <p className="text-center text-base md:text-xl font-satoshi leading-tight">
      Your brand deserves more than a template. I build fast, custom websites that captivate, convert, and scale. If you're ready to elevate your online presence, I’m here to make it happen.
    </p>
  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
