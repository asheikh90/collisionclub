import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, Award, Phone, CheckCircle } from 'lucide-react'

const ServicePages = () => {
  const { service } = useParams()
  
  const serviceData = {
    'collision-repair': {
      title: 'Collision Repair Philadelphia',
      metaTitle: 'Collision Repair Philadelphia | Expert Auto Body Repair | Collision Club',
      description: 'Expert collision repair services in Philadelphia. From minor fender benders to major accidents, we restore your vehicle to pre-accident condition using state-of-the-art equipment.',
      heroImage: '/images/collision-repair-hero.jpg',
      priceRange: '$800 - $3,500',
      timeline: '3-7 business days',
      services: [
        'Frame straightening and alignment',
        'Structural damage repair',
        'Safety system restoration',
        'Airbag system repair',
        'Suspension repair',
        'Engine compartment repair'
      ],
      process: [
        'Comprehensive damage assessment',
        'Insurance claim assistance',
        'Parts ordering and preparation',
        'Structural repairs and alignment',
        'Paint and finishing work',
        'Quality inspection and delivery'
      ],
      faq: [
        {
          question: 'How long does collision repair take?',
          answer: 'Most collision repairs take 3-7 business days depending on the extent of damage and parts availability. We provide accurate timelines after inspection.'
        },
        {
          question: 'Do you work with insurance companies?',
          answer: 'Yes, we work with all major insurance companies and offer direct billing. We can help you navigate the claims process.'
        },
        {
          question: 'Is my car safe to drive after collision repair?',
          answer: 'Absolutely. We restore all safety systems and structural integrity to manufacturer specifications. Every repair comes with our lifetime warranty.'
        }
      ]
    },
    'auto-painting': {
      title: 'Auto Painting Philadelphia',
      metaTitle: 'Auto Painting Philadelphia | Professional Car Paint Jobs | Collision Club',
      description: 'Professional automotive painting services in Philadelphia using premium Sherwin-Williams paint systems. Perfect color matching and lifetime paint warranty.',
      heroImage: '/images/auto-painting-hero.jpg',
      priceRange: '$400 - $2,000',
      timeline: '2-4 business days',
      services: [
        'Complete vehicle repainting',
        'Panel painting and touch-ups',
        'Color matching technology',
        'Clear coat application',
        'Paint protection services',
        'Custom paint jobs'
      ],
      process: [
        'Color matching and preparation',
        'Surface preparation and priming',
        'Base coat application',
        'Color coat application',
        'Clear coat and protection',
        'Final inspection and polishing'
      ],
      faq: [
        {
          question: 'How do you match my car\'s paint color?',
          answer: 'We use advanced color matching technology and Sherwin-Williams paint systems to ensure perfect color matches every time.'
        },
        {
          question: 'How long does paint last?',
          answer: 'Our paint jobs come with a lifetime warranty. With proper care, the paint will last the life of your vehicle.'
        },
        {
          question: 'Can you paint just one panel?',
          answer: 'Yes, we can paint individual panels and blend them seamlessly with the existing paint for invisible repairs.'
        }
      ]
    },
    'bumper-repair': {
      title: 'Bumper Repair Philadelphia',
      metaTitle: 'Bumper Repair Philadelphia | Fast Bumper Fix | Collision Club',
      description: 'Expert bumper repair and replacement in Philadelphia. We repair plastic, fiberglass, and metal bumpers with same-day service available.',
      heroImage: '/images/bumper-repair-hero.jpg',
      priceRange: '$200 - $800',
      timeline: '1-2 business days',
      services: [
        'Plastic bumper repair',
        'Bumper replacement',
        'Bumper refinishing',
        'Sensor recalibration',
        'Chrome bumper repair',
        'Same-day service available'
      ],
      process: [
        'Damage assessment',
        'Removal and preparation',
        'Repair or replacement',
        'Painting and finishing',
        'Sensor recalibration',
        'Installation and testing'
      ],
      faq: [
        {
          question: 'Can you repair plastic bumpers?',
          answer: 'Yes, we specialize in plastic bumper repair using advanced plastic welding techniques. Most plastic bumpers can be repaired rather than replaced.'
        },
        {
          question: 'Do you recalibrate parking sensors?',
          answer: 'Yes, we recalibrate all parking sensors, cameras, and safety systems after bumper repair to ensure proper operation.'
        },
        {
          question: 'How much does bumper repair cost?',
          answer: 'Bumper repair costs range from $200-$800 depending on the extent of damage. Minor scratches and dents are often much less expensive than replacement.'
        }
      ]
    }
  }

  const currentService = serviceData[service]
  
  if (!currentService) {
    return (
      <div className="section-padding">
        <div className="container-max text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {currentService.title}
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                {currentService.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/quote" className="btn-secondary">
                  Get Free Estimate
                </Link>
                <a href="tel:2155550123" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (215) 555-0123
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-primary-800 p-3 rounded">
                  <span className="text-primary-200">Price Range:</span>
                  <div className="font-semibold">{currentService.priceRange}</div>
                </div>
                <div className="bg-primary-800 p-3 rounded">
                  <span className="text-primary-200">Timeline:</span>
                  <div className="font-semibold">{currentService.timeline}</div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={currentService.heroImage} 
                alt={currentService.title}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <div className="space-y-4">
                {currentService.services.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <div className="space-y-4">
                {currentService.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Collision Club?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">
                All our work comes with a comprehensive lifetime warranty for your peace of mind.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising on quality. Most jobs completed within days.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                ASE certified technicians with over 15 years of experience in auto body repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {currentService.faq.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get your free estimate today and experience Philadelphia's best auto body service
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

export default ServicePages
