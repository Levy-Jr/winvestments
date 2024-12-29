import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {

  return (
    <section className="relative w-container text-white py-6 md:py-0 mx-auto flex flex-col-reverse md:flex-row items-center">
      <div className="flex-1 text-center md:text-start md:pt-12">
        <h1 className="text-6xl">Joana <br /> Martins</h1>
        <h2 className="text-3xl">Corretor associado <br />  W Partners</h2>
        <p className="my-2">(41) 99999-9999 | <Link href={"mailto:"}>joanamartins@wpartners.com.br</Link></p>
        <div className="inline-grid gap-2 *:inline-block *:bg-[#d39864] *:text-lg *:text-white *:px-4 *:py-3">
          <Link className="" href={""}>IMÓVEIS EXCLUSIVOS &gt;</Link>
          <Link className="" href={""}>PROCURAR UM IMÓVEL &gt;</Link>
        </div>
      </div>
      <div className="flex-1 md:pt-12">
        <div className="bg-black w-[min(100%,40.625rem)] ml-auto aspect-square">
          FOTO DO CORRETOR ASSOCIADO***
        </div>
        {/* <Image
          src={}
          alt=""
          fill
            /> */}
      </div>
    </section>
  )
}

export default HeroSection