'use client'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const hospitalIcon = new L.Icon({
  iconUrl: '/hospital-icon.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})

const donorIcon = new L.Icon({
  iconUrl: '/donor-icon.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
})

type MapProps = {
  center: [number, number]
  donors: Array<{
    id: number
    name: string
    location: [number, number]
  }>
}

function MapContent({ center, donors }: MapProps) {
  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      <Marker position={center} icon={hospitalIcon}>
        <Popup>Hospital Location</Popup>
      </Marker>
      
      {donors.map(donor => (
        <Marker 
          key={donor.id} 
          position={donor.location}
          icon={donorIcon}
        >
          <Popup>{donor.name}</Popup>
        </Marker>
      ))}
    </>
  )
}

export default function Map({ center, donors }: MapProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  if (!mounted) {
    return <div className="h-full w-full bg-gray-100" />
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <MapContent center={center} donors={donors} />
      </MapContainer>
    </div>
  )
} 