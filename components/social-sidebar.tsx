"use client"

import { Github, Linkedin, ExternalLink, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SocialSidebar() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="fixed left-10 bottom-0 hidden xl:block z-50"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-4">
          <motion.div variants={item}>
            <Link href="https://github.com" target="_blank" className="block p-2" aria-label="GitHub Profile">
              <Github className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link href="https://linkedin.com" target="_blank" className="block p-2" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link href="#" target="_blank" className="block p-2" aria-label="Portfolio">
              <ExternalLink className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link href="https://instagram.com" target="_blank" className="block p-2" aria-label="Instagram Profile">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link href="https://twitter.com" target="_blank" className="block p-2" aria-label="Twitter Profile">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
        <motion.div className="h-24 w-[1px] bg-violet-600 glow-violet" variants={item} />
      </div>
    </motion.div>
  )
}

