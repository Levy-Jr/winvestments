"use client"

import Image from "next/image"
import Link from "next/link"
import HeaderLogo from "@/public/header-logo.webp"
import SearchIcon from "@/public/search-icon.svg"

const HeaderNav = () => {
  return (
    <header className="mt-4 relative z-10">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={HeaderLogo}
            alt="Home"
          />
        </Link>
        <div className="flex items-center gap-5 *:flex *:items-center *:gap-3">
          <button className="bg-[#fffc] p-4 rounded-[100vmax]">
            <Image
              src={SearchIcon}
              alt="Ícone de pesquisa"
            />
            <span>BUSCAR <span className="hidden md:inline">IMÓVEIS</span></span>
          </button>
          <button className="bg-black/75 py-4 pl-4 pr-8 rounded-l-[100vmax] text-white">
            MENU
          </button>
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav