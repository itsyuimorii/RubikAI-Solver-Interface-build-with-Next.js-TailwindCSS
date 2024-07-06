'use client'

import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './animation';
import { useState } from "react";

const Header = () => {

    const [isActive, setIsActive] = useState(false);
    return (
      
        <div className="bg-white fixed w-full box-border p-4">
            <div className="text-slate-800">
                <Link href="/">Cube</Link>
                <div onClick={() => { setIsActive(!isActive) }} className="flex">
                    <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                    <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                </div>
            </div>
        </div>
       
    );
}
 
export default Header;