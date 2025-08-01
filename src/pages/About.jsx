import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Users, Clock, Shield } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Cars Repaired' },
    { number: '4.9/5', label: 'Customer Rating' },
    { number: '100%', label: 'Satisfaction Rate' }
  ]

  const team = [
    {
      name: 'Mike Rodriguez',
      role: 'Owner & Master Technician',
      experience: '20+ years',
      certifications: 'ASE Master Certified',
      image: '/images/team-mike.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'Paint Specialist',
      experience: '12+ years',
      certifications: 'Sherwin-Williams Certified',
      image: '/images/team-sarah.jpg'
    },
    {
      name: 'Tony Martinez',
      role: 'Collision Repair Expert',
      experience: '15+ years',
      certifications: 'I-CAR Certified',
      image: '/images/team-tony.jpg'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Philadelphia's Most Trusted Auto Body Shop
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                For over 15 years, Collision Club has been serving the Philadelphia community 
                with expert auto body repair, collision services, and custom painting. 
                We're not just a business - we're your neighbors.
              </p>
              <Link to="/quote" className="btn-secondary">
                Get Your Free Estimate
              </Link>
            </div>
            
            <div>
              <img 
                src="/images/about-hero.jpg" 
                alt="Collision Club auto body shop in Philadelphia"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/shop-exterior.jpg" 
                alt="Collision Club shop exterior in Manayunk Philadelphia"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009 by Mike Rodriguez, Collision Club started as a small 
                  auto body shop with a big vision: to provide Philadelphia with honest, 
                  quality auto repair services at fair prices.
                </p>
                <p>
                  What began as a one-man operation has grown into Philadelphia's most 
                  trusted auto body shop, serving thousands of satisfied customers across 
                  Manayunk, Roxborough, East Falls, and beyond.
                </p>
                <p>
                  We've built our reputation on three core principles: quality workmanship, 
                  honest pricing, and exceptional customer service. Every car that leaves 
                  our shop is a testament to our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every repair meets or exceeds manufacturer standards.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Honesty</h3>
              <p className="text-gray-600">
                Transparent pricing and honest assessments. We only recommend repairs you actually need.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                On-time delivery and consistent quality. You can count on us to get the job done right.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Continuous improvement and staying current with the latest techniques and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              ASE certified technicians with decades of combined experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-1">{member.experience}</p>
                  <p className="text-gray-600 text-sm">{member.certifications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              We maintain the highest industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <img src="/images/ase-certified.png" alt="ASE Certified" className="h-16 mx-auto mb-2" />
              <p className="text-sm text-gray-600">ASE Certified</p>
            </div>
            <div className="text-center">
              <img src="/images/sherwin-williams.png" alt="Sherwin Williams" className="h-16 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Sherwin-Williams Partner</p>
            </div>
            <div className="text-center">
              <img src="/images/icar-certified.png" alt="I-CAR Certified" className="h-16 mx-auto mb-2" />
              <p className="text-sm text-gray-600">I-CAR Certified</p>
            </div>
            <div className="text-center">
              <img src="/images/bbb-accredited.png" alt="BBB Accredited" className="h-16 mx-auto mb-2" />
              <p className="text-sm text-gray-600">BBB Accredited</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Collision Club Difference
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of satisfied customers who trust us with their vehicles
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

export default About
