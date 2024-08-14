import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Background from '@/public/images/1.jpg';
import Link from 'next/link';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
        ref={container} 
            className='relative h-screen flex items-center justify-center  overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Explore <Link href="https://www.youtube.com/watch?v=GbgjafMdAIs&list=PLfJ_U_DaVeSD_H7drvFMvA63vsVZC40ns" className='uppercase font-ppneue-montreal font-book italic mix-blend-difference underline'></Link> YouTube channel to master TensorFlow.js and dive into the world of WebAI! Discover insights and techniques for <span className='font-book italic'> #WebAI #tfjs </span></p> 
                
                <Link href="ScanCube" className='text-[3vw] uppercase font-ppneue-montreal font-book italic mix-blend-difference hover:underline'>Start Scan rubik-cube Now?</Link>
                
            </div>
            
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>  
        </div>
    )
}
