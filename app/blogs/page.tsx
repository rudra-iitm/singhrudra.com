import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Page() {
    const blogData = [
        {
          id: 1,
          title: "Container Chronicles: My GSoC 2024 Journey",
          url: "https://medium.com/@rudransh.iitm/gsoc-2024-final-report-container-chronicles-759fe7f23ac6",
          content: (
            <div>
              <p className="text-xs md:text-sm font-normal mb-4 text-gray-300">
                My Google Summer of Code 2024 journey was an incredible experience that deepened my understanding of container
                technologies and open-source development. Over the course of three months, I contributed to a project that
                aimed to improve container orchestration and management.
              </p>
              <p className="text-xs md:text-sm font-normal mb-8 text-gray-300">Key achievements during my GSoC 2024 project:</p>
              <ul className="list-disc list-inside mb-4 text-xs md:text-sm text-gray-300">
                <li>Containerized OpenPrinting&apos;s Printer Apps and CUPS</li>
                <li>Added few new features to desktop-snaps automations.</li>
                <li>Implemented CI/CD workflows in printer apps and cups</li>
                <li>Implemented version automation</li>
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/blogs/container-chronicles/01.png"
                  alt="Container resource allocation diagram"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/container-chronicles/02.png"
                  alt="Container startup time optimization graph"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/container-chronicles/03.png"
                  alt="Project documentation screenshot"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/container-chronicles/04.png"
                  alt="Collaboration with mentors"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          id: 2,
          title: "Virtual DOM, React Fiber, and Reconciliation: A Deep Dive",
          url: 'https://rudraiitm.hashnode.dev/understanding-the-core-of-react-virtual-dom-react-fiber-and-reconciliation',
          content: (
            <div>
              <p className="text-xs md:text-sm font-normal mb-4 text-gray-300">
                React&apos;s Virtual DOM and reconciliation process are key to its performance. In this deep dive, we&apos;ll explore
                how these concepts work together to make React applications fast and efficient.
              </p>
              <p className="text-xs md:text-sm font-normal mb-4 text-gray-300">
                Key topics covered in this article:
              </p>
              <ul className="list-disc list-inside mb-8 text-xs md:text-sm text-gray-300">
                <li>Understanding the Virtual DOM concept</li>
                <li>React Fiber: The new reconciliation engine</li>
                <li>How reconciliation optimizes updates</li>
                <li>Best practices for leveraging React&apos;s performance features</li>
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/blogs/virtual-dom/01.png"
                  alt="Virtual DOM concept diagram"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/virtual-dom/02.png"
                  alt="React Fiber architecture"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/virtual-dom/03.png"
                  alt="Reconciliation process visualization"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/virtual-dom/04.png"
                  alt="Performance optimization tips"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          id: 3,
          title: "Unleashing React.js: Building Modern Web Applications",
          url: 'https://rudraiitm.hashnode.dev/unleashing-reactjs',
          content: (
            <div>
              <p className="text-xs md:text-sm font-normal mb-4 text-gray-300">
                React.js continues to evolve, offering powerful features for building modern web applications. In this
                article, we&apos;ll explore advanced techniques and best practices to take your React development skills to the
                next level.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/blogs/unleasing-reactjs/01.png"
                  alt="Advanced hooks diagram"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/unleasing-reactjs/02.png"
                  alt="State management comparison"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/unleasing-reactjs/03.png"
                  alt="Performance optimization techniques"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/unleasing-reactjs/04.png"
                  alt="Testing strategies flowchart"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          id: 4,
          title: "Diving into TypeScript: Enhancing Your JavaScript Development",
          url: 'https://rudraiitm.hashnode.dev/diving-into-typescript',
          content: (
            <div>
              <p className="text-xs md:text-sm font-normal mb-4 text-gray-300">
                TypeScript has become an essential tool for many JavaScript developers. In this article, we&apos;ll explore how
                TypeScript can enhance your development experience and improve code quality.
              </p>
              <p className="text-xs md:text-sm font-normal mb-4">
                Key topics covered:
              </p>
              <ul className="list-disc list-inside mb-8 text-xs md:text-sm text-gray-300">
                <li>Introduction to TypeScript and its benefits</li>
                <li>Setting up a TypeScript development environment</li>
                <li>TypeScript&apos;s type system and advanced features</li>
                <li>Migrating JavaScript projects to TypeScript</li>
                <li>Best practices for TypeScript development</li>
              </ul>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/blogs/typescript/01.png"
                  alt="TypeScript vs JavaScript comparison"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/typescript/02.png"
                  alt="TypeScript development environment setup"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/typescript/03.png"
                  alt="TypeScript type system overview"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <Image
                  src="/blogs/typescript/04.png"
                  alt="TypeScript best practices"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
      ]

  return (
    <div className="w-full p-4 md:p-16">
      <Timeline data={blogData} />
    </div>
  );
}
