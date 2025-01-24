"use client"

import { Marker, MarkerClusterer } from "@googlemaps/markerclusterer"
import { AdvancedMarker, APIProvider, InfoWindow, Map, useMap } from "@vis.gl/react-google-maps"
import { useEffect, useRef, useState } from "react"
import { Imóvel } from "smart-imob-types"
import EstateCardMap from "./estate-card-map"

const Markers = ({ imoveis }: { imoveis: Imóvel[] }) => {
  const map = useMap()
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({})
  const clusterer = useRef<MarkerClusterer | null>(null)
  const [selectedEstate, setSelectedEstate] = useState<Imóvel | null>(null)

  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map })
    }
  }, [map])

  useEffect(() => {
    clusterer.current?.clearMarkers()
    clusterer.current?.addMarkers(Object.values(markers))
  }, [markers])

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return
    if (!marker && !markers[key]) return
    setMarkers(prev => {
      if (!marker) {
        const newMarkers = { ...prev }
        delete newMarkers[key]
        return newMarkers
      }
      return { ...prev, [key]: marker }
    })
  }

  const filteredEstates = imoveis.filter(imovel => imovel.lat && imovel.long)

  return (
    <>
      {filteredEstates
        .map(imovel =>
          <AdvancedMarker
            key={imovel.db_id}
            position={{
              lat: imovel.lat!, lng: imovel.long!
            }}
            ref={marker => setMarkerRef(marker, imovel.db_id)}
            onClick={() => setSelectedEstate(selectedEstate === imovel ? null : imovel)}
          >
            <button className="bg-grayAccent text-white px-3 py-1 rounded-sm"
            >{imovel.número}
            </button>
          </AdvancedMarker>
        )
      }
      {selectedEstate && (
        <EstateCardMap
          imovel={selectedEstate}
          onCloseClick={() => setSelectedEstate(null)}
        />
      )}
    </>
  )
}

const EstatesMap = ({ imoveis }: { imoveis: Imóvel[] }) => {

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string}>
      <Map
        className="h-[40.625rem] relative rounded-[.625rem] border border-lightBrown overflow-hidden"
        defaultZoom={13}
        defaultCenter={{ lat: -25.44133540269693, lng: -49.2381654927515 }}
        mapId={process.env.NEXT_PUBLIC_MAP_ID as string}
      >
        <Markers imoveis={imoveis} />
      </Map>
    </APIProvider>
  )
}

export default EstatesMap