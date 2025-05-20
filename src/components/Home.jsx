import { PercentSquare, Search, ArrowUp, ArrowDown } from 'lucide-react'
import "../styles/design.css"
import features from "../data/features"
import plans from "../data/plans"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        {/* Hero Section */}
        <section>
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70"></div>
                    <div className="bottom-padding container relative mx-auto px-4 text-center">
                        <div className="inline-block mb-4 px-6 py-2 bg-secondary/10 rounded-full">
                            <span className="text-secondary font-medium flex items-center">
                                <PercentSquare className="mr-2 h-5 w-5" />
                                Never miss a grocery deal again
                            </span>
                        </div>
                    
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Find the <span className="text-secondary">Best Deals</span> <br /> on Your Grocery Shopping
                        </h1>
                    
                        <p className="text-lg md:text-xl text-green mb-8 max-w-3xl mx-auto">
                        Upload supermarket circulars, search for deals, and sort by biggest discounts. 
                        Share with the community and save money every week.
                        </p>
                    
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                            <button className="transition-colors px-6 bg-primary rounded-md h-12 font-medium text-lg text-primary-foreground" type="submit" size="lg">Start Saving Now</button>
                            <button className="transition-colors px-6 bg-secondary rounded-md h-12 font-medium text-lg text-secondary-foreground" type="submit" size="lg">See How It Works</button>
                        </div>
                        
                        <div className="relative mx-auto w-full max-w-4xl">
                            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                                <div className="bg-white flex items-center p-4 border-b">
                                    <Search className="bg-white h-5 w-5 text-gray-400 mr-2" />
                                    <input 
                                        type="text" 
                                        placeholder="Search for apples, milk, bread..." 
                                        className="flex-1 bg-transparent outline-none"
                                        disabled
                                    />
                                    <div className="bg-white flex items-center space-x-2">
                                        <span className="bg-white text-sm text-gray-500">Sort by:</span>
                                        <button className="flex items-center text-primary text-sm font-medium">
                                        Discount <ArrowDown className="bg-white ml-1 h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-gray-50">
                                {[
                                    { name: "Organic Whole Milk", original: "$5.99", current: "$3.99", discount: "33%", image: "../../public/images/items/organic-milk.jpg", store: "Whole Foods" },
                                    { name: "Large Brown Eggs (12pk)", original: "$4.49", current: "$2.99", discount: "29%", image: "../../public/images/items/brown-eggs.jpg", store: "Kroger" },
                                    { name: "Sliced White Bread", original: "$3.49", current: "$2.49", discount: "25%", image: "../../public/images/items/white-bread.jpeg", store: "Target" }
                                    ].map((item, index) => (
                                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm flex flex-col relative">
                                        <div className="discount-badge">-{item.discount}</div>
                                        <div className="h-32 bg-gray-200 rounded-md mb-3 flex items-center justify-center text-gray-400">
                                            <img className="search-img width-height-100" src={item.image} />
                                        </div>
                                        <h3 className="bg-white search-result-text font-semibold mb-1 text-left">{item.name}</h3>
                                        <div className="bg-white flex justify-between items-center">
                                            <div className="bg-white">
                                            <span className="bg-white text-gray-500 line-through text-sm">{item.original}</span>
                                            <span className="bg-white text-primary font-bold ml-2">{item.current}</span>
                                            </div>
                                            <span className="bg-white text-xs text-gray-500">{item.store}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="transparent-bg absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                            <a 
                            href="#features" 
                            className="flex items-center justify-center h-12 w-12 bg-white rounded-full shadow-lg"
                            >
                            <ArrowDown className="bg-white h-5 w-5 text-primary" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* App Features */}
        <section id="features" className="bottom-padding">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How Circular Search Works</h2>
                <p className="text-lg text-green max-w-2xl mx-auto">
                    Our platform makes it easy to find the best grocery deals in your area
                    with these powerful features.
                </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div 
                    key={index} 
                    className="feature-card bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                    >
                    <div className="bg-white mb-4">{feature.icon}</div>
                    <h3 className="bg-white search-result-text text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="bg-white text-gray-600">{feature.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>

        {/* How the App Works */}
        <section id="how-it-works" className="bottom-padding transparent-bg bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Upload Weekly Circulars in Seconds</h2>
                    <p className="text-lg text-green mb-6">
                    Simply take a photo or upload a PDF of your local supermarket circular. 
                    Our system will automatically extract all deals and make them searchable.
                    </p>
                    <ul className="space-y-4 mb-8">
                    {["Upload from your phone or computer", "Automatic deal extraction", "Compare across multiple stores", "Share with friends and family"].map((item, i) => (
                        <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="transparent-bg text-primary text-sm font-medium">✓</span>
                        </div>
                        <span className="text-green">{item}</span>
                        </li>
                    ))}
                    </ul>
                    <Link to="/upload"><button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" type="submit" size="lg">Try Uploading Now</button></Link>
                </div>
                
                <div className="lg:w-1/2">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-6 bg-gray-50 border-b border-gray-100">
                        <h3 className="bg-white search-result-text font-semibold text-lg">Upload Circular</h3>
                    </div>
                    <div className="bg-white p-8">
                        <div className="bg-white border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <ArrowUp className="transparent-bg h-8 w-8 text-primary" />
                        </div>
                        <p className="bg-white text-gray-500 mb-4">
                            Drag and drop files here, or click to select files
                        </p>
                        <p className="bg-white text-xs text-gray-400">
                            Supports: JPG, PNG, PDF (max 20MB)
                        </p>
                        <div className="bg-white mt-6">
                            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 text-sm" type="submit" size="sm">Select Files</button>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-right">
                        <button className="text-primary text-sm font-medium">
                        See how it works →
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="bg-white bottom-padding transparent-bg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row-reverse items-center">
                <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pl-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Find the Best Deals in Seconds</h2>
                    <p className="text-lg text-green mb-6">
                    Our powerful search engine lets you find the best deals across all stores.
                    Sort by biggest discounts to maximize your savings every week.
                    </p>
                    <ul className="space-y-4 mb-8">
                    {[
                        "Search across all local stores", 
                        "Sort by biggest discounts", 
                        "Filter by product categories", 
                        "Compare prices easily"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                            <span className="transparent-bg text-primary text-sm font-medium">✓</span>
                        </div>
                        <span className="text-green">{item}</span>
                        </li>
                    ))}
                    </ul>
                    <Link to="/search">
                        <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Try Searching Now</button>
                    </Link>
                </div>
                
                <div className="lg:w-1/2">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="bg-white p-4 border-b border-gray-100 flex items-center">
                        <Search className="bg-white h-5 w-5 text-gray-400 mr-2" />
                        <input 
                        type="text" 
                        placeholder="Search for milk, eggs, bread..." 
                        className="flex-1 bg-transparent outline-none" 
                        disabled
                        />
                    </div>
                    
                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between text-sm">
                        <div className="bg-white flex items-center">
                            <span className="bg-white text-gray-500 mr-2">Filter:</span>
                            <span className="bg-primary/10 text-primary rounded-full px-3 py-1 mr-2">Dairy</span>
                            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1">Under $5</span>
                        </div>
                        <div className="flex items-center">
                        <span className="bg-white text-gray-500 mr-2">Sort by:</span>
                        <button className="bg-white flex items-center text-primary font-medium">
                            Discount <ArrowDown className="transparent-bg ml-1 h-4 w-4" />
                        </button>
                        </div>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                        {[
                        { name: "Organic Whole Milk", original: "$5.99", current: "$3.99", discount: "33%", image: "../../public/images/items/organic-milk.jpg", store: "Whole Foods" },
                        { name: "Large Brown Eggs (12pk)", original: "$4.49", current: "$2.99", discount: "29%", image: "../../public/images/items/brown-eggs.jpg", store: "Kroger" },
                        { name: "Sliced White Bread", original: "$3.49", current: "$2.49", discount: "25%", image: "../../public/images/items/white-bread.jpeg", store: "Target" }
                        ].map((item, i) => (
                        <div key={i} className="bg-white p-4 hover:bg-gray-50 transition-colors">
                            <div className="bg-white flex items-center">
                            <div className="h-16 w-16 bg-gray-200 rounded mr-4">
                                <img src={item.image} alt={item.name} className="h-16 w-16 rounded mr-4" />
                            </div>
                            <div className="bg-white flex-1">
                                <h4 className="bg-white search-result-text font-medium">{item.name}</h4>
                                <div className="bg-white flex items-center mt-1 text-sm">
                                    <span className="bg-white text-gray-500 line-through mr-2">{item.original}</span>
                                    <span className="bg-white text-primary font-bold">{item.current}</span>
                                    <span className="bg-white ml-2 px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                                        -{item.discount}
                                    </span>
                                </div>
                            </div>
                            <div className="bg-white text-right text-xs text-gray-500">{item.store}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                    
                    <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                        <button className="text-primary text-sm font-medium">
                        View more results →
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-green max-w-2xl mx-auto">
                        Choose the plan that works best for you and start saving on your grocery shopping today.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                    key={index}
                    className={`relative bg-white rounded-xl overflow-hidden shadow-lg border ${
                        plan.popular ? 'border-primary' : 'border-gray-100'
                    }`}
                    >
                    {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground py-1 px-4 text-sm font-medium rounded-bl-lg">
                        Most Popular
                        </div>
                    )}
                    
                    <div className="bg-white p-8">
                        <h3 className="bg-white search-result-text text-xl font-bold mb-2">{plan.name}</h3>
                        <div className="bg-white flex items-baseline mb-4">
                            <span className="bg-white search-result-text text-4xl font-bold">${plan.price}</span>
                            {plan.price !== "0" && <span className="bg-white text-gray-500 ml-2">/month</span>}
                        </div>
                        <p className="bg-white text-gray-600 mb-6">{plan.description}</p>
                        
                        <ul className="bg-white space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="bg-white flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                                <span className="transparent-bg text-primary text-xs">✓</span>
                            </div>
                            <span className="bg-white text-gray-700 text-sm">{feature}</span>
                            </li>
                        ))}
                        </ul>
                        
                        <button 
                        variant={plan.buttonVariant} 
                        className="transition-colors px-6 bg-primary rounded-md h-12 font-medium text-lg text-primary-foreground w-full"
                        >
                        {plan.buttonText}
                        </button>
                    </div>
                    </div>
                ))}
                </div>
                
                <div className="text-center mt-12 text-gray-500 text-sm">
                All plans come with a 14-day money-back guarantee. No questions asked.
                </div>
            </div>
        </section>
    </>
)}

export default Home