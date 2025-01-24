'use client';
import React from 'react'
import { Tabs } from './ui/tabs';
import { motion } from "framer-motion"
import Link from 'next/link';

const techs = {
    leftColumn: ["Python", "Github Actions", "Docker", "Bash Scripting", "Git"],
    rightColumn: []
}

const links = {
    leftColumn: [
        { name: "GSoC Website", url: "https://summerofcode.withgoogle.com" },
        { name: "Proposal", url: "https://your-proposal-link.com" },
        { name: "Final Report", url: "https://your-final-report-link.com" },
    ],
    rightColumn: [
        { name: "CUPS", url: "https://www.cups.org/" },
        { name: "ps-printer-app", url: "https://github.com/OpenPrinting/ps-printer-app" },
        { name: "hplip-printer-app", url: "https://github.com/OpenPrinting/hplip-printer-app" },
        { name: "ghostscript-printer-app", url: "https://github.com/OpenPrinting/ghostscript-printer-app" },
        { name: "gutenprint-printer-app", url: "https://github.com/OpenPrinting/gutenprint-printer-app" },
    ],
}

const Experience = () => {
    const experiences = [
        {
          title: "GSoC 2024",
          value: "gsoc",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-gray-300 bg-gradient-to-br from-purple-700 to-violet-900">
              <p className='text-xl md:text-4xl font-bold mb-6 text-white'>Google Summer of Code 2024</p>
              <div>
                <p>
                  Contributed to Google Summer of Code with The Linux
                  Foundation, where I worked on packaging CUPS and printer
                  applications into OCI images.
                </p>
                <p className='mt-4 text-2xl font-bold'>
                    Links
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-md font-mono text-sm mt-4">
                    {links.leftColumn.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-2 text-blue-400"
                      >
                        <span className="text-white">▹</span>
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </Link>
                      </motion.div>
                    ))}
                    {links.rightColumn.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + (index + 3) * 0.1 }}
                        className="flex items-center gap-2 text-blue-400"
                      >
                        <span className="text-white">▹</span>
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </Link>
                      </motion.div>
                    ))}
                </div>
                <p className='mt-4 text-2xl font-bold'>
                    Tech Stack Used
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-md font-mono text-sm mt-4">
                    {techs.leftColumn.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-2 text-blue-400"
                      >
                        <span className="text-white">▹</span>
                        {tech}
                      </motion.div>
                    ))}
                    {techs.rightColumn.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + (index + 5) * 0.1 }}
                        className="flex items-center gap-2 text-blue-400"
                      >
                        <span className="text-white">▹</span>
                        {tech}
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "FrostHack 2024",
          value: "frosthack",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p className='text-xl md:text-4xl font-bold mb-6'>Winner @FrostHack 2024</p>
              <div>
                <p>
                    Winner of the Frosthack 2024, hackathon, where I am my team developed a web application for problem statement productivity paradox.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "Open Source",
          value: "opensource",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p className='text-xl md:text-4xl font-bold mb-6'>Open Source Contributor @OpenPrinting & @Ubuntu</p>
              <div>
                <p>
                    Winner of the Frosthack 2024, hackathon, where I am my team developed a web application for problem statement productivity paradox.
                </p>
              </div>
            </div>
          ),
        },
      ];

  return (
    <div className='min-h-lvh p-16' id='experience'>
        <div className="text-3xl font-bold max-w-3xl my-10 flex items-center gap-4">
          <span className="text-violet-600 text-2xl">02.</span> Experience
          <div className="h-[1px] flex-grow bg-violet-600 glow-violet vertical" />
        </div>
        <div className="h-[20rem] md:h-[40rem] mb-20 [perspective:1000px] relative b flex flex-col max-w-4xl mx-auto w-full items-start justify-start">
            <Tabs tabs={experiences}/>
        </div>
    </div>
  )
}

export default Experience;
