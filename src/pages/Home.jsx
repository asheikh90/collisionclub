import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Shield, Clock, Award, Phone, ArrowRight, CheckCircle, Zap, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import QuoteForm from '../components/QuoteForm'

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Lifetime Warranty",
      description: "We stand behind our work with comprehensive warranty coverage",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "Most repairs completed within 3-5 business days",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Technicians",
      description: "ASE certified professionals with 15+ years experience",
      color: "from-purple-500 to-indigo-600"
    }
  ]

  const services = [
    {
      title: "Collision Repair",
      description: "Complete collision damage restoration using advanced techniques",
      image: "/images/collision-repair.jpg",
      link: "/services/collision-repair",
      price: "From $800",
      features: ["Frame straightening", "Safety system restoration", "Insurance billing"]
    },
    {
      title: "Auto Painting",
      description: "Professional paint jobs using Sherwin-Williams paint systems",
      image: "/images/auto-painting.jpg", 
      link: "/services/auto-painting",
      price: "From $400",
      features: ["Color matching", "Paint booth technology", "Lifetime warranty"]
    },
    {
      title: "Bumper Repair",
      description: "Expert bumper repair and replacement services",
      image: "/images/bumper-repair.jpg",
      link: "/services/bumper-repair",
      price: "From $200",
      features: ["Same-day service", "Sensor recalibration", "Plastic welding"]
    }
  ]

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
      transition: { duration: 0.6 }
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90 dark:from-dark-950/95 dark:to-dark-900/95"></div>
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <motion.span 
                  className="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  ⚡ Philadelphia's #1 Auto Body Shop
                </motion.span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                variants={itemVariants}
              >
                Expert Auto Body
                <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Repair & Collision
                </span>
                Services
              </motion.h1>
              
              <motion.p 
                className="text-xl mb-8 text-primary-100 leading-relaxed"
                variants={itemVariants}
              >
                Professional collision repair in Manayunk, Roxborough & East Falls. 
                Free estimates, lifetime warranty, and AI-powered instant quotes.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                variants={itemVariants}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/quote" className="btn-secondary text-center inline-flex items-center justify-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Get AI Quote Now
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="tel:2155550123" className="btn-outline text-center inline-flex items-center justify-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (215) 555-0123
                  </a>
                </motion.div>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div 
                className="flex items-center space-x-6"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                      >
                        <Star className="h-5 w-5 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-primary-100 font-medium">4.9/5 (127 reviews)</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:text-right"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl"></div>
                <img 
                  src="/images/hero-car-repair.jpg" 
                  alt="Professional auto body repair in Philadelphia"
                  className="relative rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/50 to-transparent dark:via-primary-950/20"></div>
        
        <motion.div 
          className="container-max relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Collision Club?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've been Philadelphia's trusted auto body shop for over a decade, 
              delivering quality repairs with unmatched customer service.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="glow-card p-8 text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${feature.color} text-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <motion.div 
          className="container-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block px-4 py-2 bg-secondary-100 dark:bg-secondary-900/50 text-secondary-600 dark:text-secondary-400 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Our Services
            </motion.span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Auto Body Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional collision repair and auto body services in Philadelphia
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="glow-card overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div 
                    className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {service.price}
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to={service.link}
                        className="btn-primary w-full flex items-center justify-center"
                      >
                        Learn More <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to="/quote"
                        className="btn-outline flex items-center justify-center px-4"
                      >
                        Quote
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"></div>
        
        <motion.div 
          className="container-max relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <motion.span 
                className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                AI-Powered Estimates
              </motion.span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get Your Free Estimate Today
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Upload photos of your damage and get an instant AI-powered estimate
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <QuoteForm />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Local SEO Section */}
      <section className="section-padding bg-white dark:bg-dark-950">
        <motion.div 
          className="container-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.span 
              className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Local Service Areas
            </motion.span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Serving Philadelphia's Auto Body Repair Needs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Proudly serving these Philadelphia neighborhoods and zip codes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                area: "Manayunk (19127)",
                description: "Full-service auto body repair for Manayunk residents. Convenient location with free pickup and delivery.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                area: "Roxborough (19128)",
                description: "Expert collision repair serving the Roxborough community. Insurance direct billing available.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                area: "East Falls (19129)",
                description: "Professional auto painting and body work for East Falls. Lifetime warranty on all repairs.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((location, index) => (
              <motion.div 
                key={index}
                className="glow-card p-8 text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${location.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <MapPin className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{location.area}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {location.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
