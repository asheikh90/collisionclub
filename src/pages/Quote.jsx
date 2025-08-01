import React from 'react'
import QuoteForm from '../components/QuoteForm'
import { Shield, Clock, Award, Phone } from 'lucide-react'

const Quote = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Your Free Auto Body Repair Estimate
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Upload photos of your damage and get an instant AI-powered estimate. 
            No appointment needed - get your quote in under 2 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2155550123" className="btn-secondary flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call for Immediate Quote: (215) 555-0123
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <QuoteForm />
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Get Your Quote from Collision Club?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Estimates</h3>
              <p className="text-gray-600">
                Our AI-powered system analyzes your damage photos and vehicle details to provide highly accurate estimates.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Get your estimate immediately - no waiting for callbacks or appointments. Know your costs upfront.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Obligation</h3>
              <p className="text-gray-600">
                Our quotes are completely free with no obligation. Compare our prices and quality before deciding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Quote Process Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Photos</h3>
              <p className="text-gray-600">Take photos of your damage from multiple angles</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Vehicle Details</h3>
              <p className="text-gray-600">Provide your car's year, make, model, and damage description</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Estimate</h3>
              <p className="text-gray-600">Our AI analyzes your info and provides an accurate estimate</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Repair</h3>
              <p className="text-gray-600">Book your appointment and get your car fixed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quote
