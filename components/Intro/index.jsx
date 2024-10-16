'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import useMousePosition from '../../app/utils/useMousePosition';
 
import {  motion } from 'framer-motion';
 

export default function Intro() {
 
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
           With skills that haven&apos;t been replaced by A.I (yet) - and learn how to solve a Rubik&apos;s Cube with A.I.
          </p>
      </motion.div>

      <div className={styles.body}>
       <p>Have you ever thought about using <span>AI to solve a Rubik&apos;s Cube</span>? Explore how A.I. can master the art of solving this classic puzzle. </p>
      </div>
    </main>
  )
}
