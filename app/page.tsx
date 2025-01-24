'use client';
import AboutMe from "@/components/aboutme";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Works from "@/components/works";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Splash from "@/components/ui/splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex justify-center min-h-screen items-center">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" />
        ) :
        <motion.div
        key="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen flex flex-col items-center justify-center"
      >
      <div className="h-full">
        <Intro />
        <AboutMe />
        <Experience />
        <Works />
      </div>
      </motion.div>
        }
    </AnimatePresence>
    </div>
  );
}
