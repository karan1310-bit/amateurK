'use client';

import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Effect from './Effect';

export default function Header() {
  const navLinks = [
    { href: '/', label: 'home,' },
    { href: '/', label: 'services,' },
    { href: '/', label: 'about,' },
    { href: '/', label: 'contact,' },
  ];

  useGSAP(() => {
    gsap.from('.nav-word', {
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.3,
    });
  }, []);

  return (
    <nav className="flex md:items-center gap-4 bg-[#f5f4f1] px-4 md:px-8 justify-between py-4 md:py-5 font-satoshi w-full">
      {/* Logo / Site Title */}
      <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-2">
        <p className="nav-word text-2xl md:text-3xl font-bold">
          K<sup className="text-lg align-top">©</sup>
        </p>
        <p className="nav-word text-gray-500 text-lg md:text-xl">
          (web designer & developer)
        </p>
      </div>

      {/* Nav links fade in word by word */}
      <ul className="md:flex md:gap-2">
        {navLinks.map((link, index) => (
          <li key={index} className="leading-none text-xl md:text-2xl uppercase text-gray-500">
            <span className="nav-word">
              <Effect id={`nav-${index}`} title={link.label} link={link.href} />
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
