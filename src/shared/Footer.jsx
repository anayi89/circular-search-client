import "./footer.css"
import socialIcons from "../data/socialIcons"
import footerLinks from "../data/footerLinks"
import { library } from "@fortawesome/fontawesome-svg-core"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

library.add(faFacebook, faLinkedin, faInstagram)

const Footer = () => {
  return (
    <footer id="footerSection">
      <div>
        <div>
          <h3>Circular Search</h3>
          <p>Find the best deals on groceries and save money every week with our 
          circular search and comparison platform.</p>
        </div>
        
        <div>
          <h3>Product</h3>
          <ul>
            {footerLinks.map((footerLink, index) => (
              <li key={index}>
                <a href={footerLink.url}>{footerLink.page}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3>Contact</h3>
          <ul><li><a href="/contact_us">Contact Us</a></li></ul>
          {socialIcons.map((socialIcon, index) => {
            return(
              <Link key={index} to={socialIcon.url} target="_blank" rel="noopener noreferrer">
                <button type="submit"><FontAwesomeIcon icon={socialIcon.icon} /></button>
              </Link>
            )
          })}
        </div>
      </div>
      
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Circular Search. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer