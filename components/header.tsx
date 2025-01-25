"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Logo from "./ui/logo2"

export default function Header() {
  const [active, setActive] = useState("01")

  const navigation = [
    { number: "01", label: "About", href: "/#about" },
    { number: "02", label: "Experience", href: "/#experience" },
    { number: "03", label: "Work", href: "/#works" },
    {number: "04", label: "Blogs", href: "/blogs"}
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => document.querySelector(item.href))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        //@ts-expect-error: section might be null
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navigation[i].number)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-violet-600 hover:text-violet-600/80 transition-colors">
            <Logo />
          </Link>
          <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center space-x-8 font-mono text-sm">
            {navigation.map((item) => (
              <li key={item.number}>
                <Link
                  href={item.href}
                  className={`text-sm ${
                    active === item.number ? "text-violet-600" : "text-gray-400 hover:text-violet-600"
                  } transition-colors`}
                  onClick={() => setActive(item.number)}
                >
                  <span className="text-violet-600">{item.number}.</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
            <Link href={'https://drive.google.com/file/d/1TuVq73fAcq5JaphZuwhGw4JbylSHhIn0/view'} target="_blank" className="border rounded-lg px-4 py-2 text-sm border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"> Resume </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
