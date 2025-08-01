import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      slug: 'what-to-do-after-car-accident-philadelphia',
      title: 'What to Do After a Car Accident in Philadelphia: Complete Guide',
      excerpt: 'Step-by-step guide on what to do immediately after a car accident in Philadelphia, including insurance claims and choosing the right auto body shop.',
      image: '/images/blog/car-accident-guide.jpg',
      author: 'Mike Rodriguez',
      date: '2024-01-15',
      category: 'Safety',
      readTime: '8 min read'
    },
    {
      slug: 'collision-repair-vs-replacement-when-to-choose',
      title: 'Collision Repair vs Replacement: When to Choose What',
      excerpt: 'Learn when it makes financial sense to repair collision damage versus replacing parts entirely. Expert insights from Philadelphia auto body professionals.',
      image: '/images/blog/repair-vs-replace.jpg',
      author: 'Sarah Chen',
      date: '2024-01-10',
      category: 'Repair Tips',
      readTime: '6 min read'
    },
    {
      slug: 'auto-paint-matching-technology-philadelphia',
      title: 'How Modern Paint Matching Technology Works',
      excerpt: 'Discover how Sherwin-Williams paint matching technology ensures perfect color matches for your vehicle at our Philadelphia auto body shop.',
      image: '/images/blog/paint-matching.jpg',
      author: 'Tony Martinez',
      date: '2024-01-05',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      slug: 'winter-car-damage-prevention-philadelphia',
      title: 'Preventing Winter Car Damage in Philadelphia',
      excerpt: 'Essential tips to protect your vehicle from salt, ice, and winter weather damage in Philadelphia. Prevention is better than repair.',
      image: '/images/blog/winter-damage.jpg',
      author: 'Mike Rodriguez',
      date: '2023-12-28',
      category: 'Maintenance',
      readTime: '7 min read'
    },
    {
      slug: 'insurance-claims-auto-body-repair-guide',
      title: 'Navigating Insurance Claims for Auto Body Repair',
      excerpt: 'Complete guide to working with insurance companies for collision repair claims. Tips from Philadelphia auto body experts.',
      image: '/images/blog/insurance-claims.jpg',
      author: 'Sarah Chen',
      date: '2023-12-20',
      category: 'Insurance',
      readTime: '9 min read'
    },
    {
      slug: 'bumper-repair-replacement-cost-guide',
      title: 'Bumper Repair vs Replacement: Cost Guide 2024',
      excerpt: 'Detailed cost breakdown for bumper repair and replacement in Philadelphia. When to repair vs replace your damaged bumper.',
      image: '/images/blog/bumper-costs.jpg',
      author: 'Tony Martinez',
      date: '2023-12-15',
      category: 'Pricing',
      readTime: '6 min read'
    }
  ]

  const categories = ['All', 'Safety', 'Repair Tips', 'Technology', 'Maintenance', 'Insurance', 'Pricing']

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Auto Body Repair Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Expert tips, guides, and insights from Philadelphia's most trusted auto body shop. 
            Learn about collision repair, maintenance, and more.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-primary-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Auto Body Tips
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get expert auto repair tips and Philadelphia driving insights delivered to your inbox
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn-secondary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
