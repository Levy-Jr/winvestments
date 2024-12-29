"use client"

import Image from "next/image"
import GoldenFacebookIcon from "@/public/footer/golden-facebook-icon.svg"
import GoldenWppIcon from "@/public/footer/golden-wpp-icon.svg"
import { Imóvel } from "smart-imob-types"

const EstatePageForm = ({ imovel }: { imovel: Imóvel }) => {
  return (
    <form className="relative bg-white rounded-[.625rem] before:absolute before:inset-0 before:-z-10 before:-m-[.125rem] before:rounded-[inherit] before:bg-gradient-to-r before:from-lightBrown before:to-darkBrown">
      <div className="p-[.625rem]">
        <h2 className="mb-5 text-[1.75rem] font-newsReader text-center">QUERO MAIS INFORMAÇÕES</h2>
        <div className="grid text-sm gap-[.625rem] [&>input]:pl-3 [&>input]:rounded-[100vmax] *:outline-none [&>input]:py-2 *:border-[.0625rem] *:border-[#F2F2F2]">
          <input placeholder="Nome" />
          <input placeholder="E-mail" />
          <input placeholder="Telefone" />
          <textarea
            className="rounded-[1.875rem] min-h-[6.25rem] px-3 pt-3 pb-5 resize-none"
            defaultValue={`Gostaria de receber mais informações sobre o imóvel ${imovel.codigo}`}
          >
          </textarea>
        </div>
        <div className="text-center mt-2">
          <p>Prefiro contato via:</p>
          <div className="flex items-center mt-2 gap-5 justify-center">
            <label>
              <input type="radio" name="contact" /> <span>WhatsApp</span>
            </label>
            <label>
              <input type="radio" defaultChecked name="contact" /> <span>E-mail</span>
            </label>
            <label>
              <input type="radio" name="contact" /> <span>Telefone</span>
            </label>
          </div>
        </div>
        <div className="my-[1.25rem]">
          <button className="bg-[#95a3ab] hover:bg-lightBrown py-2 text-lg block w-[min(100%,15.625rem)] text-center mx-auto text-white rounded-[100vmax]">ENVIAR</button>
        </div>
      </div>
      <div className="relative flex justify-between p-[.9375rem] before:absolute before:top-0 before:left-0 before:w-full before:h-[.0625rem] before:bg-gradient-to-r before:from-darkBrown before:to-lightBrown">
        <p className="text-lg">COMPARTILHE ESTE IMÓVEL</p>
        <div className="flex justify-around mx-auto items-center gap-4">
          <Image
            src={GoldenWppIcon}
            alt="Whatsapp"
          />
          <Image
            src={GoldenFacebookIcon}
            alt="Facebook"
          />
        </div>
      </div>
    </form>
  )
}

export default EstatePageForm