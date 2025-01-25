"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Github } from "lucide-react";

export interface ProjectProps {
  timeline: string;
  project: string;
  builtWith: string;
  shortDescription: string;
  description: string;
  image?: string;
  githubLink: string;
  preview?: string;
}

export function ProjectArchive({ cards }: { cards: ProjectProps[] }) {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  // @ts-expect-error: useOutsideClick hook does not have TypeScript definitions
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.project}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-gray-900 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.project}-${id}`}
              ref={ref}
              className="w-full max-w-[90%] md:max-w-[500px] overflow-scroll h-fit md:h-fit max-h-[90%] flex flex-col bg-gray-900 dark:bg-gray-900 rounded-xl md:rounded-3xl md:overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.project}-${id}`}
                className="w-full h-60 md:h-80 relative"
              >
                {!active.preview ? (
                  <Image
                    priority
                    src={active.image || "/placeholder.svg"}
                    alt={active.project}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                ) : (
                  <motion.div
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="relative w-full h-full"
                  >
                    <iframe
                      src={active.preview}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </motion.div>
                )}
              </motion.div>
              <div className="p-4">
                <motion.h3
                  layoutId={`project-${active.project}-${id}`}
                  className="font-bold text-lg sm:text-xl text-white dark:text-white mb-2 text-center"
                >
                  {active.project}
                </motion.h3>
                <motion.p
                  layoutId={`timeline-${active.project}-${id}`}
                  className="text-neutral-400 text-sm dark:text-neutral-400 mb-4 text-center"
                >
                  {active.timeline}
                </motion.p>
                <motion.p
                  layoutId={`built-with-${active.project}-${id}`}
                  className="text-white mb-2 text-sm"
                >
                  <span className="font-bold">Built with:</span> {active.builtWith}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-300 mb-4 text-sm"
                >
                  {active.description}
                </motion.p>
                <motion.a
                  layoutId={`github-link-${active.project}-${id}`}
                  href={active.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-full font-bold bg-violet-600 hover:bg-violet-700 text-white inline-block transition-colors duration-300 ease-in-out"
                >
                  GitHub <Github size={16} className="inline-block ml-2" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.ul
        className="p-4 sm:p-8 mx-auto w-full gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              when: "beforeChildren",
            },
          },
        }}
      >
        <div className="flex md:flex-row justify-between items-center font-semibold text-neutral-400 gap-4 md:gap-6 p-4">
          <span className="w-full md:w-1/6 text-center">Timeline</span>
          <span className="w-full md:w-1/4 text-center">Project</span>
          <span className="hidden md:block md:w-1/4 text-center">Built With</span>
          <span className="hidden md:block md:w-1/2 text-center">Description</span>
          <span className="w-full md:w-1/12 text-center"></span>
        </div>
        {cards.map((card) => (
          <motion.li
            key={`card-${card.project}-${id}`}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                },
              },
            }}
            layout
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            onClick={() => setActive(card)}
            className="p-4 md:p-4 flex md:flex-row justify-between items-center hover:border-violet-600 transition-all duration-300 ease-in-out rounded-xl cursor-pointer border border-transparent gap-4 md:gap-6"
          >
            <motion.span
              layoutId={`timeline-${card.project}-${id}`}
              className="w-full md:w-1/6 text-sm font-medium text-neutral-400 text-center"
            >
              {card.timeline}
            </motion.span>
            <motion.h3
              layoutId={`project-${card.project}-${id}`}
              className="w-full md:w-1/4 font-medium text-white text-center"
            >
              {card.project}
            </motion.h3>
            <motion.span
              layoutId={`built-with-${card.project}-${id}`}
              className="hidden md:block md:w-1/4 text-sm text-neutral-400 text-center"
            >
              {card.builtWith}
            </motion.span>
            <motion.span
              layoutId={`short-description-${card.project}-${id}`}
              className="hidden md:block md:w-1/2 text-sm text-neutral-400 text-center"
            >
              {card.shortDescription}
            </motion.span>
            <motion.button
              layoutId={`github-link-${card.project}-${id}`}
              className="w-full md:w-1/12 px-4 py-2 text-sm rounded-full font-bold bg-violet-600 hover:bg-violet-700 text-white transition-colors duration-300 ease-in-out text-center"
            >
              View
            </motion.button>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
