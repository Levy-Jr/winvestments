"use client"

import { APIProvider, Map } from "@vis.gl/react-google-maps"

const EstatesMap = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string}>
      <Map
        className="h-[40.625rem] rounded-[.625rem] border border-lightBrown overflow-hidden"
        defaultZoom={12}
        defaultCenter={{ lat: -29.6846, lng: -51.1000 }}
        mapId={process.env.NEXT_PUBLIC_MAP_ID as string}
      >
      </Map>
    </APIProvider>
  )
}

export default EstatesMap