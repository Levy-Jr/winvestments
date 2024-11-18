"use client"

import { motion, Variants } from "framer-motion"
import CloseIcon from "@/public/header/close-icon.svg"
import Image from "next/image"
import { SetStateAction, useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import processFilters from "@/utils/process-backend-filters"
import SideFilterFields from "./side-filter-fields"
import slugify from "slugify"

const PAGE_SIZE = 12

const getData = async (filtros: any) => {
  const uri = process.env.BACKEND_API_URI ?? process.env.NEXT_PUBLIC_BACKEND_API_URI;
  const empresa_id: any = process.env.EMPRESA_ID ?? process.env.NEXT_PUBLIC_EMPRESA_ID;

  const params_estates = new URLSearchParams({
    limit: PAGE_SIZE.toString(),
    startAt: (0).toString(),
    filtros: JSON.stringify(processFilters(filtros)),
    empresa_id: empresa_id
  })

  const params = new URLSearchParams({
    empresa_id
  })

  const districtsResponse = await fetch(`${uri}/imoveis/bairros-por-cidade?${params_estates}`, {
    next: { tags: ["imoveis-info"], revalidate: 3600 }
  })

  const citiesParams = new URLSearchParams({
    empresa_id,
    site: '1'
  })

  const cities = await fetch(`${uri}/cidades?${citiesParams.toString()}`, {
    next: { tags: ["imoveis-info", "imoveis-cidades"], revalidate: 3600 }
  })

  const codesResponse = await fetch(`${uri}/imoveis/codigos?${params.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })

  if (!cities.ok) {
    throw new Error("Failed to fetch data")
  }

  return {
    districts: await districtsResponse.json(),
    cities: await cities.json(),
    codes: await codesResponse.json()
  }
}

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

type SideFilterMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: SetStateAction<boolean>) => void;
}

export type FilterStates = {
  cities: any[];
  districts: any[];
  params: {
    city: string[];
    district: string[];
    type: string[];
    minValue: number | "";
    maxValue: number | "";
    condominium: string;
    dormitory: number | "";
    sale: string;
    rent: string;
    bathroom: number | "";
    suite: number | "";
    vacancies: number | "";
  }
}

const SideFilterMenu = ({ isMenuOpen, setIsMenuOpen }: SideFilterMenuProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [searchState, setSearchState] = useState<FilterStates>({
    cities: [],
    districts: [],
    params: {
      type: searchParams.get("tipo")?.split(',') ?? [],
      city: searchParams.get("cidade")?.split(',') ?? [],
      district: searchParams.get("bairro")?.split(',') ?? [],
      minValue: Number(searchParams.get("valorMin")) ?? "",
      maxValue: Number(searchParams.get("valorMax")) ?? "",
      condominium: "",
      dormitory: Number(searchParams.get("dormitórios")) ?? "",
      sale: searchParams.get("venda") ?? "",
      rent: searchParams.get("locação") ?? "",
      bathroom: Number(searchParams.get("banheiros")) ?? "",
      suite: Number(searchParams.get("suíte")) ?? "",
      vacancies: Number(searchParams.get("vagas")) ?? "",
    }
  })

  useEffect(() => {
    const getCities = async () => {
      const { cities } = await getData(searchParams)
      setSearchState(prev => ({
        ...prev,
        cities
      }))
    }
    getCities()
  }, [])

  useEffect(() => {
    const getDistricts = async () => {
      const { districts } = await getData(searchParams)
      setSearchState(prev => ({
        ...prev,
        districts
      }))
    }
    getDistricts()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const slugifyOptions = {
      lower: true,
      locale: "pt",
      remove: /[*+~.()'"!:@]/g
    }

    const slugifyString = (str: string) => slugify(str, slugifyOptions)

    const urlSegments = []

    if (searchState.params.type.length !== 0) {
      urlSegments.push(`tipo-${slugifyString(searchState.params.type.join(','))}`)
    }

    if (searchState.params.city.length !== 0) {
      urlSegments.push(`cidade-${slugifyString(searchState.params.city.join(','))}`)
    }

    if (searchState.params.district.length !== 0) {
      urlSegments.push(`bairro-${slugifyString(searchState.params.district.join(','))}`)
    }

    if (searchState.params.dormitory) {
      urlSegments.push(`dormitorios-${slugifyString(String(searchState.params.dormitory))}`)
    }

    if (searchState.params.suite) {
      urlSegments.push(`suite-${slugifyString(String(searchState.params.suite))}`)
    }

    if (searchState.params.vacancies) {
      urlSegments.push(`vagas-${slugifyString(String(searchState.params.vacancies))}`)
    }

    if (searchState.params.bathroom) {
      urlSegments.push(`banheiros-${slugifyString(String(searchState.params.bathroom))}`)
    }

    if (searchState.params.minValue) {
      urlSegments.push(`preco-min-${slugifyString(String(searchState.params.minValue))}`)
    }
    if (searchState.params.maxValue) {
      urlSegments.push(`preco-max-${slugifyString(String(searchState.params.maxValue))}`)
    }

    const url = `/imoveis/${urlSegments.join("/")}`

    router.push(url)
  }

  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <motion.div
      ref={menuRef}
      className="fixed overflow-y-auto text-lg flex flex-col pt-5 pb-12 w-[min(100%,25rem)] px-[2rem] right-0 top-0 bottom-0"
      style={{
        backgroundImage: "url('/marble-bg.webp')"
      }}
      initial={false}
      animate={isMenuOpen ? "opened" : "closed"}
      variants={variants}
    >
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Image
          className="ml-auto"
          src={CloseIcon}
          alt="Fechar"
        />
      </button>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <p className="font-newsReader text-center font-light mt-12 mb-5">BUSCA INTELIGENTE</p>
          <input
            className="bg-[size:.938rem] bg-[position:.938rem_center] py-3 pl-10 pr-1 text-sm outline-0 rounded-[.938rem] border-0 w-full bg-no-repeat"
            style={{
              backgroundImage: "url('/header/search-icon.svg')"
            }}
            type="text"
            placeholder="Rua, bairro, edifício ou código do imóvel"
          />
        </div>
        <SideFilterFields
          filterState={searchState}
          setFilterState={setSearchState}
        />
        <button className="block mx-auto bg-[#95a3ab] text-white px-12 py-3 rounded-[100vmax]">BUSCAR IMÓVEL</button>
      </form>
    </motion.div>
  )
}

export default SideFilterMenu