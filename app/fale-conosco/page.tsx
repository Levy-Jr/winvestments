import Image from "next/image"
import TelIcon from "@/public/talkToUs/tel-icon.svg"
import WppBtnIcon from "@/public/talkToUs/wpp-btn-icon.svg"
import Form from "./components/fale-conosco-form"

const TalkToUs = () => {
  return (
    <main className="w-lg-container mt-20 mx-auto">
      <div
        className="fixed bg-[top_center] bg-fixed -z-10 inset-0"
        style={{
          backgroundImage: `url('/marble-bg.webp')`
        }}
      />
      <h1 className="font-newsReader text-4xl text-center mb-10 text-grayAccent">FALE COM A W INVESTMENTS</h1>
      <div className="text-white *:py-2 *:rounded-[100vmax] flex flex-col sm:flex-row gap-4 *:w-[15.625rem] w-[min(100%,50rem)] mx-auto text-lg items-center sm:justify-between *:flex *:justify-center *:items-center *:gap-2 *:font-bold">
        <button className="bg-[#95a3ab] hover:bg-darkBrown">
          <Image
            className="w-[1.375rem]"
            src={WppBtnIcon}
            alt="Whatsapp"
          />
          WhatsApp
        </button>
        <a className="bg-[#95a3ab] hover:bg-darkBrown" href="tel:5541997683471">
          <Image
            className="w-[1.375rem]"
            src={TelIcon}
            alt="Telefone"
          />
          Ligar
        </a>
      </div>
      <Form />
    </main>
  )
}

export default TalkToUs