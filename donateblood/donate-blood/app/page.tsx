'use client'

import { useRouter } from 'next/navigation'
import { FaHandHoldingHeart, FaHospitalUser } from 'react-icons/fa6'

export default function Home(): JSX.Element {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-12">
          Blood Donation Platform
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button 
            onClick={() => router.push('/donor/register')}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <FaHandHoldingHeart className="text-6xl text-red-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Become a Donor</h2>
              <p className="text-gray-600">Register to donate blood and help save lives</p>
            </div>
          </button>

          <button 
            onClick={() => router.push('/blood-request')}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <FaHospitalUser className="text-6xl text-red-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Need Blood?</h2>
              <p className="text-gray-600">Submit a request for blood donation</p>
            </div>
          </button>
        </div>
      </div>
    </main>
  )
} 