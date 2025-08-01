import React, { useState } from 'react'
import { Upload, Car, DollarSign, Calendar } from 'lucide-react'

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
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
            <h3 className="text-2xl font-bold mb-2">Your Instant Estimate</h3>
            <div className="text-3xl font-bold text-green-600">
              ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-semibold">Timeline: {estimate.timeline}</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-purple-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
              <span className="font-semibold">Lifetime Warranty Included</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            This is a preliminary estimate. We'll contact you within 2 hours to schedule 
            a detailed inspection and provide a final quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2155550123" className="btn-primary">
              Call Now: (215) 555-0123
            </a>
            <button 
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
              className="btn-secondary"
            >
              Get Another Quote
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Make *
            </label>
            <input
              type="text"
              name="carMake"
              required
              placeholder="e.g., Toyota"
              value={formData.carMake}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Model *
            </label>
            <input
              type="text"
              name="carModel"
              required
              placeholder="e.g., Camry"
              value={formData.carModel}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe the Damage *
          </label>
          <textarea
            name="damageDescription"
            required
            rows="4"
            placeholder="Please describe the damage in detail (e.g., front bumper scratched, driver side door dented, etc.)"
            value={formData.damageDescription}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Photos (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 mb-2">Upload photos of the damage for a more accurate estimate</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="btn-secondary cursor-pointer">
              Choose Files
            </label>
            {formData.images.length > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                {formData.images.length} file(s) selected
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Generating Estimate...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Car className="h-5 w-5 mr-2" />
              Get Free Instant Estimate
            </span>
          )}
        </button>
      </form>
    </div>
  )
}

export default QuoteForm
