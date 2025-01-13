"use client"

import { cn } from "@/lib/utils"
import { formatCurrency } from "@/utils/formatters"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Imóvel } from "smart-imob-types"
import LoadMoreIcon from "@/public/partners/icons/double-arrow-down.png"

const EstateCard = ({ imovel }: { imovel: Imóvel }) => {
  if (!imovel.vendido) {
    return <li key={imovel.db_id}>
      <Link
        href={`/imovel/venda/${imovel.db_id}`}
      >
        <div className="relative w-full aspect-video">
          <Image
            src={imovel.fotos[0].source.uri}
            alt="Foto do imóvel"
            fill
          />
        </div>
        <h3 className="font-extraCondensed text-5xl md:text-6xl mt-4 mb-2">{imovel.tipo}</h3>
        <p className="text-2xl md:text-3xl uppercase">
          {imovel.bairro ?
            `${imovel.bairro}`
            : null}
          {imovel.area_privativa ?
            `| ${imovel.area_privativa}M²`
            : null}
          {imovel.suítes ?
            ` | ${imovel.suítes} suíte${Number(imovel.suítes) === 1 ? "" : "s"}`
            : null}
          {imovel.vagas ?
            ` | ${imovel.vagas} vaga${Number(imovel.vagas) === 1 ? "" : "s"}`
            : null}
        </p>
        <p className="font-bold text-2xl md:text-3xl">{imovel.vendido ? "Vendido" : formatCurrency(imovel.preço_venda)}</p>
      </Link>
    </li>
  }

  if (imovel.vendido) {
    return <li key={imovel.db_id}>
      <div className="relative w-full aspect-video">
        <Image
          src={imovel.fotos[0].source.uri}
          alt="Foto do imóvel"
          fill
        />
      </div>
      <h3 className="font-extraCondensed text-5xl md:text-6xl mt-4 mb-2">{imovel.tipo}</h3>
      <p className="text-2xl md:text-3xl uppercase">
        {imovel.bairro ?
          `${imovel.bairro}`
          : null}
        {imovel.area_privativa ?
          `| ${imovel.area_privativa}M²`
          : null}
        {imovel.suítes ?
          ` | ${imovel.suítes} suíte${Number(imovel.suítes) === 1 ? "" : "s"}`
          : null}
        {imovel.vagas ?
          ` | ${imovel.vagas} vaga${Number(imovel.vagas) === 1 ? "" : "s"}`
          : null}
      </p>
      <p className="font-bold text-2xl md:text-3xl">{imovel.vendido ? "Vendido" : formatCurrency(imovel.preço_venda)}</p>
    </li>
  }
}

const EstatesSection = ({ imoveis }: { imoveis: Imóvel[] }) => {
  const [activeTab, setActiveTab] = useState<'forSale' | 'recentlySold'>('forSale')
  const [visibleSaleItems, setVisibleSaleItems] = useState(2)
  const [visibleSoldItems, setVisibleSoldItems] = useState(2)

  const forSaleEstates = imoveis.filter(imovel => !imovel.vendido)
  const recentlySoldEstates = imoveis.filter(imovel => imovel.vendido)

  const handleLoadMore = () => {
    if (activeTab === "forSale") {
      setVisibleSaleItems(prev => Math.min(prev + 2, forSaleEstates.length))
    }

    if (activeTab === "recentlySold") {
      setVisibleSoldItems(prev => Math.min(prev + 2, recentlySoldEstates.length))
    }
  }

  return (
    <section className="mb-6" id="imoveis">
      <h2 className="font-extraCondensed tracking-wide text-6xl text-center my-20">Imóveis Exclusivos</h2>
      <div className="flex flex-col sm:flex-row gap-14 *:flex-1 *:pb-2 *:border-b-black *:text-3xl md:*:text-4xl">
        <button
          onClick={() => setActiveTab('forSale')}
          className={cn("border-b-2", activeTab == "forSale" ? "border-b-4 font-bold" : "")}
        >À VENDA</button>
        <button
          onClick={() => setActiveTab('recentlySold')}
          className={cn("border-b-2", activeTab == "recentlySold" ? "border-b-4 font-bold" : "")}
        >VENDIDOS RECENTEMENTE</button>
      </div>
      {activeTab === "forSale" &&
        <ul className="mt-12 grid md:grid-cols-2 gap-14">
          {forSaleEstates
            .slice(0, visibleSaleItems)
            .map(imovel => (
              <EstateCard
                imovel={imovel}
                key={imovel.db_id}
              />
            ))}
        </ul>
      }
      {activeTab === "recentlySold" &&
        <ul className="mt-12 grid md:grid-cols-2 gap-14">
          {recentlySoldEstates
            .slice(0, visibleSoldItems)
            .map(imovel => (
              <EstateCard
                imovel={imovel}
                key={imovel.db_id}
              />
            ))
          }
        </ul>
      }

      <div className="mt-16 mb-8 flex justify-center">
        <button
          className="text-2xl text-[#adacb4] before:block before:mb-2 before:w-[95%] before:mx-auto before:h-[.125rem] before:bg-[#adacb4]"
          onClick={handleLoadMore}
        >
          CARREGAR MAIS
          <Image
            className="w-12 mx-auto"
            src={LoadMoreIcon}
            alt="Expandir"
          />
        </button>
      </div>
    </section>
  )
}

export default EstatesSection