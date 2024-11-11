import Image from "next/image"
import WppIcon from "@/public/wpp-btn.svg"

const WppBtn = () => {
  return (
    <button
      className="fixed z-50 right-[3.125rem] bottom-[5rem] bg-[#07d400] grid place-items-center w-[3.75rem] aspect-square rounded-full"
    >
      <Image
        className="w-1/2"
        src={WppIcon}
        alt="Botão do Whatsapp"
      />
    </button>
  )
}

export default WppBtn