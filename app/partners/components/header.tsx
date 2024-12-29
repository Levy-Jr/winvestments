"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="relative z-10 text-white border-b border-b-[#fdfdfc] py-[3.4375rem]">
      <div className="w-container mx-auto flex items-center justify-between">
        <div></div>
        <nav>
          <ul className={cn("md:flex items-center gap-5", isOpen ? "fixed grid place-content-center text-center inset-0 bg-black/90 z-20" : "hidden")}>
            <li>
              <Link href={""}>PROCURAR IMÓVEIS</Link>
            </li>
            <li>
              <Link href={""}>SOBRE</Link>
            </li>
            <li>
              <Link href={""}>CONTATO</Link>
            </li>
            <li className="border-2 p-3">
              (41) 99999-9999
            </li>
          </ul>
          <button
            className={cn("relative w-[1.125rem] grid gap-1 *:bg-white *:w-full *:h-[.125rem] md:hidden", isOpen ? "relative z-20" : "")}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header