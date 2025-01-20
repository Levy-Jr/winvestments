import { Corretor, Imóvel } from "smart-imob-types"
import EstatesSection from "../components/estates-section"
import FormSection from "../components/form-section"
import Header from "../components/header"
import processFilters from "@/utils/process-backend-filters"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import Footer from "../components/footer"

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
      <Suspense>
        <Header
          tel={corretor.telefone}
        />
      </Suspense>
      <main className="text-[#333333] font-barlow">
        <div className="relative">
          <div
            className="absolute inset-0 -top-[12.6875rem] w-full z-0 before:bg-black/40 before:inset-0 before:absolute before:-z-0"
          >
            {corretor.banner_site ? (
              <Image
                className="object-cover object-center -z-10"
                src={corretor.banner_site}
                alt="Background"
                fill
              />
            ) : <Image
              className="object-cover object-center -z-10"
              src={`/banners/amira-banner.webp`}
              alt="Background"
              fill
            />}
          </div>
          <section className="relative w-container text-white py-6 md:py-0 mx-auto flex flex-col-reverse gap-6 md:gap-0 md:flex-row items-center">
            <div className="flex-1 text-center md:text-start md:pt-12">
              <h1 className="font-condensed italic text-7xl max-w-[13ch]">{corretor.nome}</h1>
              <h2 className="mt-2 text-3xl font-condensed italic">Corretor associado <br />  W Partners</h2>
              <p className="my-4 text-2xl">{corretor.telefone ? corretor.telefone + " |" : null}  <Link href={"mailto:"}>{corretor.email}</Link></p>
              <div className="inline-grid gap-2 *:inline-block *:bg-[#d39864] *:text-2xl *:text-white *:px-4 *:py-3">
                <Link className="" href={""}>IMÓVEIS EXCLUSIVOS &gt;</Link>
                <Link className="" href={""}>PROCURAR UM IMÓVEL &gt;</Link>
              </div>
            </div>
            <div className="flex-1 md:pt-12">
              <div className="w-[min(100%,30.625rem)] md:w-[min(100%,40.625rem)] mx-auto md:mx-0 md:ml-auto aspect-square">
                {corretor.foto ? (
                  <Image
                    src={corretor.foto}
                    alt={corretor.nome}
                    width={650}
                    height={650}
                    className="w-full h-full object-cover object-top"
                  />
                ) : <p>"Corretor sem foto*</p>}
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
      <Footer corretor={corretor} />
    </>
  )
}

export default Partners