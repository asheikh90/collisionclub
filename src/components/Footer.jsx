import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
      </div>
      
      <motion.div 
        className="container-max section-padding relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center mb-6">
              <motion.div 
                className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-3 rounded-2xl mr-4 shadow-lg"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-bold text-xl">CC</span>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Collision Club</h3>
                <p className="text-gray-400 text-sm">Auto Body Shop</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Philadelphia's trusted auto body repair shop serving Manayunk, Roxborough, and East Falls since 2010.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="p-3 bg-dark-800 hover:bg-primary-600 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-3 bg-dark-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-xl transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Collision Repair', href: '/services/collision-repair' },
                { name: 'Auto Painting', href: '/services/auto-painting' },
                { name: 'Bumper Repair', href: '/services/bumper-repair' },
                { name: 'Fleet Repair', href: '/services/fleet-repair' },
                { name: 'Dent Removal', href: '/services/dent-removal' }
              ].map((service, index) => (
                <motion.li 
                  key={service.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={service.href} 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-secondary-500 transition-colors"></span>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-dark-800 rounded-lg mr-3 group-hover:bg-primary-600 transition-colors">
                  <Phone className="h-4 w-4 text-primary-400 group-hover:text-white" />
                </div>
                <a href="tel:2155550123" className="text-gray-400 hover:text-white transition-colors">
                  (215) 555-0123
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-dark-800 rounded-lg mr-3 group-hover:bg-primary-600 transition-colors">
                  <Mail className="h-4 w-4 text-primary-400 group-hover:text-white" />
                </div>
                <a href="mailto:info@autobodyshopphiladelphia.com" className="text-gray-400 hover:text-white transition-colors break-all">
                  info@autobodyshopphiladelphia.com
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-start group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-dark-800 rounded-lg mr-3 mt-1 group-hover:bg-primary-600 transition-colors">
                  <MapPin className="h-4 w-4 text-primary-400 group-hover:text-white" />
                </div>
                <div className="text-gray-400">
                  <p>123 Main Street</p>
                  <p>Philadelphia, PA 19128</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="p-2 bg-dark-800 rounded-lg mr-3">
                  <Clock className="h-4 w-4 text-primary-400" />
                </div>
                <div className="text-gray-400 space-y-1">
                  <p className="flex justify-between">
                    <span>Mon-Fri:</span>
                    <span className="text-white ml-2">8:00 AM - 5:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white ml-2">9:00 AM - 3:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-red-400 ml-2">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-dark-700 mt-12 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Collision Club Auto Body Shop. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
