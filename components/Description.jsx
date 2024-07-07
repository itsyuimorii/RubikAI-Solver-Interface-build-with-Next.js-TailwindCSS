import React from 'react';
import Link from 'next/link';

export default function Description() {
    return (
        <div className='flex justify-center my-40'>
            <p className='font-ppneue-montreal font-semibold italic text-[5.5vw] text-center max-w-[60vw] leading-none'>Try  <Link href="https://www.tensorflow.org/js" className= 'text-blue-600 hover:underline'>Tensorflow.js</Link> to run Machine learning model in the broswer</p>
        </div>
    )
}
