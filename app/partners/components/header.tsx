"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import HeaderLogo from "@/public/partners/logo/header-logo.png"

const Header = ({ tel }: { tel: string | null }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.maxHeight = '100vh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.maxHeight = 'unset'
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className="relative z-50 text-white border-b border-b-[#fdfdfc] py-[3.4375rem]">
      <div className="w-container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image
            className="w-[15rem] md:w-[25rem]"
            width={400}
            height={400}
            src={HeaderLogo}
            alt="Home"
          />
        </Link>
        <nav>
          <ul className={cn("md:flex items-center gap-12 text-lg", isOpen ? "fixed grid place-content-center text-center inset-0 bg-black/90 z-50" : "hidden")}>
            <li>
              <Link href={"#imoveis"}>PROCURAR IMÓVEIS</Link>
            </li>
            <li>
              <Link href={"#sobre"}>SOBRE</Link>
            </li>
            <li>
              <Link href={"#contato"}>CONTATO</Link>
            </li>
            {tel ? (
              <li>
                <Link className="block border-2 p-3" href={`tel:${tel}`}>{tel}</Link>
              </li>
            ) : null}
          </ul>
          <button
            className={cn("relative w-[1.125rem] grid gap-1 *:bg-white *:w-full *:h-[.125rem] md:hidden", isOpen ? "fixed right-4 z-50" : "")}
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