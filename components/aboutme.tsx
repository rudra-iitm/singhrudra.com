'use client';
import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

const technologies = {
    leftColumn: ["JavaScript", "Node.js", "Python", "Git", "NoSQL", "Kubernetes"],
    rightColumn: ["Vue", "ReactJS", "Flutter", "SQL", "Docker", "AWS"],
}

const AboutMe = () => {
  return (
    <div id='about' className='min-h-lvh p-16' >
        <div className="text-3xl font-bold max-w-3xl my-10 flex items-center gap-4">
          <span className="text-violet-600 text-2xl">01.</span> About Me
          <div className="h-[1px] flex-grow bg-violet-600 glow-violet vertical" />
        </div>
        <div className='flex gap-12'>
            <div className='max-w-xl text-md text-gray-400'>
                Hello! I’m Rudra Pratap Singh, a BTech CSE student at IIT Mandi and a Full Stack Developer.
                <br /><br />
                I specialize in building efficient, scalable websites and applications. My current focus lies in leveraging containerization technologies and GitHub Actions to streamline development workflows and optimize project deployment.
                <br /><br />
                In 2024, I contributed to Google Summer of Code with The Linux Foundation, where I worked on packaging CUPS and printer applications into OCI images. Beyond GSoC, I actively contribute to open-source projects under OpenPrinting and Ubuntu Desktop Snaps.
                <br /><br />
                Here are some technologies I’ve been working with recently:
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-md font-mono text-sm mt-4">
                    {technologies.leftColumn.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <span className="text-violet-600">▹</span>
                        {tech}
                      </motion.div>
                    ))}
                    {technologies.rightColumn.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 + (index + 6) * 0.1 }}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <span className="text-violet-600">▹</span>
                        {tech}
                      </motion.div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative group w-full max-w-md mx-auto md:w-96 aspect-square"
                >
                    <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-2xl group-hover:bg-violet-600/30 transition-colors duration-500" />
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 rounded-full border-2 border-violet-600/50 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                        <div className="absolute inset-0 rounded-full bg-violet-600/10 backdrop-blur-sm" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-violet-600">
                            <Image
                                src="/rudra.png"
                                alt="Profile"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
