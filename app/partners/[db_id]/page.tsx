import { Corretor, Imóvel } from "smart-imob-types"
import EstatesSection from "../components/estates-section"
import FormSection from "../components/form-section"
import Header from "../components/header"
import processFilters from "@/utils/process-backend-filters"
import Link from "next/link"
import Image from "next/image"
import PartnersLogo from "@/public/header/header-logo.webp"

import GoldenTelIcon from "@/public/footer/golden-tel-icon.svg"
import GoldenEmailIcon from "@/public/footer/golden-email-icon.svg"
import GoldenInstagramIcon from "@/public/footer/golden-instagram-icon.svg"


const getData = async (id: string): Promise<{
  corretor: Corretor;
  imoveis: {
    total: number;
    nodes: Imóvel[]
  }
}> => {
  const uri =
    process.env.BACKEND_API_URI ?? process.env.NEXT_PUBLIC_BACKEND_API_URI;
  const empresa_id: any =
    process.env.EMPRESA_ID ?? process.env.NEXT_PUBLIC_EMPRESA_ID;
  const dataCorretor = await fetch(`${uri}/corretores/${id}`, {
    next: { tags: [`corretores-${id}`] },
  });

  if (!dataCorretor.ok) {
    throw new Error("Failed to fetch data");
  }

  const corretor = await dataCorretor.json();

  const PAGE_SIZE = "10";

  const params = new URLSearchParams({
    empresa_id,
    filtros: JSON.stringify(
      processFilters({ agenciador_id: corretor.db_id })
    ),
    limit: PAGE_SIZE,
  });
  const imoveis = await fetch(
    `${uri}/imoveis/site/paginado?${params.toString()}`,
    {
      next: { tags: ["imoveis-paginado"], revalidate: 3600 },
    }
  );

  return {
    corretor,
    imoveis: await imoveis.json(),
  };
}

const Partners = async (props: {
  params: Promise<{ db_id: string }>
}) => {
  const { db_id } = await props.params
  const { corretor, imoveis } = await getData(db_id)

  return (
    <>
      <Header
        tel={corretor.telefone}
      />
      <main className="text-black">
        <div className="relative">
          <div
            className="absolute inset-0 -top-[10.75rem] w-full bg-cover z-0 bg-center before:bg-black/40 before:inset-0 before:absolute before:z-0"
            style={{
              backgroundImage: "url('/banners/amira-banner.webp')"
            }}
          />
          <section className="relative w-container text-white py-6 md:py-0 mx-auto flex flex-col-reverse md:flex-row items-center">
            <div className="flex-1 text-center md:text-start md:pt-12">
              <h1 className="text-6xl max-w-[13ch]">{corretor.nome}</h1>
              <h2 className="mt-2 text-3xl">Corretor associado <br />  W Partners</h2>
              <p className="my-4 text-lg">{corretor.telefone} | <Link href={"mailto:"}>{corretor.email}</Link></p>
              <div className="inline-grid gap-2 *:inline-block *:bg-[#d39864] *:text-lg *:text-white *:px-4 *:py-3">
                <Link className="" href={""}>IMÓVEIS EXCLUSIVOS &gt;</Link>
                <Link className="" href={""}>PROCURAR UM IMÓVEL &gt;</Link>
              </div>
            </div>
            <div className="flex-1 md:pt-12">
              <div className="relative w-[min(100%,40.625rem)] ml-auto aspect-square">
                <Image
                  src={corretor.foto ?? ""}
                  alt={corretor.nome}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="mx-auto w-container">
          <FormSection
            corretor={corretor}
          />
          <EstatesSection
            imoveis={imoveis.nodes}
          />
        </div>
      </main>

      <div className="bg-[#333333] text-white py-8">
        <footer className="w-container mx-auto grid place-content-center">
          <nav>
            <ul className="flex justify-center gap-4 items-center">
              <li>
                <Link href={"#imoveis"}>PROCURAR IMÓVEIS</Link>
              </li>
              <li>
                <Link href={"#sobre"}>SOBRE</Link>
              </li>
              <li>
                <Link href={"#contato"}>CONTATO</Link>
              </li>
            </ul>
          </nav>
          <Image
            className="mx-auto my-12"
            src={PartnersLogo}
            alt="Parners Logo"
          />
          <p className="text-center text-4xl mb-8">{corretor.nome}</p>
          <ul className="flex flex-col items-center md:flex-row gap-3 *:flex *:items-center *:gap-3">
            {corretor.instagram ? (
              <li>
                <Image
                  src={GoldenInstagramIcon}
                  alt="Ícone dourado do Instagram"
                />
                {corretor.instagram}
              </li>
            ) : null}
            {corretor.telefone ? (
              <li>
                <div className="w-[1.5625rem]">
                  <Image
                    src={GoldenTelIcon}
                    alt="Ícone dourado de um telefone"
                  />
                </div>
                {corretor.telefone}
              </li>
            ) : null}
            {corretor.email ? (
              <li>
                <div className="w-[1.5625rem]">
                  <Image
                    src={GoldenEmailIcon}
                    alt="Ícone dourado do email"
                  />
                </div>
                {corretor.email}
              </li>
            ) : null}
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Partners