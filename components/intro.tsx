import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
// import { GetInTouch } from './ui/getintouch';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

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
    <div className='flex mx-auto min-h-lvh px-4 md:mt-0 md:px-16 items-center'>
    <div className="flex-col">
    <div className="text-violet-600 text-base md:text-lg">
      Hi, my name is 
    </div>
    <div className="text-5xl md:text-7xl font-bold text-[#FAF9F6] my-10">
      Rudra Pratap Singh
    <div className="mt-5 text-6xl">
      <TypewriterEffectSmooth words={words} />
    </div>
    </div>
    <div className='max-w-3xl text-base md:text-lg text-gray-400'>
      I’m a BTech CSE student at IIT Mandi and a Full Stack Developer. I specialize in creating efficient websites and actively build projects leveraging containerization technologies and GitHub Actions to optimize workflows.
    </div>
    <div>
      {/* <GetInTouch /> */}
      <Link 
        href={`mailto:rudransh.iitm@gmail.com?cc=singhrudra5555@gmail.com&subject=Inquiry%20From%20Portfolio%20v2&body=Dear%20Rudra,%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20recently%20had%20the%20pleasure%20of%20reviewing%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%20am%20reaching%20out%20to%20inquire%20about%20the%20opportunity%20to%20discuss%20[Specific%20Topic%20or%20Project]%20in%20more%20detail.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20for%20us%20to%20connect.%20Thank%20you%20for%20your%20time%20and%20consideration.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]%0D%0A[Your%20Contact%20Information]`}
        >
      <Button
          size="lg"
          className="relative mt-10 bg-violet-600 text-white group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Get in touch
            <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
          </span>
          <motion.div
            className="absolute inset-0 bg-violet-600"
            initial={false}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </Button>
        </Link>
    </div>
  </div>
  </div>
  )
}

export default Intro