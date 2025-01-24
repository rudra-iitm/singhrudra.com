"use client"
import React from "react"
import { Github, Link2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import HeroVideoDialog from "./ui/hero-video-dialog"

export interface ProjectProps {
  name: string
  description: string
  tech: string[]
  github: string
  projectLink: string
  image?: string
  preview?: string
}

const projects: ProjectProps[] = [
  {
    name: "Potfolio v1",
    description: "A personal portfolio website built with React, TailwindCSS, and ShadCN. It is deployed on github pages and coded in VS Code.",
    tech: ["React", "TailwindCSS", "ShadCN", "Github Pages"],
    github: "https://github.com/rudra-iitm/rudra-iitm.github.io",
    projectLink: "https://rudra-iitm.github.io",
    preview: "/portfolio-v1.mp4",
  },
  {
    name: "Web Dock",
    description: "A web application which lets you develop nodejs inside your browser.",
    tech: ["Next.js", "Web Containers", "TailwindCSS", "Acerernity UI", "SahdCN"],
    github: "https://github.com/rudra-iitm/web-dock",
    projectLink: "https://web-dock.vercel.app",
    image: "/web-dock.png",
  },
  {
    name: "Chess Actions",
    description: "Chess Actions is a GitHub Action that brings the game of chess directly into your GitHub issues tab.",
    tech: ["Github Actions", "CI/CD", "Typescript"],
    github: "https://github.com/rudra-iitm/chess-actions",
    projectLink: "https://project3.com",
    image: "/chess-actions.png",
  },
  {
    name: "Knight's Gambit",
    description: "A real-time multiplayer chess game allowing users to connect randomly and engage with other online players or bot.",
    tech: ["React.js", "Node.js", "Express", "WebSocket", "PostgreSQL", "Prisma ORM", "Turborepo", "Clerk Auth", "Ngrok"],
    github: "https://github.com/rudra-iitm/Knight-s-Gambit",
    projectLink: "https://knights-gambit.vercel.app",
  },
  {
    name: "Portfolio v2",
    description: "A real-time multiplayer chess game allowing users to connect randomly and engage with other online players or bot.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Github Pages"],
    github: "https://github.com/rudra-iitm/singhrudra.com",
    projectLink: "https://singhrudra.com",
  },
]

const Works = () => {
  return (
    <div className="min-h-screen p-16" id="works">
      <div className="text-3xl font-bold max-w-3xl my-10 flex items-center gap-4">
        <span className="text-violet-600 text-2xl">03.</span> Something I’ve Worked On
        <div className="h-[1px] flex-grow bg-violet-600 glow-violet vertical" />
      </div>
      {projects.map((project, index) => (
        <Project key={project.name} project={project} reversed={index % 2 !== 0} />
      ))}
    </div>
  )
}

export default Works

function Project({ project, reversed = false }: { project: ProjectProps; reversed?: boolean }) {
  return (
    <section className="pb-32">
      <div className="max-w-7xl mx-auto w-full min-h-[30rem]">
        <div className={`relative flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center`}>
          {/* Project Details */}
          <div
            className={`w-full md:w-1/2 space-y-6 z-10 mb-2 relative ${reversed ? "md:pl-8 text-right" : "md:pr-8 text-left"}`}
          >
            <div className="space-y-2">
              <p className="text-violet-600 font-mono">Featured Project</p>
              <h2 className="text-4xl font-bold text-slate-100 max-w-md">{project.name}</h2>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
              <p className="text-slate-300 leading-relaxed">{project.description}</p>
            </div>

            <div className={`flex items-center gap-4 text-slate-300 ${reversed ? "justify-end" : "justify-start"}`}>
              <a
                href={project.github}
                className="hover:text-violet-600 transition-colors"
                aria-label="View Github Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              { project.preview &&
                <HeroVideoDialog
                  animationStyle="from-center"
                  videoSrc="project.preview"
                />
              }
              { project.projectLink &&
              <a
                href={project.projectLink}
                className="hover:text-violet-600 transition-colors"
                aria-label="View Live Project"
              >
                <Link2 className="w-5 h-5" />
              </a>
              }
            </div>
          </div>

          {/* Project Image or iframe */}
          <div className={`w-full md:w-3/4 md:absolute ${reversed ? "md:left-0" : "md:right-0"} md:top-0`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group w-full max-w-2xl mx-auto md:w-full aspect-[4/3]"
            >
              <div className="absolute inset-0 rounded-xl bg-violet-600/20 blur-2xl group-hover:bg-violet-600/30 transition-colors duration-500" />
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-xl border-2 border-violet-600/50 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                <div className="absolute inset-0 rounded-xl bg-violet-600/10 backdrop-blur-sm" />
                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-violet-600">
                  {project.image ? (
                    // If the project has an image, render it
                    <Image
                      src={project.image}
                      alt={`${project.name} Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    // If there's no image, render an iframe instead
                    <iframe
                      src={project.projectLink || "https://google.com"}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      title={`${project.name} Preview`}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-popups"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
