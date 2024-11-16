'use client'
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Define custom icons
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

type Donor = {
  id: number
  name: string
  bloodType: string
  location: [number, number] // [lat, lng]
  distance: string
}

export default function NeedBlood() {
  const [hospital, setHospital] = useState('')
  const [center] = useState<[number, number]>([28.6139, 77.2090]) // Default to Delhi
  const [donors] = useState<Donor[]>([
    {
      id: 1,
      name: "John Doe",
      bloodType: "A+",
      location: [28.6129, 77.2295],
      distance: "1.2 km"
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">Find Blood Donors</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter hospital location"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500"
            />
            
            <div className="h-[400px] w-full">
              <MapContainer
                center={center}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* Hospital marker */}
                <Marker position={center} icon={hospitalIcon}>
                  <Popup>Hospital Location</Popup>
                </Marker>
                
                {/* Donor markers */}
                {donors.map(donor => (
                  <Marker 
                    key={donor.id} 
                    position={donor.location}
                    icon={donorIcon}
                  >
                    <Popup>{donor.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Nearby Donors</h2>
          <div className="space-y-4">
            {donors.map(donor => (
              <div key={donor.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{donor.name}</h3>
                  <p className="text-gray-600">Blood Type: {donor.bloodType}</p>
                  <p className="text-gray-600">Distance: {donor.distance}</p>
                </div>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  onClick={() => {/* Add contact functionality */}}
                >
                  Contact
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 