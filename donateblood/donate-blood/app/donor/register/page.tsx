'use client'
import { useState } from 'react'

type FormData = {
  // Personal Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  // Physical Information
  height: string;
  weight: string;
  bloodType: string;
  // Medical History
  hasTB: boolean;
  hasHepatitis: boolean;
  hasHIV: boolean;
  hasDiabetes: boolean;
  hasBP: boolean;
  hasHeartDisease: boolean;
  isOnMedication: boolean;
  medications: string;
  allergies: string;
  // Donation History
  hasDonatedBefore: boolean;
  lastDonationDate: string;
  donationFrequency: string;
  anyReactions: boolean;
  reactionDetails: string;
}

type FormDataKey = keyof FormData;

export default function DonorRegistration() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',

    // Physical Information
    height: '',
    weight: '',
    bloodType: '',
    
    // Medical History
    hasTB: false,
    hasHepatitis: false,
    hasHIV: false,
    hasDiabetes: false,
    hasBP: false,
    hasHeartDisease: false,
    isOnMedication: false,
    medications: '',
    allergies: '',
    
    // Donation History
    hasDonatedBefore: false,
    lastDonationDate: '',
    donationFrequency: '',
    anyReactions: false,
    reactionDetails: ''
  })

  const [showModal, setShowModal] = useState(false)

  const renderPersonalDetails = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="p-2 border rounded focus:ring-2 focus:ring-red-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className="p-2 border rounded focus:ring-2 focus:ring-red-500"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={formData.dateOfBirth}
        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
      />
      <select
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <textarea
        placeholder="Address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
        rows={3}
      />
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="p-2 border rounded focus:ring-2 focus:ring-red-500"
        />
        <input
          type="text"
          placeholder="State"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className="p-2 border rounded focus:ring-2 focus:ring-red-500"
        />
      </div>
      <input
        type="text"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
      />
    </div>
  )

  const renderPhysicalInfo = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Physical Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
          className="p-2 border rounded focus:ring-2 focus:ring-red-500"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
          className="p-2 border rounded focus:ring-2 focus:ring-red-500"
        />
      </div>
      <select
        value={formData.bloodType}
        onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
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
  )

  const renderMedicalHistory = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Medical History</h2>
      <div className="space-y-4">
        {[
          { key: 'hasTB' as FormDataKey, label: 'Have you ever had Tuberculosis?' },
          { key: 'hasHepatitis', label: 'Have you ever had Hepatitis?' },
          { key: 'hasHIV', label: 'Have you ever been tested positive for HIV?' },
          { key: 'hasDiabetes', label: 'Do you have Diabetes?' },
          { key: 'hasBP', label: 'Do you have Blood Pressure issues?' },
          { key: 'hasHeartDisease', label: 'Do you have any Heart Disease?' },
          { key: 'isOnMedication', label: 'Are you currently on any medication?' },
        ].map((condition) => (
          <div key={condition.key.toString()} className="flex items-center justify-between">
            <label>{condition.label}</label>
            <select
              value={String(formData[condition.key as FormDataKey])}
              onChange={(e) => setFormData({ ...formData, [condition.key]: e.target.value === 'true' })}
              className="p-2 border rounded focus:ring-2 focus:ring-red-500"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
        ))}
      </div>
      {formData.isOnMedication && (
        <textarea
          placeholder="Please list your current medications"
          value={formData.medications}
          onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
          className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
          rows={3}
        />
      )}
      <textarea
        placeholder="Do you have any allergies? If yes, please list them"
        value={formData.allergies}
        onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
        rows={3}
      />
    </div>
  )

  const renderDonationHistory = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Donation History</h2>
      <div className="flex items-center justify-between">
        <label>Have you donated blood before?</label>
        <select
          value={formData.hasDonatedBefore.toString()}
          onChange={(e) => setFormData({ ...formData, hasDonatedBefore: e.target.value === 'true' })}
          className="p-2 border rounded focus:ring-2 focus:ring-red-500"
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>
      
      {formData.hasDonatedBefore && (
        <>
          <input
            type="date"
            placeholder="Last Donation Date"
            value={formData.lastDonationDate}
            onChange={(e) => setFormData({ ...formData, lastDonationDate: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
          />
          <select
            value={formData.donationFrequency}
            onChange={(e) => setFormData({ ...formData, donationFrequency: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
          >
            <option value="">How often do you donate?</option>
            <option value="regular">Regular (Every 3-4 months)</option>
            <option value="occasional">Occasional (Once a year)</option>
            <option value="rare">Rarely (Less than once a year)</option>
          </select>
          
          <div className="flex items-center justify-between">
            <label>Any adverse reactions during previous donations?</label>
            <select
              value={formData.anyReactions.toString()}
              onChange={(e) => setFormData({ ...formData, anyReactions: e.target.value === 'true' })}
              className="p-2 border rounded focus:ring-2 focus:ring-red-500"
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          
          {formData.anyReactions && (
            <textarea
              placeholder="Please describe the reactions you experienced"
              value={formData.reactionDetails}
              onChange={(e) => setFormData({ ...formData, reactionDetails: e.target.value })}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500"
              rows={3}
            />
          )}
        </>
      )}
    </div>
  )

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === index + 1 ? 'bg-red-600 text-white' : 'bg-gray-200'
          }`}>
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div className="w-16 h-1 bg-gray-200"></div>
          )}
        </div>
      ))}
    </div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalDetails()
      case 2:
        return renderPhysicalInfo()
      case 3:
        return renderMedicalHistory()
      case 4:
        return renderDonationHistory()
      default:
        return null
    }
  }

  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-center mb-4">Registration Successful!</h2>
        <p className="text-center mb-6">Your donor registration has been completed successfully.</p>
        <div className="space-y-3">
          <button
            onClick={() => window.location.href = '/donor/edit'}
            className="w-full px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Click here to edit your information
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="w-full px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Click here to exit
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">Donor Registration</h1>
        {renderStepIndicator()}
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          {renderCurrentStep()}
          
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Previous
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 ml-auto"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      {showModal && <SuccessModal />}
    </div>
  )
} 