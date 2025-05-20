import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"
import { Link } from 'react-router-dom'

library.add(faFacebook, faTwitter, faInstagram)
const socialIcons = [
    { url: 'https://www.facebook.com/circ_search', icon: faFacebook },
    { url: 'https://www.twitter.com/circ_search', icon: faTwitter },
    { url: 'https://www.instagram.com/circ_search', icon: faInstagram }
]

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Form data:', data)
    toast.success('Message sent! We\'ll get back to you soon.')
    reset()
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-green max-w-2xl mx-auto">
            Have questions about how Circular Search works? Want to partner with us? 
            We'd love to hear from you!
          </p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-green mb-8">
                Our team is here to help you with any questions or concerns. Feel free to reach out through any of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="transparent-bg h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <a href="mailto:contact@circularsearch.com" className="text-gray-300 hover:text-primary">
                      contact@circularsearch.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="transparent-bg h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-primary">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="transparent-bg h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <address className="text-gray-300 not-italic">
                      123 Savings Avenue<br />
                      San Francisco, CA 94107
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialIcons.map((socialIcon, index) => {
                    return(
                    <Link key={index} to={socialIcon.url} target="_blank" rek="noopener noreferrer">
                      <button type="submit" className="transparent-bg h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors"><FontAwesomeIcon icon={socialIcon.icon} /></button>
                    </Link>
                  )})}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="bg-white search-result-text text-2xl font-semibold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white space-y-2">
                    <label className="bg-white search-result-text" htmlFor="firstName">First Name</label>
                    <input 
                      id="firstName" 
                      placeholder="John"
                      {...register('firstName', { required: 'First name is required' })}
                      className={errors.firstName ? 'border-red-500' : 'form-fields bg-white border rounded-md'}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div className="bg-white space-y-2">
                    <label className="bg-white search-result-text" htmlFor="lastName">Last Name</label>
                    <input 
                      id="lastName" 
                      placeholder="Doe"
                      {...register('lastName', { required: 'Last name is required' })}
                      className={errors.lastName ? 'border-red-500' : 'form-fields bg-white border rounded-md'}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="bg-white space-y-2">
                  <label className="bg-white search-result-text" htmlFor="email">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={errors.email ? 'border-red-500' : 'bg-white search-result-text border rounded-md'}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="bg-white space-y-2">
                  <label className="bg-white search-result-text" htmlFor="subject">Subject</label>
                  <input 
                    id="subject" 
                    placeholder="How can we help?"
                    {...register('subject', { required: 'Subject is required' })}
                    className={errors.subject ? 'border-red-500' : 'bg-white search-result-text border rounded-md'}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="bg-white space-y-2">
                  <label className="bg-white search-result-text" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    placeholder="Tell us what you need help with..."
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className={errors.message ? 'border-red-500' : 'bg-white search-result-text border rounded-md'}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="bg-white pt-2">
                  <button type="submit" size="lg" className="transition-colors px-6 bg-primary rounded-md h-12 font-medium text-lg text-primary-foreground w-full">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact