'use client';

import Link from 'next/link';
import Effect from './Effect';

export default function Header() {
  const navLinks = [
    { href: '/', label: 'home,' },
    { href: '/', label: 'services,' },
    { href: '/', label: 'about,' },
    { href: '/', label: 'contact,' },
  ];

  return (
    <nav className="flex md:items-center gap-4 justify-between py-4 md:py-5 font-satoshi w-full">
      {/* Logo / Site Title */}
      <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-2">
        <p className='text-2xl md:text-3xl font-bold'>K<sup className="text-lg align-top">©</sup></p>
        <p className='text-gray-500 text-lg md:text-xl'>(web designer & developer)</p>
      </div>

      {/* Nav links visible at all screen sizes now */}
      <ul className="md:flex md:gap-2">
        {navLinks.map((link, index) => (
          <li key={index} className="leading-none text-2xl md:text-2xl uppercase text-gray-500">
            <Effect id="contact-hero" title={link.label} link={link.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
