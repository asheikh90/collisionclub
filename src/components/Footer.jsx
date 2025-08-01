import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">CC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Collision Club</h3>
                <p className="text-gray-400 text-sm">Auto Body Shop</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Philadelphia's trusted auto body repair shop serving Manayunk, Roxborough, and East Falls since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/collision-repair" className="hover:text-white">Collision Repair</Link></li>
              <li><Link to="/services/auto-painting" className="hover:text-white">Auto Painting</Link></li>
              <li><Link to="/services/bumper-repair" className="hover:text-white">Bumper Repair</Link></li>
              <li><Link to="/services/fleet-repair" className="hover:text-white">Fleet Repair</Link></li>
              <li><Link to="/services/dent-removal" className="hover:text-white">Dent Removal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:2155550123" className="hover:text-white">(215) 555-0123</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@autobodyshopphiladelphia.com" className="hover:text-white">
                  info@autobodyshopphiladelphia.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <div>
                  <p>123 Main Street</p>
                  <p>Philadelphia, PA 19128</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Collision Club Auto Body Shop. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
