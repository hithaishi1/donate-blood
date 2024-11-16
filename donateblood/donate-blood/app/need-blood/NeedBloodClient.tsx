'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(
  () => import('./Map'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[400px] w-full bg-gray-100 animate-pulse flex items-center justify-center">
        <span>Loading map...</span>
      </div>
    )
  }
)

export default function NeedBloodClient() {
  const [mounted, setMounted] = useState(false)
  const [hospital, setHospital] = useState('')
  const [center] = useState<[number, number]>([28.6139, 77.2090])
  const [donors] = useState([
    {
      id: 1,
      name: "John Doe",
      bloodType: "A+",
      location: [28.6129, 77.2295] as [number, number],
      distance: "1.2 km"
    },
  ])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-gray-50 py-12">Loading...</div>
  }

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
              <MapWithNoSSR center={center} donors={donors} />
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