import Image from "next/image"
import LogoDivisor from "@/public/logo.svg"
import FeatureCarousel from "./feature-carousel"

const FeaturesSection = () => {
  const features = [
    {
      href: "https://destaques.winvestments.com.br/angariacoes",
      bgImg: "/oportunities/oportunities-curitiba.webp"
    },
    {
      href: "https://winvestments.com.br/imoveis/prontos",
      bgImg: "/oportunities/oportunities-high-standard.webp"
    },
    {
      href: "https://destaques.winvestments.com.br/zen-bidese",
      bgImg: "/oportunities/oportunities-zen.webp"
    },
  ]

  return (
    <section className="w-container mx-auto mb-12">
      <div className="flex items-center gap-4 before:h-[.125rem] before:w-full before:bg-[#b1bac1] after:h-[.125rem] after:w-full after:bg-[#b1bac1]">
        <Image
          src={LogoDivisor}
          alt="Logo"
        />
      </div>
      <FeatureCarousel features={features} />
    </section>
  )
}

export default FeaturesSection