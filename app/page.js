"'use client'"

import MessageSection from '@/components/About1'
import HeroSection from '@/components/Hero'
import Services from '@/components/Services'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

const page = () => {

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className='bg-[#3a3733]'>
      <HeroSection />
      <MessageSection />
      <Services />
    </main>
  )
}

export default page