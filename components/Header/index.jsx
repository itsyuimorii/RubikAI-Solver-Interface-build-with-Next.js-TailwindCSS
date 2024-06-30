import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './animation';
import { useState } from "react";

const Header = () => {

    const [isActive, setIsActive] = useState(false);
    return (
      
        <div className="bg-white fixed w-full box-border p-4">
            <div className="text-slate-800">
                <Link href="/">Cuuuuuuube</Link>
       
                <div onClick={() => { setIsActive(!isActive) }}>
                          <div className="flex gap-8 cursor-pointer items-center justify-center">
            <div className={`w-6 h-0.5 bg-black ${isActive ? 'transform rotate-45 -translate-y-1' : 'translate-y-0'}`}></div>
            <div className={`w-6 h-0.5 bg-black ${isActive ? 'hidden' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-black ${isActive ? 'transform -rotate-45 translate-y-1' : 'translate-y-0'}`}></div>
        </div>      
                    <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                    <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                </div>
            </div>
 
        </div>
       
    );
}
 
export default Header;