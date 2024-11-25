import processFilters from "@/utils/process-backend-filters";
import Image from "next/image"
import { Corretor, Imóvel } from "smart-imob-types"
import LogoDivisor from "@/public/logo.svg"
import Link from "next/link";
import ConsultantCarousel from "./components/consultant-carousel";
import ConsultantForm from "./components/consultant-form";

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

const MemberPage = async (props: {
  params: Promise<{ db_id: string }>
}) => {
  const { db_id } = await props.params
  const { corretor, imoveis } = await getData(db_id)

  return (
    <main className="mt-16">
      <div
        className="fixed bg-[top_center] bg-fixed -z-10 inset-0"
        style={{ backgroundImage: `url('/marble-bg.webp')` }}
      />
      <section className="w-lg-container mx-auto pb-[1.875rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-12">
        <div className="rounded-t-xl w-full overflow-hidden">
          <Image
            className="w-full"
            src={corretor.foto ?? ""}
            alt={corretor.nome}
            width={400}
            height={600}
          />
        </div>
        <div className="w-full md:order-3 lg:order-none md:[grid-area:span_1/span_2] lg:[grid-area:auto]">
          <h1 className="font-newsReader mb-10 leading-[1] text-[2rem] text-grayAccent uppercase">{corretor.nome}</h1>
          <p className="text-[1.375rem]">{corretor.cargo}</p>
          <div className="flex items-center mt-10 gap-4 mb-[1.875rem] before:h-[.125rem] before:w-full before:bg-[#b1bac1] after:h-[.125rem] after:w-full after:bg-[#b1bac1]">
            <Image
              src={LogoDivisor}
              alt="Logo"
            />
          </div>
        </div>
        <ul className="w-full md:order-2 lg:order-none lg:max-w-[31.25rem] grid gap-5 text-right *:py-5 md:*:py-2 lg:*:py-5 *:pr-[1.875rem] md:*:pr-[.75rem] xl:*:pr-[1.875rem] *:relative *:rounded-[1.875rem] *:border-[.0625rem] *:border-lightBrown *:bg-[position:1.25rem_center] md:*:bg-[position:.75rem_center] lg:*:bg-[position:1.25rem_center] *:bg-[size:auto_50%] *:bg-no-repeat">
          <li
            style={{
              backgroundImage: "url('/footer/golden-wpp-icon.svg')"
            }}
          >
            <a
              className="inline-block w-full"
              href=""
            >
            </a>
          </li>
          <li
            style={{
              backgroundImage: "url('/footer/golden-tel-icon.svg')"
            }}>
            <a
              className="inline-block w-full"
              href="tel:5541997683471"
            >
            </a>
          </li>
          <li
            style={{
              backgroundImage: "url('/footer/golden-email-icon.svg')"
            }}>
            <Link
              className="inline-block lg:text-sm font-light xl:text-base w-full"
              href="/fale-conosco"
            >
              {corretor.email}
            </Link>
          </li>
        </ul>
      </section>
      <section className="bg-[#F3F2EE] py-16">
        <h2 className="font-newsReader text-4xl text-center text-grayAccent mb-10">VEJA ALGUNS IMÓVEIS DISPONÍVEIS PARA COMPRAR</h2>
        <ConsultantCarousel estates={imoveis.nodes} />
        <Link className="block mt-10 text-center text-lg font-light py-2 rounded-[100vmax] w-[min(19.6875rem,100%)] mx-auto bg-buttonGray hover:bg-darkBrown text-white" href={``}>VEJA TODOS</Link>
      </section>
      <section className="relative z-10 bg-white py-[1.875rem]">
        <ConsultantForm />
        <div className="w-lg-container mx-auto flex items-center mt-10 gap-4 mb-[1.875rem] before:h-[.125rem] before:w-full before:bg-[#b1bac1] after:h-[.125rem] after:w-full after:bg-[#b1bac1]">
          <Image
            src={LogoDivisor}
            alt="Logo"
          />
        </div>
      </section>
    </main>
  )
}

export default MemberPage