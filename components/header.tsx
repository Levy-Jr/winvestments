"use client"

import Image from "next/image"
import Link from "next/link"
import HeaderLogo from "@/public/header/header-logo.webp"
import SearchIcon from "@/public/header/search-icon.svg"
import WppIcon from "@/public/header/wpp-icon.svg"
import TelIcon from "@/public/header/tel-icon.svg"
import EmailIcon from "@/public/header/email-icon.svg"
import CloseIcon from "@/public/header/close-icon.svg"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Variants, motion } from "framer-motion"
import { cn } from "@/lib/utils"

const variants: Variants = {
  closed: {
    x: "100%",
    transition: {
      bounce: 0
    }
  },
  opened: {
    x: 0,
    transition: {
      bounce: 0
    }
  }
}

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const routes = [
    {
      label: "HOME",
      href: "/"
    },
    {
      label: "LANÇAMENTOS",
      href: "/lancamentos"
    },
    {
      label: "IMÓVEIS PRONTOS",
      href: "/imoveis/prontos"
    },
    {
      label: "LOCAÇÃO",
      href: "/imoveis/locacao"
    },
    {
      label: "ENCOMENDE UM IMÓVEL",
      href: "/encomende-um-imovel"
    },
    {
      label: "ANUNCIE NO SITE",
      href: "/anuncie"
    },
    {
      label: "NOSSOS CONSULTORES",
      href: "/nossos-consultores"
    },
    {
      label: "CONTATO",
      href: "/fale-conosco"
    },
    {
      label: "SOBRE NÓS",
      href: "/sobre-nos"
    },
  ]

  return (
    <header className="mt-3 relative z-50">
      <div className="flex justify-between items-center">
        <Link className="ml-2 sm:ml-10" href={"/"}>
          <Image
            src={HeaderLogo}
            alt="Home"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-5 *:flex *:items-center *:gap-3">
          <button className="bg-[#fffc] py-[.875rem] px-4 rounded-[100vmax]">
            <Image
              src={SearchIcon}
              alt="Ícone de pesquisa"
            />
            <span>BUSCAR <span className="hidden md:inline">IMÓVEIS</span></span>
          </button>
          <button
            onClick={toggleMenu}
            className="bg-black/75 py-[.875rem] pl-3 sm:pl-4 pr-6 sm:pr-8 rounded-l-[100vmax] text-white"
          >
            MENU
            <div className="w-[1.125rem] grid gap-1 *:bg-white *:w-full *:h-[.125rem]">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
      <div className={cn("", isOpen ? "fixed inset-0 z-50 backdrop-blur-sm" : "")}>
        <motion.nav
          ref={menuRef}
          className="fixed flex flex-col justify-between py-5 px-[3.125rem] right-0 top-0 min-h-[100svh]"
          style={{
            backgroundImage: "url('/marble-bg.webp')"
          }}
          initial={false}
          animate={isOpen ? "opened" : "closed"}
          variants={variants}
        >
          <button onClick={toggleMenu}>
            <Image
              className="ml-auto"
              src={CloseIcon}
              alt="Fechar"
            />
          </button>
          <ul className="flex flex-col h-full text-center gap-3 md:gap-5 px-6 sm:px-8 text-lg text-[#7f7f7f]">
            {routes.map((route, index) => (
              <li className="pb-3 md:pb-5 relative after:absolute after:-left-[10%] after:bottom-0 after:bg-gradient-to-r after:from-[#A38243] after:to-[#D2C29E] after:w-[120%] after:h-[.0625rem] " key={index}>
                <Link href={route.href}>{route.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex justify-between">
            <li>
              <button>
                <Image
                  className="w-10"
                  src={WppIcon}
                  alt="Whatsapp"
                />
              </button>
            </li>
            <li>
              <Link href="tel:5541997683471">
                <Image
                  className="w-10"
                  src={TelIcon}
                  alt="Telefone"
                />
              </Link>
            </li>
            <li>
              <Link href="/fale-conosco">
                <Image
                  className="w-10"
                  src={EmailIcon}
                  alt="Email"
                />
              </Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  )
}

export default HeaderNav