"use client"

import CloseIcon from "@/public/header/close-icon.svg"
import Image from "next/image"

const WppModal = () => {
  return (
    <form className="bg-[#f0f0f0] fixed right-5 bottom-5 w-[min(100%,18.75rem)] border-[.125rem] border-[#ccc] text-center p-[1.875rem] rounded-[1.875rem] z-[999]">
      <button className="absolute grid place-items-center right-[.4375rem] bg-white w-[1.875rem] aspect-square rounded-full top-[.4375rem] border-[.0625rem] border-[#ccc]" type="button">
        <Image
          className="w-1/3"
          src={CloseIcon}
          alt="Fechar"
        />
      </button>
      <p className="mb-4 tracking-wide">CHAMAR NO WHATSAPP</p>
      <div className="grid gap-[.625rem] *:placeholder:text-black *:py-1 *:bg-white text-grayAccent text-sm *:rounded-[100vmax] *:outline-0 *:px-[.625rem] *:border-[.0625rem] *:border-[#CC]">
        <input type="text" placeholder="Seu nome" />
        <input type="text" placeholder="Seu e-mail" />
        <input type="text" placeholder="Seu telefone (com DDD)" />
        <select className="text-black" name="" id="">
          <option value="">Comprar Lançamento</option>
          <option value="">Comprar Pronto</option>
          <option value="">Outros Assuntos</option>
        </select>
      </div>
      <button className="bg-[#07d400] w-full text-white py-[.3125rem] rounded-[100vmax] text-sm mt-[.9375rem]">INICIAR CONVERSA</button>
    </form>
  )
}

export default WppModal