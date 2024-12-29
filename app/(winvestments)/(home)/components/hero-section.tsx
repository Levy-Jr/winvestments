"use client"

import HeroCarousel from "./hero-carousel"

const HeroSection = () => {
  const banners = [
    {
      href: "https://destaques.winvestments.com.br/angariacoes",
      mobileBgImg: "/banners/curitiba-banner-mobile.webp",
      bgImg: "/banners/curitiba-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/jardins-artefacto-by-swell",
      mobileBgImg: "/banners/artefacto-banner-mobile.webp",
      bgImg: "/banners/artefacto-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/caieiras-55",
      mobileBgImg: "/banners/caieiras-banner-mobile.webp",
      bgImg: "/banners/caieiras-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/casa-nomaa",
      mobileBgImg: "/banners/casa-nomaa-banner-mobile.webp",
      bgImg: "/banners/casa-nomaa-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/empreendimentos-cima",
      mobileBgImg: "/banners/cima-banner-mobile.webp",
      bgImg: "/banners/cima-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/elysium",
      mobileBgImg: "/banners/elysium-banner-mobile.webp",
      bgImg: "/banners/elysium-banner.webp",
    },
    {
      href: "/",
      mobileBgImg: "/banners/undertaking-banner-mobile.webp",
      bgImg: "/banners/undertaking-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/kaa-laguna",
      mobileBgImg: "/banners/kaa-banner-mobile.webp",
      bgImg: "/banners/kaa-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/icaro-casa-terrea",
      mobileBgImg: "/banners/icaro-banner-mobile.webp",
      bgImg: "/banners/icaro-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/the-pineyards",
      mobileBgImg: "/banners/pineyards-banner-mobile.webp",
      bgImg: "/banners/pineyards-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/casamia",
      mobileBgImg: "/banners/casamia-banner-mobile.webp",
      bgImg: "/banners/casamia-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/empreendimentos-bouw",
      mobileBgImg: "/banners/bouw-banner-mobile.webp",
      bgImg: "/banners/bouw-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/trevi",
      mobileBgImg: "/banners/trevi-banner-mobile.webp",
      bgImg: "/banners/trevi-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/reserva-barigui-mirante-colina",
      mobileBgImg: "/banners/reserva-banner-mobile.webp",
      bgImg: "/banners/reserva-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/prontos",
      mobileBgImg: "/banners/high-standard-banner-mobile.webp",
      bgImg: "/banners/high-standard-banner.webp",
    },
    {
      href: "https://destaques.winvestments.com.br/amira-cabral",
      mobileBgImg: "/banners/amira-banner-mobile.webp",
      bgImg: "/banners/amira-banner.webp",
    },
  ]

  return (
    <section className="min-h-[100svh]">
      <h1 className="sr-only">Asessoria Imobiliária W Investments</h1>
      <HeroCarousel banners={banners} />
    </section>
  )
}

export default HeroSection