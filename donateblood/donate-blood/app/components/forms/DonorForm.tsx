'use client'

import { useState } from 'react'

interface DonorFormProps {
  onSuccess?: () => void
}

export default function DonorForm({ onSuccess }: DonorFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bloodType: '',
    phone: '',
    location: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // TODO: Add API integration
      console.log('Form submitted:', formData)
      onSuccess?.()
      // Show success message
      alert('Registration successful!')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Full Name *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Email *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Blood Type *</label>
        <select
          value={formData.bloodType}
          onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
          required
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Phone Number *</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Location *</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
          placeholder="City, State"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
      >
        Register as Donor
      </button>
    </form>
  )
}