"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function EmailSidebar() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  }

  return (
    <motion.div
      className="fixed right-10 bottom-0 hidden xl:block z-50"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="flex flex-col items-center gap-6">
        <Link
          href="mailto:rudransh.iitm@gmail.com"
          className="vertical-text hover:text-violet-600 transition-all duration-300 py-2 px-1"
        >
          rudransh.iitm@gmail.com
        </Link>
        <div className="h-24 w-[1px] bg-violet-600 glow-violet" />
      </div>
    </motion.div>
  )
}

