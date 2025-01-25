"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="block xl:hidden"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="flex gap-6">
          <motion.div variants={item}>
            <Link
              href="https://github.com/rudra-iitm"
              target="_blank"
              className="block p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link
              href="https://www.linkedin.com/in/rudra-iitm/"
              target="_blank"
              className="block p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link
              href="https://x.com/rudransh_rps"
              target="_blank"
              className="block p-2"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <Link
              href={`mailto:rudransh.iitm@gmail.com?subject=Inquiry%20from%20Your%20Portfolio&body=Hi%20there%2C%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%20[Your%20specific%20topic%20or%20project].%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20for%20us%20to%20discuss%20this%20further.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Name]%0D%0A[Your%20Contact%20Information]`}
              target="_blank"
              className="block p-2"
              aria-label="Mail to"
            >
              <Mail className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <div
        className={`mb-16 px-4 lg:px-36 text-center text-xs font-extralight tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200`}
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        Coded in Visual Studio Code. Built with Next.js and Tailwind CSS. Hosted
        on GitHub Pages.
        <br />
        <p className="pt-2 text-sm">Rudra’s Tech © 2025</p>
      </div>
    </div>
  );
};

export default Footer;
