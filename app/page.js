'use client';
import { useEffect } from 'react';
// import dynamic from 'next/dynamic';
import Lenis from 'lenis'
// import Description from '@/components/Description';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
// import TextParallax from '@/components/Text-parallax';


export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  // const Scene = dynamic(() => import('@/components/Scene'), {
  //   ssr: false,
  // })

  return (
    <main className="relative h-screen">
      {/* <Scene /> */}
      <Intro />
      {/* <Description /> */}
      {/* <TextParallax /> */}
      <Section />
      <Footer />
    </main>
  );
}
