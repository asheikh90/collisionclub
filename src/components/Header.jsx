import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'

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
      <motion.div 
        className="bg-gradient-to-r from-primary-700 to-primary-800 dark:from-dark-900 dark:to-dark-800 text-white py-3 relative overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 animate-gradient"></div>
        <div className="container-max flex justify-between items-center text-sm relative z-10">
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary-300" />
              <span className="hidden sm:inline">Serving Manayunk, Roxborough & East Falls</span>
              <span className="sm:hidden">Philadelphia Area</span>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="hidden md:inline">Mon-Fri: 8AM-5PM | Sat: 9AM-3PM</span>
            <a 
              href="tel:2155550123" 
              className="flex items-center hover:text-secondary-400 transition-colors duration-300 font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              (215) 555-0123
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className="glass-card sticky top-0 z-50 border-b border-white/10 dark:border-dark-700/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center group">
                <motion.div 
                  className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-3 rounded-2xl mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <span className="font-bold text-xl">CC</span>
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                    Collision Club
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Auto Body Shop Philadelphia</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item.href}
                    className={`nav-link ${isActive(item.href) ? 'active text-primary-600 dark:text-primary-400' : ''}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <DarkModeToggle />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Link to="/quote" className="btn-primary">
                  Free Quote
                </Link>
              </motion.div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <DarkModeToggle />
              <motion.button
                className="p-2 rounded-xl bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden py-4 border-t border-gray-200 dark:border-dark-700"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        to={item.href}
                        className={`nav-link block ${
                          isActive(item.href)
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      to="/quote"
                      className="btn-primary inline-block text-center w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Free Quote
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  )
}

export default Header
