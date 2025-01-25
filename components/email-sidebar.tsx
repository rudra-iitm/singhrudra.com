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
          href={`mailto:rudransh.iitm@gmail.com?subject=Inquiry%20from%20Your%20Portfolio&body=Hi%20there%2C%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%20[Your%20specific%20topic%20or%20project].%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20for%20us%20to%20discuss%20this%20further.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Name]%0D%0A[Your%20Contact%20Information]`}
          className="vertical-text hover:text-violet-600 transition-all duration-300 py-2 px-1"
        >
          rudransh.iitm@gmail.com
        </Link>
        <div className="h-24 w-[1px] bg-violet-600 glow-violet" />
      </div>
    </motion.div>
  )
}

