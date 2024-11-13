import CompleteLogo from "@/public/complete-logo.webp"
import Image from "next/image"

import GoldenWppIcon from "@/public/footer/golden-wpp-icon.svg"
import GoldenTelIcon from "@/public/footer/golden-tel-icon.svg"
import GoldenEmailIcon from "@/public/footer/golden-email-icon.svg"

import AdvertiseIcon from "@/public/whoAreWe/advertise-icon.svg"
import AgentIcon from "@/public/whoAreWe/agent-icon.svg"
import ContactBalloonIcon from "@/public/whoAreWe/contact-balloon-icon.svg"
import GoldenLogoIcon from "@/public/whoAreWe/golden-logo-icon.svg"
import KeyIcon from "@/public/whoAreWe/key-icon.svg"
import LaunchIcon from "@/public/whoAreWe/launch-icon.svg"
import OrderIcon from "@/public/whoAreWe/order-icon.svg"
import ReadyIcon from "@/public/whoAreWe/ready-icon.svg"
import WTalkIcon from "@/public/whoAreWe/wtalk-icon.svg"
import Link from "next/link"

const WhoAreWeSection = () => {
  const navLinks = [
    {
      img: LaunchIcon,
      href: "/lancamentos",
      label: "LANÇAMENTOS"
    },
    {
      img: ReadyIcon,
      href: "/imoveis/venda",
      label: "IMÓVEIS PRONTOS"
    },
    {
      img: KeyIcon,
      href: "/imoveis/locacao",
      label: "LOCAÇÃO"

    },
    {
      img: OrderIcon,
      href: "/encomende-um-imovel",
      label: "ENCOMENDE UM IMÓVEL"
    },
    {
      img: AdvertiseIcon,
      href: "/anuncie",
      label: "ANUNCIE NO SITE"
    },
    {
      img: AgentIcon,
      href: "/nossos-consultores",
      label: "NOSSOS CONSULTORES"
    },
    {
      img: WTalkIcon,
      href: "https://open.spotify.com/show/2XFe9Cf5sPDdPdEI3wdpDa",
      label: "PODCAST"
    },
    {
      img: ContactBalloonIcon,
      href: "/fale-conosco",
      label: "CONTATO"
    },
    {
      img: GoldenLogoIcon,
      href: "/sobre-nos",
      label: "SOBRE NÓS"
    },
  ]

  return (
    <section
      className="pt-96 pb-12 md:py-[3.125rem] text-grayAccent bg-no-repeat bg-[position:left_3.125rem;] bg-[size:21.875rem_auto] md:bg-[size:35%]"
      style={{
        backgroundImage: "url('/whoAreWe/who-are-we-bg.webp')"
      }}
    >
      <div className="w-container mx-auto">
        <div className="mx-auto max-w-[30rem] md:max-w-none md:w-[77%] lg:w-[70%] md:mx-0 md:ml-auto text-center md:text-start">
          <div className="grid place-items-center gap-8 mb-12">
            <h2 className="font-newsReader text-4xl">QUEM SOMOS</h2>
            <Image
              src={CompleteLogo}
              alt="Logo da W Investments"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 leading-[1.2] *:flex-1">
            <div>
              <h3 className="font-newsReader text-2xl mb-[1.875rem] leading-[1]">Autoridade e Influência<br /> no Mercado Imobiliário</h3>
              <p className="mb-5">Somos uma assessoria imobiliária de alto padrão que, há quase 10 anos, trabalha para que você encontre o novo lar dos seus sonhos. Estamos localizados em Curitiba e somos parceiros de grandes construtoras e estamos por dentro de vários lançamentos e dos principais bairros da cidade.</p>
              <p>Prestamos uma consultoria especializada e contamos com uma equipe formada por profissionais qualificados e experientes no setor.</p>
            </div>
            <ul className="grid content-center xl:content-between gap-5 text-right *:bg-white *:py-5 md:*:py-2 lg:*:py-5 *:pr-[1.875rem] md:*:pr-[.75rem] lg:*:pr-[1.875rem] *:relative *:rounded-[1.875rem] *:before:absolute *:before:-inset-[.0625rem] *:before:bg-gradient-to-r *:before:rounded-[1.875rem] *:before:from-[#D2C29E] *:before:-z-10 *:before:to-[#A38243] *:bg-[position:1.25rem_center] md:*:bg-[position:.75rem_center] lg:*:bg-[position:1.25rem_center] *:bg-[size:auto_50%] *:bg-no-repeat">
              <li
                style={{
                  backgroundImage: "url('/footer/golden-wpp-icon.svg')"
                }}
              >
                <a
                  className="inline-block w-full"
                  href="https://wa.me/5541991845430?text=[Chat%20atrav%C3%A9s%20do%20site]%20Ol%C3%A1,%20tenho%20uma%20d%C3%BAvida,%20poderia%20me%20ajudar?"
                >
                  CONVERSAR NO WHATSAPP
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
                  LIGAR AGORA
                </a>
              </li>
              <li
                style={{
                  backgroundImage: "url('/footer/golden-email-icon.svg')"
                }}>
                <Link
                  className="inline-block w-full"
                  href="/fale-conosco"
                >
                  ENVIAR UM E-MAIL
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="mt-[5.625rem] mb-[3.125rem] flex flex-col md:flex-wrap md:flex-row justify-between gap-4 md:gap-2 items-center text-[.625rem]">
          {navLinks.map((navLink, index) => (
            <li
              className=""
              key={index}
            >
              <Link
                className="grid place-items-center"
                href={navLink.href}
              >
                <div className="w-20 relative bg-white aspect-square grid place-items-center mb-5 rounded-full before:absolute before:-inset-[.0625rem] before:-z-10 before:p-1 before:rounded-full before:bg-gradient-to-r before:from-[#D2C29E] before:to-[#A38243]">
                  <Image
                    className="max-w-[60%] h-[45%] mx-auto"
                    src={navLink.img}
                    alt={navLink.label}
                  />
                </div>
                <span className="">{navLink.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhoAreWeSection