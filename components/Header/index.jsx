'use clients';

import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './animation';

const Header = () => {

    return (
      
        <div className="bg-white fixed w-full box-border p-4">
            <div className="text-slate-800">
                <Link href="/">Cube</Link>
          
            </div>
       
        </div>
        
       
    );
}
 
export default Header;