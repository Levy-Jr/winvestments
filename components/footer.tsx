import Image from "next/image"
import CompleteLogo from "@/public/complete-logo.webp"

import GoldenWppIcon from "@/public/footer/golden-wpp-icon.svg"
import GoldenTelIcon from "@/public/footer/golden-tel-icon.svg"

import GoldenEmailIcon from "@/public/footer/golden-email-icon.svg"

import GoldenInstagramIcon from "@/public/footer/golden-instagram-icon.svg"
import GoldenFacebookIcon from "@/public/footer/golden-facebook-icon.svg"
import GoldenYTIcon from "@/public/footer/golden-yt-icon.svg"

import GoldenLocalIcon from "@/public/footer/golden-local-icon.svg"

import PromentorLogo from "@/public/footer/promentor-logo.svg"

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] relative before:absolute before:top-0 before:left-0 before:block before:w-full before:h-[.125rem] before:bg-gradient-to-r before:from-[#A38243] before:to-[#D2C29E] text-grayAccent pt-[4.0625rem]">
      <div className="w-lg-container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-3 mb-[3.4375rem]">
          <div>
            <Image
              className="mx-auto lg:mx-0"
              src={CompleteLogo}
              alt="Logo da W Investments"
            />
          </div>
          <div className="mt-[1.875rem] lg:mt-0">
            <ul className="flex flex-col items-center lg:items-stretch gap-7 lg:gap-4">
              <li>
                <button className="inline-flex flex-col lg:flex-row items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-[1.5625rem]">
                      <Image
                        src={GoldenWppIcon}
                        alt="Ícone dourado do Whatsapp"
                      />
                    </div>
                    <div className="w-[1.5625rem]">
                      <Image
                        src={GoldenTelIcon}
                        alt="Ícone dourado de um telefone"
                      />
                    </div>
                  </div>
                  (41) 99184-5430
                </button>
              </li>
              <li>
                <a
                  className="inline-flex flex-col lg:flex-row items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:contato@winvestments.com.br"
                >
                  <div className="w-[1.5625rem]">
                    <Image
                      src={GoldenEmailIcon}
                      alt="Ícone dourado do email"
                    />
                  </div>
                  contato@winvestments.com.br
                </a>
              </li>
              <li>
                <p className="text-[.75rem] mb-2 text-center lg:text-start">REDES SOCIAIS</p>
                <ul className="flex items-center gap-9">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://instagram.com/winvestments">
                      <Image
                        src={GoldenInstagramIcon}
                        alt="Ícone dourado do Instagram"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://facebook.com/winvestments">
                      <Image
                        src={GoldenFacebookIcon}
                        alt="Ícone dourado do Facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/channel/UCSpOKlQEQPN9pK_VVI1TWhw">
                      <Image
                        src={GoldenYTIcon}
                        alt="Ícone dourado do Youtube"
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="grid place-content-center lg:place-content-between pt-10 lg:pt-0 mt-10 lg:mt-0 border-t-[.0625rem] lg:border-t-0 border-[#D7D7D7] lg:border-0 text-center lg:text-start *:flex *:flex-col *:items-center lg:*:flex-row gap-8 lg:*:gap-2">
            <li>
              <div>
                <Image
                  src={GoldenLocalIcon}
                  alt="Ícone dourado que indica uma localização"
                />
              </div>
              <div>
                <p>Shopping Pátio Batel</p>
                <p>Avenida do Batel, 1868 - Lj. 330 - Piso L3 - Batel - Curitiba/PR</p>
              </div>
            </li>
            <li>
              <div>
                <Image
                  src={GoldenLocalIcon}
                  alt="Ícone dourado que indica uma localização"
                />
              </div>
              <div>
                <p>Escritório</p>
                <p>Avenida Iguaçu, 2820 - Cj. 1602 - Água Verde - Curitiba/PR</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-5 pb-[5rem] flex flex-col gap-4 lg:gap-0 lg:flex-row items-center lg:items-start text-center lg:text-start text-[.75rem] justify-between border-t-[.0625rem] border-t-[#CCCCCC]">
          <p>Creci: 5589J - W INVESTMENTS ASSESSORIA IMOBILIARIA LTDA - CNPJ: 22.206.054/0001-40</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://promentor.com.br">
            <Image
              src={PromentorLogo}
              alt="Logo da ProMentor, site para imobiliárias"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer