'use client';
import React from 'react'
import { Tabs } from './ui/tabs';
import { motion } from "framer-motion"
import Link from 'next/link';
import Image from 'next/image';
import { LinkPreview } from './ui/link-preview';

const techs = {
    leftColumn: ["Python", "Github Actions", "Docker", "Bash Scripting", "Git"],
    rightColumn: ["CUPS", "Printer Applications", "Rockcraft"],
}

const links = {
    leftColumn: [
        { name: "Proposal", url: "https://docs.google.com/document/d/1Q2S8ySOMVmjM3nYYx_iBIum_wfUD2NiS3966gep-kMk/edit?tab=t.0#heading=h.k1oiwn3t9k6i" },
        { name: "Final Report", url: "https://medium.com/@rudransh.iitm/gsoc-2024-final-report-container-chronicles-759fe7f23ac6" },
        { name: "GSoC Page", url: "https://summerofcode.withgoogle.com/archive/2024/projects/RTfTiMia" },
    ],
    rightColumn: [
        { name: "CUPS", url: "https://github.com/OpenPrinting/cups/pull/1137" },
        { name: "ps-printer-app", url: "https://github.com/OpenPrinting/ps-printer-app/pull/29" },
        { name: "hplip-printer-app", url: "https://github.com/OpenPrinting/hplip-printer-app/pull/21" },
        { name: "gutenprint-printer-app", url: "https://github.com/OpenPrinting/gutenprint-printer-app/pull/11" },
        { name: "ghostscript-printer-app", url: "https://github.com/OpenPrinting/ghostscript-printer-app/pull/17" },
    ],
}

const Experience = () => {
  const experiences = [
    {
      title: "GSoC 2024",
      value: "gsoc",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-gray-300 bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Google Summer of Code 2024
          </p>
          <p>
            Google Summer of Code 2024 with The Linux Foundation, where I worked
            on packaging CUPS and printer applications into OCI images.
          </p>
          <div className='block md:hidden h-full mt-4'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-4'>
              <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + 1 * 0.1 }}
                    className="flex items-center gap-2 text-blue-400"
                  >
                    <span className="text-blue-400">▹</span>
                    <Link href={"https://medium.com/@rudransh.iitm/gsoc-2024-final-report-container-chronicles-759fe7f23ac6"}>GSoC Page</Link>
              </motion.div>              
              <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + 1 * 0.1 }}
                    className="flex items-center gap-2 text-blue-400"
                  >
                    <span className="text-blue-400">▹</span>
                    <Link href={"https://docs.google.com/document/d/1Q2S8ySOMVmjM3nYYx_iBIum_wfUD2NiS3966gep-kMk/edit?tab=t.0#heading=h.k1oiwn3t9k6i"}>Proposal</Link>
              </motion.div>              
              <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + 1 * 0.1 }}
                    className="flex items-center gap-2 text-blue-400"
                  >
                    <span className="text-blue-400">▹</span>
                    <Link href={"https://medium.com/@rudransh.iitm/gsoc-2024-final-report-container-chronicles-759fe7f23ac6"}>Final Report</Link>
              </motion.div>
              </div>
              <Image
                  src={"/gsoc.png"}
                  width={130}
                  height={130}
                  alt="GSoC 2024"
                  className="rounded-lg"
                />
            </div>
          </div>
          <div className='hidden md:block'>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Links and Tech Stacks */}
            <div className="flex flex-col flex-grow">
              <div>
                <p className="mt-4 text-2xl font-bold">Links</p>
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
                      <LinkPreview url={link.url} className='text-blue-400'>
                        {link.name}
                      </LinkPreview>
                    </motion.div>
                  ))}
                  {links.rightColumn.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.7 + (index + 3) * 0.1,
                      }}
                      className="flex items-center gap-2 text-blue-400"
                    >
                      <span className="text-white">▹</span>
                      <LinkPreview url={link.url} className='text-blue-400'>
                        {link.name}
                      </LinkPreview>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mt-4 text-2xl font-bold">Tech Stack Used</p>
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
                      transition={{
                        duration: 0.3,
                        delay: 0.7 + (index + 5) * 0.1,
                      }}
                      className="flex items-center gap-2 text-blue-400"
                    >
                      <span className="text-white">▹</span>
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* GSoC Image */}
            <div className="flex-shrink-0 flex justify-center items-center">
              <Image
                src={"/gsoc.png"}
                width={350}
                height={350}
                alt="GSoC 2024"
                className="rounded-lg"
              />
            </div>
          </div>
          </div>
        </div>
      ),
    },
    {
      title: "FrostHack 2024",
      value: "frosthack",
      content: (
        <div className="w-full h-full overflow-hidden relative rounded-2xl p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl font-bold mb-6">
            Winner @FrostHack 2024
          </p>
          <div>
            <p>
              Winner of the FrostHack 2024 hackathon, where my team and I developed
              a web application for the problem statement `Productivity Paradox.`
            </p>
            <div className="mt-6 flex justify-center">
              <motion.div
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full max-w-2xl aspect-video"
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-white">
                  <iframe
                    src="https://www.youtube.com/embed/tbTcSc-BBAI?si=Gqy_AzXkxQDbPdrh"
                    className="w-full h-full rounded-2xl"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Open Source",
      value: "opensource",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl font-bold mb-6">
            Open Source Contributor @OpenPrinting & @Ubuntu
          </p>
          <div className='space-y-4 block md:hidden'>
          <p>
        Worked on the{" "}
        <LinkPreview
          url="https://github.com/ubuntu/desktop-snaps"
          className="text-blue-400 underline"
        >
          ubuntu/desktop-snaps
        </LinkPreview>{" "}
        repository, implementing features like:
      </p>
      <ul className="list-disc list-inside text-sm space-y-1 my-2">
        <li>Version variation & beta release support</li>
        <li>Auto snap versioning</li>
        <li>Integration with{" "}
          <LinkPreview
            url="https://snapcraft.io/blog/introducing-rockcraft"
            className="text-blue-400 underline"
          >
            Rockcraft
          </LinkPreview>
        </li>
        <li>Parts listing with versions in README</li>
      </ul>
      <p>
        During{" "}
        <LinkPreview
          url="https://summerofcode.withgoogle.com/"
          className="text-blue-400 underline"
        >
          GSoC 2024
        </LinkPreview>{" "}
        with{" "}
        <LinkPreview
          url="https://linuxfoundation.org/"
          className="text-blue-400 underline"
        >
          The Linux Foundation
        </LinkPreview>
        , I packaged CUPS & Printer Apps into OCI images for{" "}
        <Link
          href="https://openprinting.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          OpenPrinting
        </Link>
        .
      </p>
          </div>
          <div className="space-y-4 hidden md:block">
            <p>
              I contributed to the{" "}
              <LinkPreview
                url="https://github.com/ubuntu/desktop-snaps"
                className="text-blue-400 underline"
              >
                ubuntu/desktop-snaps
              </LinkPreview>{" "}
              repository, which is a collection of automation tools required for
              managing snaps on the Ubuntu desktop.
            </p>

            <p>
              During my work on this project, I implemented several features in{" "}
              <strong>desktop-snaps</strong>, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Version Variation and Beta Release Support</strong>: Added
                support for managing different versions and beta releases of snaps.
              </li>
              <li>
                <strong>Auto Snap Versioning</strong>: Automated the process of
                versioning snaps.
              </li>
              <li>
                <strong>Integration with Rockcraft</strong>: Extended the
                repository’s functionality to work seamlessly with{" "}
                <LinkPreview
                  url="https://github.com/canonical/rockcraft"
                  className="text-blue-400 underline"
                >
                  Rockcraft
                </LinkPreview>
                .
              </li>
              <li>
                <strong>Listing Parts and Their Versions</strong>: Introduced a
                feature to list snap parts along with their versions in the README
                file.
              </li>
              <li>And many other improvements.</li>
            </ul>

            <p>
              Additionally, I implemented snap versioning and part automation
              workflows in the{" "}
              <LinkPreview
                url="https://openprinting.github.io/"
                className="text-blue-400 underline"
              >
                OpenPrinting Printer Applications
              </LinkPreview>
              . As part of my Google Summer of Code (GSoC) 2024 project with{" "}
              <LinkPreview
                url="https://linuxfoundation.org/"
                className="text-blue-400 underline"
              >
                The Linux Foundation
              </LinkPreview>
              , I worked on packaging CUPS and Printer Applications into OCI (Open
              Container Initiative) images.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="experience" className="p-4 md:p-16">
      <div className="text-3xl font-bold max-w-3xl my-10 flex items-center gap-4">
        <span className="text-violet-600 text-2xl">02.</span> Experience
        <div className="h-[1px] flex-grow bg-violet-600 glow-violet vertical" />
      </div>
      <div className="h-[30rem] md:h-[40rem] mb-4 [perspective:1000px] relative b flex flex-col max-w-4xl mx-auto w-full items-start justify-start">
        <Tabs tabs={experiences} />
      </div>
    </div>
  );
};

export default Experience;
