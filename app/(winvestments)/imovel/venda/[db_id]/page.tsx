import { Imóvel } from "smart-imob-types";
import EstatePageImgCarousel from "./components/estate-page-img-carousel";
import Image from "next/image";
import SuiteIcon from "@/public/estates/suite-icon.svg"
import DormitoryIcon from "@/public/estates/dormitory-icon.svg"
import VacanciesIcon from "@/public/estates/vacancies-icon.svg"
import PrivateIcon from "@/public/estates/private-area-icon.svg"
import BathroomIcon from "@/public/estates/bathroom-icon.svg"
import GoldenWppIcon from "@/public/footer/golden-wpp-icon.svg"
import GoldenTelIcon from "@/public/footer/golden-tel-icon.svg"
import GoldenEmailIcon from "@/public/footer/golden-email-icon.svg"
import { formatCurrency } from "@/utils/formatters";
import EstatePageForm from "./components/estate-page-form";
import LogoDivisor from "@/public/logo.svg"
import GoogleMap from "./components/google-map";

const getData = async (id: string): Promise<{
  imovel: Imóvel
}> => {
  const uri =
    process.env.BACKEND_API_URI ?? process.env.NEXT_PUBLIC_BACKEND_API_URI;
  const empresa_id: any =
    process.env.EMPRESA_ID ?? process.env.NEXT_PUBLIC_EMPRESA_ID;

  const params = new URLSearchParams({
    empresa_id
  });

  const imovel = await fetch(`${uri}/imoveis/site/${id}?${params.toString()}`);

  return {
    imovel: await imovel.json(),
  };
}

const EstatePage = async (props: {
  params: Promise<{ db_id: string }>
}) => {
  const { db_id } = await props.params
  const { imovel } = await getData(db_id)
  console.log(imovel.db_id)
  const renderVideoContent = (videoUrl: string) => {
    const isYouTube = videoUrl.toLowerCase().includes('youtube.com') || videoUrl.toLowerCase().includes('youtu.be');
    const isVimeo = videoUrl.toLowerCase().includes('vimeo.com');

    if (isYouTube || isVimeo) {

      const getYouTubeEmbedUrl = (originalUrl: string) => {
        try {
          if (originalUrl.includes('watch?v=')) {
            const urlObj = new URL(originalUrl);
            const videoId = urlObj.searchParams.get('v');
            return `https://www.youtube.com/embed/${videoId};`
          }

          if (originalUrl.includes('youtu.be/')) {
            const parts = originalUrl.split('/');
            const videoId = parts[parts.length - 1];
            return `https://www.youtube.com/embed/${videoId};`
          }

          return originalUrl;
        } catch (error) {
          return originalUrl;
        }
      }
      return (
        <iframe
          className="w-full h-[90vh] max-h-[33.75rem] rounded-[1.25rem]"
          title="Vídeo de apresentação"
          src={getYouTubeEmbedUrl(videoUrl)}
          loading="lazy"
          frameBorder="0"
          allowFullScreen
        />
      );
    }
  }

  return (
    <main>
      <div
        className="fixed bg-[top_center] bg-fixed -z-10 inset-0"
        style={{
          backgroundImage: `url('/marble-bg.webp')`
        }}
      />
      <EstatePageImgCarousel
        fotos={imovel.fotos}
      />
      <div className="w-lg-container mx-auto flex flex-col md:flex-row gap-[1.875rem]">
        <div className="md:w-[calc(100%-21.875rem)] lg:w-[calc(100%-31.25rem)]">
          <h1 className="font-newsReader uppercase text-[2rem] mb-10 text-center">{imovel.titulo}</h1>
          <p className="uppercase text-center mb-[.625rem] text-[1.375rem]">
            {imovel.tipo} - {imovel.area_privativa}M² priv - {imovel.suítes} suíte{Number(imovel.suítes) == 1 ? null : "s"} -
            {imovel.vagas ?
              <span> {imovel.vagas} vaga{Number(imovel.vagas) === 1 ? null : "s"} - </span>
              :
              null
            }
            {imovel.cidade.nome}
          </p>
          <p className="text-sm text-center mb-10">Referência {imovel.codigo} {imovel.agenciador ? `- ${imovel.agenciador?.nome}` : null} </p>
          <ul className="relative flex flex-wrap pt-10 gap-10 md:gap-2 justify-center md:justify-around [&_b]:text-xl [&_span]:leading-[1] [&_span]:text-[.75rem] [&_b]:leading-[1] *:grid *:gap-2 *:place-items-center before:absolute before:top-0 before:left-0 before:w-full before:h-[.0625rem] before:bg-gradient-to-r before:from-darkBrown before:to-lightBrown">
            {imovel.suítes ?
              (<li>
                <Image
                  className="max-w-[3.4375rem] max-h-10"
                  src={SuiteIcon}
                  alt="Ícone de suite"
                />
                <b>{imovel.suítes}</b>
                <span>SUÍTES</span>
              </li>) : null
            }
            {imovel.dormitórios &&
              !imovel.não_mostrar_dormítorios ? (
              <li>
                <Image
                  className="max-w-[4.6875rem] max-h-10"
                  src={DormitoryIcon}
                  alt="Ícone de dormitório"
                />
                <b>{imovel.dormitórios}</b>
                <span>QUARTO{`${Number(imovel.dormitórios || 0) > 1 ? "S" : ""}`}</span>
              </li>
            ) : null}
            {imovel.banheiros ?
              (
                <li>
                  <Image
                    className="max-w-[4.6875rem] max-h-10"
                    src={BathroomIcon}
                    alt="Ícone de banheiro"
                  />
                  <b>{imovel.banheiros}</b>
                  <span>BANHEIRO{`${Number(imovel.dormitórios || 0) > 1 ? "S" : ""}`}</span>
                </li>
              ) : null}
            {imovel.vagas ? (
              <li>
                <Image
                  className="max-w-[4.6875rem] max-h-10"
                  src={VacanciesIcon}
                  alt="Ícone de vagas"
                />
                <b>{imovel.vagas}</b>
                <span>VAGAS</span>
              </li>
            ) : null}
            {imovel.area_privativa ? (
              <li>
                <Image
                  className="max-w-[4.0625rem] max-h-10"
                  src={PrivateIcon}
                  alt="Ícone de área privativa"
                />
                <b>{imovel.area_privativa} M²</b>
                <span>PRIVATIVOS</span>
              </li>
            ) : null}
          </ul>
          <div className="flex flex-col md:flex-row items-center md:items-start font-light uppercase text-[.75rem] mt-[3.75rem] justify-between max-w-[40.625rem] mx-auto">
            <p>
              <span>Valor </span>
              <span className="font-normal text-2xl">
                {imovel.preço_venda &&
                  (imovel.venda_exibir_valor_no_site === undefined || imovel.venda_exibir_valor_no_site === true)
                  ?
                  formatCurrency(imovel.preço_venda)
                  : "consulte-nos"
                }
              </span>
            </p>
            <p>
              <span>Condomínio </span>
              <span className="font-normal text-2xl">
                {imovel.preço_condominio ?
                  formatCurrency(imovel.preço_condominio)
                  : "consulte-nos"
                }
              </span>
            </p>
          </div>
          {imovel.video_youtube ? (
            <div className="py-10 bg-white relative before:absolute before:w-screen before:h-full before:bg-white before:top-0 before:left-[-5%]">
              {renderVideoContent(imovel.video_youtube)}
            </div>
          ) : null}
          <div className="mb-[4.375rem]">
            <h2 className="text-center font-newsReader text-[2rem] pt-[3.125rem] mb-10">CONHEÇA MAIS</h2>
            <p>{imovel.descrição}</p>
          </div>
          <div className="mb-[4.6875rem]">
            <h2 className="text-center font-newsReader text-[2rem] mb-10">DETALHES</h2>
            <ul className="flex justify-center flex-wrap text-[.625rem] gap-[.625rem] *:w-40 *:py-4 [&_span]:inline-block [&_span]:mt-[.3125rem] [&_span]:text-sm *:text-center *:bg-white *:rounded-[1.25rem]">
              <li>
                <p>REFERÊNCIA <br /> <span>{imovel.codigo ?? "N/D"}</span></p>
              </li>
              <li>
                <p>TIPO DE USO <br /> <span>{imovel.tipo ?? "N/D"}</span></p>
              </li>
              <li>
                <p>ENDEREÇO <br /> <span>{imovel.rua ?? "N/D"}</span></p>
              </li>
              <li>
                <p>EDIFÍCIO <br /> <span>{imovel.rua ?? "N/D"}</span></p>
              </li>
              <li>
                <p>MUNICÍPIO <br /> <span>{imovel.cidade.nome ?? "N/D"}</span></p>
              </li>
              <li>
                <p>UF <br />
                  <span>
                    {imovel.estado?.nome ?? "N/D"}
                  </span>
                </p>
              </li>
              <li>
                <p>CEP <br /> <span>{imovel.CEP ?? "N/D"}</span></p>
              </li>
              <li>
                <p>ÁREA TERRENO <br /> <span>{imovel.area_terreno ?? "N/D"}</span></p>
              </li>
              <li>
                <p>TIPO <br /> <span>{imovel.tipo ?? "N/D"}</span></p>
              </li>
              <li>
                <p>IPTU <br />
                  <span>{imovel.IPTU ?? "N/D"}</span>
                </p>
              </li>
              <li>
                <p>TIPO DE PORTARIA <br /> <span>{imovel.tipo ?? "N/D"}</span></p>
              </li>
              <li>
                <p>ESTADO DE CONSERVAÇÃO <br /> <span>{imovel.tipo ?? "N/D"}</span></p>
              </li>
              <li>
                <p>CONSERVAÇÃO <br /> <span>{imovel.tipo ?? "N/D"}</span></p>
              </li>
            </ul>
          </div>
          {imovel.caracteristicas.length > 0 ? (
            <div className="mb-[4.6875rem]">
              <h2 className="text-center font-newsReader text-[2rem] mb-10">COMPOSIÇÃO</h2>
              <ul className="flex justify-center flex-wrap mx-auto text-sm *:bg-white *:rounded-[1.25rem] gap-[.625rem] *:px-[.625rem]">
                {imovel.caracteristicas.map((item, index) => (
                  <li className="bg-white px-[.625rem] rounded-[1.25rem]" key={index}>
                    {item.nome}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {imovel.lat && imovel.long ? (
            <div className="mb-[4.6875rem] h-[18.75rem]">
              <GoogleMap position={{ lat: imovel.lat, lng: imovel.long }} />
            </div>
          ) : null}
          <div className="flex flex-col md:flex-row flex-wrap gap-3 xl:gap-20 justify-center mb-[4.6875rem] *:flex *:justify-center md:*:justify-start *:items-center *:py-4 *:font-light *:px-8 *:gap-2 *:rounded-[1.875rem] *:border-[.0625rem] *:border-lightBrown">
            <button>
              <Image src={GoldenWppIcon} alt="Whatsapp" />
              CONVERSAR NO WHATSAPP
            </button>
            <a href={String(imovel.número)}>
              <Image src={GoldenTelIcon} alt="Telefone" />
              LIGAR AGORA
            </a>
            <button>
              <Image src={GoldenEmailIcon} alt="Email" />
              ENVIAR UM E-MAIL
            </button>
          </div>
        </div>
        <div className="md:w-[min(100%,21.875rem)] lg:w-[min(100%,31.25rem)]">
          <div className="sticky mb-10 top-[1.875rem]">
            <EstatePageForm imovel={imovel} />
          </div>
        </div>
      </div>
      <div className="w-lg-container mx-auto mb-[1.875rem] flex items-center gap-4 before:h-[.125rem] before:w-full before:bg-[#b1bac1] after:h-[.125rem] after:w-full after:bg-[#b1bac1]">
        <Image
          src={LogoDivisor}
          alt="Logo"
        />
      </div>
    </main>
  )
}


export default EstatePage