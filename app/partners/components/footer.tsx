import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-[#333333] text-white py-8">
      <footer className="w-container mx-auto grid place-content-center">
        <nav>
          <ul className="flex justify-center gap-4 items-center">
            <li>
              <Link href={""}>PROCURAR IMÓVEIS</Link>
            </li>
            <li>
              <Link href={""}>SOBRE</Link>
            </li>
            <li>
              <Link href={""}>CONTATO</Link>
            </li>
          </ul>
        </nav>
        <p className="mx-auto my-6">PARTNERS</p>
        {/* <Image
          src={""}
          alt=""
        /> */}
        {/* substituir dinamicamente nome do partner */}
        <p className="text-center text-4xl mb-4">Joana Martins</p>
        <ul className="flex flex-col items-center md:flex-row gap-3">
          <li>@joanamartins</li>
          <li>(41) 99999-9999</li>
          <li>joanamartins@wpartners.com.br</li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer