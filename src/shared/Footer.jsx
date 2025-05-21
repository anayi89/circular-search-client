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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">Circular Search</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Find the best deals on groceries and save money every week with our 
              circular search and comparison platform.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((socialIcon, index) => {
                return(
                <Link key={index} to={socialIcon.url} target="_blank" rek="noopener noreferrer">
                  <button type="submit" className="transparent-bg h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors"><FontAwesomeIcon icon={socialIcon.icon} /></button>
                </Link>
              )})}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {[{ page: "Features", url: "/features"},
                                    { page: "How It Works", url: "/how-it-works"},
                                    { page: "Pricing", url: "/pricing"},
                                    { page: "FAQ", url: "/faq"},
                                    { page: "Support", url: "/support"}
                                    ].map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-sm hover:text-primary transition-colors">
                    {item.page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {[{ page: "About", url: "/about"},
                { page: "Blog", url: "/blog"},
                { page: "Jobs", url: "/jobs"},
                { page: "Press", url: "/press"},
                { page: "Partners", url: "/partners"}
                ].map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-sm hover:text-primary transition-colors">
                    {item.page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {[{ page: "Privacy Policy", url: "/privacy-policy"},
                { page: "Terms of Service", url: "/terms-of-service"},
                { page: "Cookie Policy", url: "/cookie-policy"},
                { page: "Data Processing", url: "/data-processing"}
                ].map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="text-sm hover:text-primary transition-colors">
                    {item.page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-green mt-4">
            © {new Date().getFullYear()} Circular Search. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer