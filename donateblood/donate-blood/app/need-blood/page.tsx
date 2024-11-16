// This is a server component
'use client'

export default function NeedBloodPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Need Blood</h1>
      <form className="space-y-4">
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