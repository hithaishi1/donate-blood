'use client'

import { useState } from 'react'
import Map from './Map'  // Make sure Map.tsx is in the same directory
import { useRouter } from 'next/navigation'  // Add this import at the top

export default function NeedBloodPage() {
  const router = useRouter()
  const [showMap, setShowMap] = useState(false)
  const defaultCenter: [number, number] = [0, 0]  // Explicitly typed as tuple

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowMap(false)
    window.location.href = '/blood-request'
  }

  if (showMap) {
    return (
      <div key="map-container">
        <Map center={defaultCenter} donors={[]} />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Need Blood</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bloodType" className="block mb-1">Blood Type</label>
          <select id="bloodType" className="w-full p-2 border rounded">
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
          Search for Donors
        </button>
      </form>
    </div>
  )
}