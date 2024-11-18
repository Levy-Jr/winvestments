"use client"

import Link from "next/link"
import { Imóvel } from "smart-imob-types"
import EstateImgCarousel from "./estate-img-carousel"

const Estate = ({ imovel }: { imovel: Imóvel }) => {
  return (
    <li className="bg-white mt-5 relative">
      <p className="absolute">{imovel.tipo}</p>
      <p className="absolute">{imovel.bairro}/{imovel.cidade.nome}</p>
      <EstateImgCarousel
        fotos={imovel.fotos}
      />
      <div className="flex p-[.9375rem] items-center justify-between">
        <p>Valor: {imovel.preço_venda}</p>
        <Link className="inline-block bg-[#95a3ab] hover:bg-[#BEA473] text-white" href="">VEJA MAIS</Link>
      </div>
    </li>
  )
}

export default Estate