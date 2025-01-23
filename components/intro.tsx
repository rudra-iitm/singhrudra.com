import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { Button } from './ui/button'

const Intro = () => {
    const words = [
        {
          text: "I",
          className: "text-white",
        },
        {
          text: "build",
          className: "text-white",
        },
        {
          text: "things",
          className: "text-white",
        },
        {
          text: "for",
          className: "text-white",
        },
        {
          text: "the",
          className: "text-white",
        },
        {
          text: "Web.",
          className: "text-violet-600",
        },
      ];

  return (
    <div className='flex mx-auto min-h-lvh items-center'>
    <div className="flex-col">
    <div className="text-violet-600 text-lg">
      Hi, my name is 
    </div>
    <div className="text-7xl font-bold text-[#FAF9F6] my-10">
      Rudra Pratap Singh
    <div className="mt-5 text-6xl">
    <TypewriterEffectSmooth words={words} />
    </div>
    </div>
    <div className='max-w-3xl text-lg text-gray-400'>
      I’m a BTech CSE student at IIT Mandi and a Full Stack Developer. I specialize in creating efficient websites and actively build projects leveraging containerization technologies and GitHub Actions to optimize workflows.
    </div>
    <div>
      <Button size={"lg"} className="mt-10 bg-slate-950 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white" variant="outline"> Get in touch </Button>
    </div>
  </div>
  </div>
  )
}

export default Intro