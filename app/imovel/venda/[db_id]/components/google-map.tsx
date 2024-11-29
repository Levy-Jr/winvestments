"use client"

import { APIProvider, Map } from "@vis.gl/react-google-maps"
import Image from "next/image";
import GoldenMarkIcon from "@/public/estates/golden-map-mark-icon.svg";
import { useState } from "react";

const GoogleMap = ({ position }: { position: { lat: number; lng: number } }) => {
  const [showMap, setShowMap] = useState(false)

  return (
    <>
      {!showMap ? (
        <button
          onClick={() => setShowMap(true)}
          className="relative bg-white rounded-[.625rem] w-full h-full grid place-content-center bg-no-repeat bg-cover bg-center text-center before:absolute before:inset-0 before:-z-10 before:-m-[.125rem] before:rounded-[inherit] before:bg-gradient-to-r before:from-lightBrown before:to-darkBrown"
          style={{
            backgroundImage: `url(/estates/location-bg.webp)`
          }}
        >
          <Image
            className="mx-auto"
            src={GoldenMarkIcon}
            alt="Marcador de localização"
          />
          <p className="text-[2rem] font-newsReader mb-10">LOCALIZAÇÃO</p>
          <p className="text-lg">Para ter acesso a localização exata do imóvel,<br /> entre em contato com a nossa equipe.</p>
        </button>) : null}
      {showMap ? (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string}>
          <Map
            defaultZoom={10}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_MAP_ID as string}
          >
          </Map>
        </APIProvider>
      ) : null}
    </>
  )
}

export default GoogleMap