import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2">
        <div className="container-max flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Serving Manayunk, Roxborough & East Falls</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Mon-Fri: 8AM-5PM | Sat: 9AM-3PM</span>
            <a href="tel:2155550123" className="flex items-center hover:text-secondary-500">
              <Phone className="h-4 w-4 mr-1" />
              (215) 555-0123
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-primary-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">CC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Collision Club</h1>
                <p className="text-sm text-gray-600">Auto Body Shop Philadelphia</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/quote" className="btn-primary">
                Free Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/quote"
                  className="btn-primary inline-block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Quote
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
