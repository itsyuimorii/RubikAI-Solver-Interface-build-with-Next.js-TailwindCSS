import Link from 'next/link'
import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#000000] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='font-ppneue-montreal font-medium text-white text-[14vw] leading-[0.8] mt-10'>AI Rubik Cube </h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-white'>Home</h3>
               <Link className='text-slate-600' href="/about">About</Link>
               <Link className='text-slate-600' href="/about">Playground</Link>
               <Link className='text-slate-600' href="/about">Tools</Link>
               <Link className='text-slate-600' href="/about">References</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-white'>Github</h3>
          
            </div>
        </div>
    )
}