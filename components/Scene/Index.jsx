'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Model from '@/components/Scene/model';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function index() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  return (
      <div className='h-screen overflow-hidden'>
        <motion.div style={{ y }} className='relative h-full'>
        <Canvas style={{background: '#000000'}}>
            <Model />
            <directionalLight intensity={2} position={[0, 2, 3]}/>
            <Environment preset="city" />
        </Canvas>
        </motion.div>
      </div>
    )
}
