"use client"

import MessageSection from '@/components/About1'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
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
    <main className='bg-[#222123]'>
      <HeroSection />
      <MessageSection />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}

export default page