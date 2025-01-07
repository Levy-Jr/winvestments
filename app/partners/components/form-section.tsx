import Image from "next/image"
import { Corretor } from "smart-imob-types"
import GoldenWppIcon from "@/public/partners/icons/wpp.png"
import GoldenTelIcon from "@/public/partners/icons/tel.png"
import GoldenEmailIcon from "@/public/partners/icons/email.png"
import GoldenInstagramIcon from "@/public/partners/icons/instagram.png"

const FormSection = ({ corretor }: { corretor: Corretor }) => {
  return (
    <section className="mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <h2 className="flex-1 md:max-w-[19ch] text-4xl md:text-6xl md:leading-[1.2]">Para aqueles que buscam a máxima experiência em atendimento, expertise e qualidade em imóveis alto padrão em Curitiba.</h2>
        <div className="flex-1">
          <form className="max-w-[40.625rem] ml-auto bg-[#d39864] px-10 pt-8 pb-8">
            <h2 className="text-3xl">ENTRE EM CONTATO</h2>
            <div className="grid mt-4 gap-4 *:outline-none *:text-xl *:bg-[#e6c5a8] *:placeholder:text-black *:text-black *:px-3 *:py-3">
              <input
                type="text"
                placeholder="NOME*"
                name=""
                id=""
              />
              <input
                type="email"
                placeholder="EMAIL*"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="TELEFONE*"
                name=""
                id=""
              />
              <textarea className="resize-none" rows={5} placeholder="MENSAGEM" name="" id="" ></textarea>
            </div>
            <button className="mt-3 text-2xl tracking-wide bg-[#333333] text-white px-7 py-3">ENVIAR &gt;</button>
          </form>
        </div>
      </div>
      <div className="md:flex gap-14 mt-12 md:mt-16">
        <div className="flex-1">
          {corretor.video_site ? (
            <Image
              className="mx-auto rounded-xl"
              src={corretor.video_site}
              alt={corretor.nome}
              width={450}
              height={450}
            />
          ) : null}

        </div>
        <div id="sobre" className="flex-1 my-auto max-w-[40.625rem] ml-auto">
          <h2 className="text-6xl">Minha história</h2>
          <p className="text-2xl mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque in felis nec massa pharetra facilisis ac
            vitae arcu. Vivamus aliquam volutpat arcu, eget
            hendrerit est convallis a. Nunc id leo eget urna imperdiet
            mollis in ut ante. Fusce ut porttitor nulla. Pellentesque
            interdum odio felis.</p>
          <p className="text-2xl mt-6">Pellentesque laoreet justo a augue lobortis suscipit.
            Integer bibendum fringilla interdum. Nulla vel turpis sit
            amet elit interdum euismod non non velit.
          </p>
        </div>
      </div>
      <ul id="#contato" className="mt-16 flex flex-wrap text-xl gap-10 justify-center items-center [&_li_a]:grid [&_li_a]:place-items-center [&_img]:w-[5rem] [&_li_a]:gap-2">
        {corretor.instagram ? (
          <li>
            <a href={corretor.instagram}>
              <Image
                width={50}
                height={50}
                src={GoldenInstagramIcon}
                alt="Ícone dourado do Instagram"
              />
              Instagram
            </a>
          </li>
        ) : null}
        {corretor.whatsapp ? (
          <li>
            <a href={corretor.whatsapp_link ?? ""}>
              <Image
                src={GoldenWppIcon}
                alt="Ícone dourado do Whatsapp"
              />
              WhatsApp
            </a>
          </li>
        ) : null}
        {corretor.telefone ? (
          <li>
            <a href={`tel:${corretor.telefone}`}>
              <Image
                src={GoldenTelIcon}
                alt="Ícone dourado de um telefone"
              />
              Telefone
            </a>
          </li>
        ) : null}
        {corretor.email ? (
          <li>
            <a href={`mailto:${corretor.email}`}>
              <Image
                src={GoldenEmailIcon}
                alt="Ícone dourado do email"
              />
              Email
            </a>
          </li>
        ) : null}
      </ul>
    </section>
  )
}

export default FormSection