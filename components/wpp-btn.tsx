"use client"

import Image from "next/image"
import WhiteWppIcon from "@/public/white-wpp-btn.svg"
import { useContext } from "react"
import { WppModalContext } from "@/components/wpp-modal"

const WppBtn = () => {
  const wppCtx = useContext(WppModalContext)

  const toggleWppModal = () => wppCtx?.setModalOpen(!wppCtx?.modalOpen)

  return (
    <button
      onClick={toggleWppModal}
      className="fixed z-40 right-5 md:right-[3.125rem] bottom-5 md:bottom-[5rem] bg-[#07d400] grid place-items-center w-[3.75rem] aspect-square rounded-full"
    >
      <Image
        className="w-1/2"
        src={WhiteWppIcon}
        alt="Botão do Whatsapp"
      />
    </button>
  )
}

export default WppBtn