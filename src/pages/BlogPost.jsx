import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()
  
  // Sample blog post data - in a real app, this would come from a CMS or API
  const blogPost = {
    title: 'What to Do After a Car Accident in Philadelphia: Complete Guide',
    content: `
      <p>Being involved in a car accident can be overwhelming, especially in a busy city like Philadelphia. Knowing what steps to take immediately after an accident can protect you legally and financially while ensuring you get the best auto body repair services.</p>

      <h2>Immediate Steps at the Accident Scene</h2>
      
      <h3>1. Ensure Safety First</h3>
      <p>Move your vehicle to a safe location if possible, turn on hazard lights, and check for injuries. If anyone is hurt, call 911 immediately.</p>
      
      <h3>2. Call the Police</h3>
      <p>In Philadelphia, you should call the police for any accident involving injuries, significant damage, or disputes about fault. The police report will be crucial for insurance claims.</p>
      
      <h3>3. Document Everything</h3>
      <p>Take photos of:</p>
      <ul>
        <li>Vehicle damage from multiple angles</li>
        <li>The accident scene</li>
        <li>License plates</li>
        <li>Street signs and traffic signals</li>
        <li>Any visible injuries</li>
      </ul>
      
      <h2>Exchange Information</h2>
      <p>Collect the following information from all parties involved:</p>
      <ul>
        <li>Full names and contact information</li>
        <li>Insurance company and policy numbers</li>
        <li>Driver's license numbers</li>
        <li>Vehicle make, model, year, and VIN</li>
        <li>Location of the accident</li>
      </ul>
      
      <h2>Dealing with Insurance Companies</h2>
      <p>Contact your insurance company as soon as possible to report the accident. Be honest about what happened, but avoid admitting fault. Stick to the facts.</p>
      
      <h3>Understanding Pennsylvania's Insurance Laws</h3>
      <p>Pennsylvania is a "choice no-fault" state, meaning you can choose between no-fault insurance or the right to sue. This affects how your claim will be handled.</p>
      
      <h2>Choosing the Right Auto Body Shop</h2>
      <p>When selecting an auto body shop in Philadelphia, consider:</p>
      <ul>
        <li>Certifications (ASE, I-CAR)</li>
        <li>Insurance company partnerships</li>
        <li>Warranty offerings</li>
        <li>Customer reviews and reputation</li>
        <li>Quality of equipment and facilities</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Leaving the scene without proper documentation</li>
        <li>Admitting fault at the scene</li>
        <li>Delaying medical attention</li>
        <li>Not getting a police report</li>
        <li>Choosing the cheapest repair option without considering quality</li>
      </ul>
      
      <h2>When to Seek Legal Help</h2>
      <p>Consider consulting with a personal injury attorney if:</p>
      <ul>
        <li>There are serious injuries</li>
        <li>Fault is disputed</li>
        <li>Insurance companies are uncooperative</li>
        <li>Damages exceed policy limits</li>
      </ul>
      
      <h2>Getting Your Vehicle Repaired</h2>
      <p>At Collision Club, we work directly with insurance companies to streamline the repair process. Our certified technicians use state-of-the-art equipment to restore your vehicle to pre-accident condition.</p>
      
      <p>We offer:</p>
      <ul>
        <li>Free estimates</li>
        <li>Insurance direct billing</li>
        <li>Lifetime warranty on repairs</li>
        <li>Rental car assistance</li>
        <li>Towing services</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While car accidents are stressful, following these steps can help protect your interests and ensure you receive quality repairs. Remember, choosing the right auto body shop is crucial for both the safety and value of your vehicle.</p>
      
      <p>If you've been in an accident in Philadelphia, contact Collision Club for a free estimate. Our experienced team will guide you through the repair process and work with your insurance company to get you back on the road safely.</p>
    `,
    author: 'Mike Rodriguez',
    date: '2024-01-15',
    category: 'Safety',
    readTime: '8 min read',
    image: '/images/blog/car-accident-guide-hero.jpg'
  }

  const relatedPosts = [
    {
      slug: 'collision-repair-vs-replacement-when-to-choose',
      title: 'Collision Repair vs Replacement: When to Choose What',
      image: '/images/blog/repair-vs-replace-thumb.jpg'
    },
    {
      slug: 'insurance-claims-auto-body-repair-guide',
      title: 'Navigating Insurance Claims for Auto Body Repair',
      image: '/images/blog/insurance-claims-thumb.jpg'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-max">
          <Link to="/blog" className="inline-flex items-center text-primary-100 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center text-primary-100 text-sm mb-4">
              <span className="bg-primary-800 px-3 py-1 rounded mr-4">{blogPost.category}</span>
              <User className="h-4 w-4 mr-1" />
              <span className="mr-4">{blogPost.author}</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{new Date(blogPost.date).toLocaleDateString()}</span>
              <span>{blogPost.readTime}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center text-primary-100 hover:text-white">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
          />
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Auto Body Repair in Philadelphia?
            </h2>
            <p className="text-gray-600 mb-6">
              Get a free estimate from Philadelphia's most trusted auto body shop. 
              We work with all insurance companies and offer lifetime warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="btn-primary">
                Get Free Estimate
              </Link>
              <a href="tel:2155550123" className="btn-secondary">
                Call (215) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding">
        <div className="container-max max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <Link 
                key={index}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
