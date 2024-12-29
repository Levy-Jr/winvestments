"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const EstatesSection = () => {
  const [activeTab, setActiveTab] = useState<'forSale' | 'recentlySold'>('forSale')

  return (
    <section className="mb-6">
      <h2 className="text-6xl text-center my-12">Imóveis Exclusivos</h2>
      <div className="flex flex-col sm:flex-row gap-14 *:flex-1 *:pb-2 *:border-b-black *:text-xl">
        <button
          onClick={() => setActiveTab('forSale')}
          className={cn("border-b-2", activeTab == "forSale" ? "border-b-4 font-bold" : "")}
        >À VENDA</button>
        <button
          onClick={() => setActiveTab('recentlySold')}
          className={cn("border-b-2", activeTab == "recentlySold" ? "border-b-4" : "")}
        >VENDIDOS RECENTEMENTE</button>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-14">
        <div>
          <div className="w-full aspect-video bg-blue-500">
            IMAGEM DO IMÓVEL
            {/* <Image
          src={}
          alt=""
          width={}
          height={}
          /> */}
          </div>
          <h3 className="text-3xl">Casa em condomínio</h3>
          <p className="uppercase">campo comprimido | 510 m² privativos | 4 suítes | 6 vagas</p>
          <p>R$ 11.000.000</p>
        </div>
        <div>
          <div className="w-full aspect-video bg-blue-500">
            {/* <Image
          src={}
          alt=""
          width={}
          height={}
          /> */}
          </div>
          <h3 className="text-3xl">Casa em condomínio</h3>
          <p className="uppercase">campo comprimido | 510 m² privativos | 4 suítes | 6 vagas</p>
          <p>R$ 11.000.000</p>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center">
        <button>
          CARREGAR MAIS
          {/* <Image 
          src={}
          alt=""
          /> */}
        </button>
      </div>
    </section>
  )
}

export default EstatesSection