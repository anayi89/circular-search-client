// external stylesheets (Lecture 3.4, P1)
import "../styles/Home.css"

// component imports (Lecture 3.1, P3)
import features from "../data/features"
import plans from "../data/plans"
import dummyTextStrings from "../data/dummyTextStrings"
import uploadChecklist from "../data/uploadChecklist"
import searchChecklist from "../data/searchChecklist"
import { Link } from "react-router-dom"

function Home() {
    // function parameters (Lecture 2.7, P2)
    const dummyText = (n) => {
        let result = ''
        for (let i = 0; i <= n; i++) {
            result = result.concat(dummyTextStrings[Math.floor(Math.random() * dummyTextStrings.length)], ' ')
        }
        return result.charAt(0).toUpperCase() + result.slice(1).slice(0,-1).concat(".")
    }

  return (
    <>
        <section id="heroSection">
            {/* "div", "span", "p" and "h" ("h1", "h2", "h3") elements (Lecture 2.1, P1) */}
            <div className="appNameAndDescription">                
                <h1 className="appName">Circular Search</h1>
                
                <p className="appDescription">
                Upload weekly circulars from your local supermarket and let Circular Search do its magic! Search for grocery items sort them by supermarkets that offer the biggest discounts! Sign up for a premium subscription to access supermarkets uploaded by the people in your local neighborhood.
                </p>
            </div>
        </section>

        <section id="featuresSection">
            <div className="secondaryHeadlineAndDescription">
                <h2>How Circular Search Works</h2>
                <p>
                    Worried about <a href="https://tradingeconomics.com/commodity/eggs-us" target="_blank">the price of eggs?</a> ;) Circular Search saves the weekly circulars that you upload, makes them searchable and allows you to find the best deals from your local supermarkets.
                </p>
            </div>
            
            <div className="featureBox">
                {features.map((feature, index) => (
                    <div key={index}>
                        <div>{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section id="uploadChecklistSection">
            <h2>Upload Weekly Circulars in Seconds</h2>
            <p>{dummyText(30)}</p>
            <ul>
                {uploadChecklist.map((item, i) => (
                    <li key={i}>
                        <div>
                            <span>✓</span>
                        </div>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <Link to="/upload">
                <button type="submit">Try Uploading Now</button>
            </Link>
        </section>
        
        <section id="uploadMockupSection">
            <div className="uploadMockupHeader">
                <h3>Upload Circular</h3>
            </div>
        </section>

        <section id="searchChecklistSection">
            <h2>Find the Best Deals ASAP on Grocery Items, Using our Search Engine</h2>
            <p>{dummyText(30)}</p>
            <ul>
                {searchChecklist.map((item, i) => (
                    <li key={i}>
                        <div>
                            <span>✓</span>
                        </div>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <Link to="/search">
                <button type="submit">Try Searching Now</button>
            </Link>
        </section>

        <section id="searchMockupSection">
        </section>

        <section id="pricingSection">
            <div className="pricingHeaderDiv">
                <h2>Simple, Transparent Pricing</h2>
                <p>Choose the plan that works best for you and start saving on your grocery shopping today.</p>
            </div>
            
            <div className="pricingCardDiv">
                {plans.map((plan, index) => (
                    /* add green border around the popular plan */
                    <div key={index} className={`pricingCard ${plan.popular ? "greenBorder" : "grayBorder"}`}>
                        {/* add banner to the popular plan */}
                        {plan.popular && (<div className="mostPopular">Most Popular</div>)}
                        
                        <div className="individualPricingCard">
                            <h3>{plan.name}</h3>
                            <div className="individualPrice">
                                <span>${plan.price}</span>
                                {plan.price !== "0" && <span>/month</span>}
                            </div>
                            <p>{plan.description}</p>
                            
                            <ul>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <div><span>✓</span></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button>{plan.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="finePrint">Once you subscribe, the purchase is finalized. Sorry. ;)</div>
        </section>
    </>
)}

// default exports (3.1, P3)
export default Home