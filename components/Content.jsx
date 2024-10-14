import Link from 'next/link'
import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#000000] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <SectionUp />
        <SectionDown />
    </div>
  )
}

const SectionUp = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const SectionDown = () => {
    return (
        <div className='flex justify-between items-end'>
        <h1 className='font-ppneue-montreal font-medium text-white text-[14vw] leading-[0.8] mt-10'>
        AI Rubik Cube
            </h1>
            <p className='mb-2 uppercase font-ppneue-montreal    font-thin text-custom-green'>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase font-ppneue-montreal    font-thin text-custom-green'>Home</h3>
               <Link className='text-white  font-ppneue-montreal    font-thin' href="/about">About</Link>
               <Link  className='text-white  font-ppneue-montreal    font-thin' href="/about">Playground</Link>
               <Link  className='text-white  font-ppneue-montreal    font-thin' href="/about">Tools</Link>
               <Link  className='text-white  font-ppneue-montreal    font-thin' href="/about">References</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase font-ppneue-montreal    font-thin text-custom-green'>Github</h3>
          
            </div>
        </div>
    )
}