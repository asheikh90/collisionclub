import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "Collision Repair",
      slug: "collision-repair",
      description: "Complete collision damage restoration using state-of-the-art equipment and techniques. From minor fender benders to major accidents, we restore your vehicle to pre-accident condition.",
      features: ["Frame straightening", "Structural repairs", "Safety system restoration", "Insurance direct billing"],
      image: "/images/collision-repair-service.jpg",
      priceRange: "$800 - $3,500"
    },
    {
      title: "Auto Painting",
      slug: "auto-painting",
      description: "Professional automotive painting using premium Sherwin-Williams paint systems. Color matching technology ensures perfect results every time.",
      features: ["Color matching", "Paint booth technology", "Clear coat protection", "Lifetime paint warranty"],
      image: "/images/auto-painting-service.jpg",
      priceRange: "$400 - $2,000"
    },
    {
      title: "Bumper Repair",
      slug: "bumper-repair",
      description: "Expert bumper repair and replacement services. We repair plastic, fiberglass, and metal bumpers with precision and care.",
      features: ["Plastic welding", "Bumper refinishing", "Sensor recalibration", "Same-day service available"],
      image: "/images/bumper-repair-service.jpg",
      priceRange: "$200 - $800"
    },
    {
      title: "Fleet Repair",
      slug: "fleet-repair",
      description: "Commercial fleet repair services with volume discounts and priority scheduling. Keep your business vehicles on the road.",
      features: ["Volume discounts", "Priority scheduling", "Fleet management", "Detailed reporting"],
      image: "/images/fleet-repair-service.jpg",
      priceRange: "Contact for pricing"
    },
    {
      title: "Dent Removal",
      slug: "dent-removal",
      description: "Paintless dent repair (PDR) and traditional dent removal services. Restore your vehicle's appearance without breaking the bank.",
      features: ["Paintless dent repair", "Hail damage repair", "Door ding removal", "Quick turnaround"],
      image: "/images/dent-removal-service.jpg",
      priceRange: "$100 - $500"
    },
    {
      title: "Glass Replacement",
      slug: "glass-replacement",
      description: "Auto glass repair and replacement services. From windshields to side windows, we use OEM quality glass.",
      features: ["Windshield replacement", "Side window repair", "OEM quality glass", "Insurance approved"],
      image: "/images/glass-replacement-service.jpg",
      priceRange: "$150 - $600"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete Auto Body Services in Philadelphia
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            From collision repair to custom painting, we provide comprehensive auto body services 
            with lifetime warranties and insurance direct billing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={`${service.title} service in Philadelphia`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                    <span className="text-primary-600 font-semibold">{service.priceRange}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={`/services/${service.slug}`}
                      className="btn-primary flex items-center justify-center"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                    <Link 
                      to="/quote"
                      className="btn-secondary flex items-center justify-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Collision Club for Auto Body Repair?
            </h2>
            <p className="text-xl text-gray-600">
              We're Philadelphia's most trusted auto body shop
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive lifetime warranties on all repairs and paint work.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Most repairs completed within 3-5 business days. We understand you need your car back quickly.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                ASE certified technicians with over 15 years of experience in auto body repair and painting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Restore Your Vehicle?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get your free estimate today and see why Philadelphia trusts Collision Club
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="btn-secondary">
              Get Free Estimate
            </Link>
            <a href="tel:2155550123" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Call (215) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
