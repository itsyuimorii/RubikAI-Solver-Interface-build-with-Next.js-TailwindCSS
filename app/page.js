// import CameraFeed from "@/components/CameraFeed";
'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Lenis from 'lenis'
import Intro from '@/components/Intro';
// import Description from '@/components/Description';
// import Section from '@/components/Section';
export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,
  })

  return (
    <main className="relative h-screen">
      <Scene />
      <Intro />
      <div className='h-screen'></div>

      {/* <CameraFeed modelPath="/models/web_model/model.json" /> */}
    </main>
  );
}
