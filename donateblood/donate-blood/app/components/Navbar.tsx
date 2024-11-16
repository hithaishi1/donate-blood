'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4">
              <span className="font-semibold text-gray-500 text-lg">Blood Donation</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/need-blood"
              className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
            >
              Need Blood
            </Link>
            {/* Other navigation items */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6 text-gray-500 hover:text-red-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col items-start py-2">
            <Link 
              href="/need-blood"
              className="block py-2 px-4 text-sm hover:bg-red-600 hover:text-white rounded transition duration-300"
            >
              Need Blood
            </Link>
            {/* Other mobile menu items */}
          </div>
        </div>
      </div>
    </nav>
  )
} 