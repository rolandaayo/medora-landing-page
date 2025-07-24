"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, Heart } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">Medora</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
              Download App
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-emerald-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              Home
            </Link>
            <Link href="/features" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              Features
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">
              Contact
            </Link>
            <button className="w-full text-left px-3 py-2 bg-emerald-600 text-white rounded-lg">Download App</button>
          </div>
        </div>
      )}
    </nav>
  )
}
