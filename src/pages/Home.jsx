import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Shield, Clock, Award, Phone, ArrowRight } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Lifetime Warranty",
      description: "We stand behind our work with comprehensive warranty coverage"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "Most repairs completed within 3-5 business days"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Technicians",
      description: "ASE certified professionals with 15+ years experience"
    }
  ]

  const services = [
    {
      title: "Collision Repair",
      description: "Complete collision damage restoration using advanced techniques",
      image: "/images/collision-repair.jpg",
      link: "/services/collision-repair"
    },
    {
      title: "Auto Painting",
      description: "Professional paint jobs using Sherwin-Williams paint systems",
      image: "/images/auto-painting.jpg", 
      link: "/services/auto-painting"
    },
    {
      title: "Bumper Repair",
      description: "Expert bumper repair and replacement services",
      image: "/images/bumper-repair.jpg",
      link: "/services/bumper-repair"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Philadelphia's #1 Auto Body Shop
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Expert collision repair in Manayunk, Roxborough & East Falls. 
                Free estimates, lifetime warranty, and insurance direct billing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="btn-secondary text-center">
                  Get Free Estimate
                </Link>
                <a href="tel:2155550123" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-center">
                  <Phone className="h-5 w-5 inline mr-2" />
                  Call (215) 555-0123
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-primary-100">4.9/5 (127 reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <img 
                src="/images/hero-car-repair.jpg" 
                alt="Professional auto body repair in Philadelphia"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Collision Club?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've been Philadelphia's trusted auto body shop for over a decade, 
              delivering quality repairs with unmatched customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Auto Body Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete collision repair and auto body services in Philadelphia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Your Free Estimate Today
              </h2>
              <p className="text-xl text-gray-600">
                Upload photos of your damage and get an instant estimate
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving Philadelphia's Auto Body Repair Needs
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Proudly serving these Philadelphia neighborhoods and zip codes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Manayunk (19127)</h3>
              <p className="text-gray-600">
                Full-service auto body repair for Manayunk residents. 
                Convenient location with free pickup and delivery.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Roxborough (19128)</h3>
              <p className="text-gray-600">
                Expert collision repair serving the Roxborough community. 
                Insurance direct billing available.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">East Falls (19129)</h3>
              <p className="text-gray-600">
                Professional auto painting and body work for East Falls. 
                Lifetime warranty on all repairs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
