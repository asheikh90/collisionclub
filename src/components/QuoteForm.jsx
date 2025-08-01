import React, { useState } from 'react'
import { Upload, Car, DollarSign, Calendar, Zap, CheckCircle, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carYear: '',
    carMake: '',
    carModel: '',
    damageDescription: '',
    images: []
  })
  
  const [estimate, setEstimate] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData({
      ...formData,
      images: [...formData.images, ...files]
    })
  }

  const generateEstimate = () => {
    // AI-powered estimate logic based on damage description and car details
    const damageKeywords = formData.damageDescription.toLowerCase()
    let baseEstimate = 500
    
    // Damage type multipliers
    if (damageKeywords.includes('bumper')) baseEstimate += 300
    if (damageKeywords.includes('door')) baseEstimate += 400
    if (damageKeywords.includes('fender')) baseEstimate += 350
    if (damageKeywords.includes('hood')) baseEstimate += 450
    if (damageKeywords.includes('paint')) baseEstimate += 200
    if (damageKeywords.includes('dent')) baseEstimate += 150
    if (damageKeywords.includes('scratch')) baseEstimate += 100
    
    // Car age factor
    const currentYear = new Date().getFullYear()
    const carAge = currentYear - parseInt(formData.carYear)
    if (carAge > 10) baseEstimate *= 0.8
    if (carAge < 3) baseEstimate *= 1.2
    
    // Luxury car factor
    const luxuryBrands = ['bmw', 'mercedes', 'audi', 'lexus', 'acura', 'infiniti']
    if (luxuryBrands.includes(formData.carMake.toLowerCase())) {
      baseEstimate *= 1.3
    }
    
    const minEstimate = Math.round(baseEstimate * 0.8)
    const maxEstimate = Math.round(baseEstimate * 1.2)
    
    return {
      min: minEstimate,
      max: maxEstimate,
      timeline: '3-5 business days'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      const estimateData = generateEstimate()
      setEstimate(estimateData)
      setIsSubmitting(false)
      
      // Here you would typically send data to your CRM/backend
      console.log('Quote request:', formData)
      console.log('Generated estimate:', estimateData)
    }, 2000)
  }

  if (estimate) {
    return (
      <motion.div 
        className="glass-card p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div 
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl mb-6 relative overflow-hidden"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <CheckCircle className="h-12 w-12 mx-auto mb-3" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Your AI-Powered Estimate</h3>
            <motion.div 
              className="text-4xl font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <motion.div 
              className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <span className="font-semibold text-blue-800 dark:text-blue-300">Timeline: {estimate.timeline}</span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border border-purple-200 dark:border-purple-800"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
              <span className="font-semibold text-purple-800 dark:text-purple-300">Lifetime Warranty Included</span>
            </motion.div>
          </div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            This is a preliminary estimate. We'll contact you within 2 hours to schedule 
            a detailed inspection and provide a final quote.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a 
              href="tel:2155550123" 
              className="btn-primary inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (215) 555-0123
            </motion.a>
            <motion.button 
              onClick={() => {
                setEstimate(null)
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  carYear: '',
                  carMake: '',
                  carModel: '',
                  damageDescription: '',
                  images: []
                })
              }}
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Another Quote
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="glass-card p-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="text-center mb-8"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
          <Zap className="h-4 w-4 mr-2" />
          AI-Powered Instant Quotes
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get Your Free Estimate</h3>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="input-field"
              placeholder="(215) 555-0123"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
            placeholder="your.email@example.com"
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Year *
            </label>
            <input
              type="number"
              name="carYear"
              required
              min="1990"
              max="2024"
              value={formData.carYear}
              onChange={handleInputChange}
              className="input-field"
              placeholder="2020"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Make *
            </label>
            <input
              type="text"
              name="carMake"
              required
              placeholder="Toyota"
              value={formData.carMake}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Model *
            </label>
            <input
              type="text"
              name="carModel"
              required
              placeholder="Camry"
              value={formData.carModel}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Describe the Damage *
          </label>
          <textarea
            name="damageDescription"
            required
            rows="4"
            placeholder="Please describe the damage in detail (e.g., front bumper scratched, driver side door dented, etc.)"
            value={formData.damageDescription}
            onChange={handleInputChange}
            className="input-field resize-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Upload Photos (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-xl p-8 text-center bg-gray-50 dark:bg-dark-800/50 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-300">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Upload className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">Upload photos of the damage</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">For a more accurate AI-powered estimate</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="btn-secondary cursor-pointer inline-block">
                Choose Files
              </label>
              <AnimatePresence>
                {formData.images.length > 0 && (
                  <motion.p 
                    className="text-sm text-primary-600 dark:text-primary-400 mt-3 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    ✓ {formData.images.length} file(s) selected
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.span 
                key="loading"
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div 
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Generating AI Estimate...
              </motion.span>
            ) : (
              <motion.span 
                key="submit"
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Car className="h-5 w-5 mr-2" />
                Get Free AI-Powered Estimate
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </form>
    </motion.div>
  )
}

export default QuoteForm
