import MessageSection from '@/components/About1'
import HeroSection from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <main className='bg-[#3a3733]'>
      <HeroSection />
      <MessageSection />
      <Services />
    </main>
  )
}

export default page