"use client"

import HeroCarousel from "./hero-carousel"

const HeroSection = () => {
  const banners = [
    {
      href: "https://destaques.winvestments.com.br/angariacoes",
      bgImg: "/banners/curitiba-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/jardins-artefacto-by-swell",
      bgImg: "../../banners/artefacto-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/caieiras-55",
      bgImg: "../../../banners/caieiras-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/casa-nomaa",
      bgImg: "../../../banners/casa-nomaa-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/empreendimentos-cima",
      bgImg: "../../../banners/cima-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/elysium",
      bgImg: "../../../banners/elysium-banner.webp",
    },
    {
      href: "/",
      bgImg: "../../../banners/undertaking-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/kaa-laguna",
      bgImg: "../../../banners/kaa-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/icaro-casa-terrea",
      bgImg: "../../../banners/icaro-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/the-pineyards",
      bgImg: "../../../banners/pineyards-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/casamia",
      bgImg: "../../../banners/casamia-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/empreendimentos-bouw",
      bgImg: "../../../banners/bouw-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/trevi",
      bgImg: "../../../banners/trevi-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/reserva-barigui-mirante-colina",
      bgImg: "../../../banners/reserva-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/prontos",
      bgImg: "../../../banners/high-standard-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/amira-cabral",
      bgImg: "../../../banners/amira-banner.webp",
    },
  ]

  return (
    <section>
      <HeroCarousel banners={banners} />
    </section>
  )
}

export default HeroSection