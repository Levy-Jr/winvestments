import Image from "next/image"
import Link from "next/link"
import { Corretor } from "smart-imob-types"
import PartnersLogo from "@/public/partners/logo/footer-logo.png"
import GoldenTelIcon from "@/public/partners/icons/tel.png"
import GoldenEmailIcon from "@/public/partners/icons/email.png"
import GoldenInstagramIcon from "@/public/partners/icons/instagram.png"


const Footer = ({ corretor }: { corretor: Corretor }) => {
  return (
    <div className="bg-[#333333] text-white py-8">
      <footer className="w-container mx-auto grid place-content-center">
        <nav>
          <ul className="flex justify-center gap-5 md:gap-11 md:text-lg items-center">
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
          className="mx-auto my-16 md:my-20 w-[18.75rem] md:w-[28.125rem]"
          width={450}
          height={450}
          src={PartnersLogo}
          alt="Parners Logo"
        />
        <p className="font-condensed italic text-center text-3xl md:text-4xl mb-8">{corretor.nome}</p>
        <ul className="flex flex-col md:text-lg md:items-center md:flex-row gap-5 *:flex *:items-center *:gap-2">
          {corretor.instagram ? (
            <li>
              <Image
                width={40}
                height={40}
                src={GoldenInstagramIcon}
                alt="Ícone dourado do Instagram"
              />
              {corretor.instagram}
            </li>
          ) : null}
          {corretor.telefone ? (
            <li>
              <Image
                width={40}
                height={40}
                src={GoldenTelIcon}
                alt="Ícone dourado de um telefone"
              />
              {corretor.telefone}
            </li>
          ) : null}
          {corretor.email ? (
            <li>
              <Image
                width={40}
                height={40}
                src={GoldenEmailIcon}
                alt="Ícone dourado do email"
              />
              {corretor.email}
            </li>
          ) : null}
        </ul>
      </footer>
    </div>
  )
}

export default Footer