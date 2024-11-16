'use client'

import { useState } from 'react'
import Map from './Map'
import { useRouter } from 'next/navigation'

export default function NeedBloodPage() {
  const router = useRouter()
  const [showMap, setShowMap] = useState(false)
  const defaultCenter: [number, number] = [0, 0]

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-6 pt-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Need Blood?
          </h1>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="bloodType" className="text-sm font-medium text-gray-700">
                Select Blood Type Required
              </label>
              <select 
                id="bloodType" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                required
              >
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

            <div className="space-y-2">
              <label htmlFor="units" className="text-sm font-medium text-gray-700">
                Units Required
              </label>
              <input 
                type="number" 
                id="units" 
                min="1"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="urgency" className="text-sm font-medium text-gray-700">
                Urgency Level
              </label>
              <select 
                id="urgency" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                required
              >
                <option value="">Select Urgency</option>
                <option value="immediate">Immediate</option>
                <option value="urgent">Urgent (Within 24 hours)</option>
                <option value="standard">Standard (2-3 days)</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
            >
              Search for Donors
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Emergency? Call our 24/7 helpline: <br/>
            <a href="tel:+1234567890" className="text-red-600 font-semibold hover:text-red-700">
              +1 (234) 567-890
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}