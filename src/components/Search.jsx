import React, { useState, useEffect } from 'react'
import { Search as SearchIcon, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react'
import items from "../data/items"

// Available filters
const categories = ["All", "Dairy", "Bakery", "Produce", "Meat", "Beverages"]
const priceRanges = ["All", "Under $3", "$3-$5", "$5-$10", "Over $10"]
const stores = ["All", "Whole Foods", "Kroger", "Target", "Trader Joe's", "Safeway", "Costco", "Walmart"]

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All')
  const [selectedStore, setSelectedStore] = useState('All')
  const [sortOrder, setSortOrder] = useState('discount') // discount, price-low, price-high
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort items based on selected filters
  const filteredItems = items
    .filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
      
      // Convert price to number for comparison
      const currentPrice = parseFloat(item.current.replace('$', ''));
      let matchesPriceRange = true;
      
      if (selectedPriceRange === 'Under $3') {
        matchesPriceRange = currentPrice < 3;
      } else if (selectedPriceRange === '$3-$5') {
        matchesPriceRange = currentPrice >= 3 && currentPrice <= 5;
      } else if (selectedPriceRange === '$5-$10') {
        matchesPriceRange = currentPrice > 5 && currentPrice <= 10;
      } else if (selectedPriceRange === 'Over $10') {
        matchesPriceRange = currentPrice > 10;
      }
      
      const matchesStore = selectedStore === 'All' || item.store === selectedStore;
      
      return matchesSearch && matchesCategory && matchesPriceRange && matchesStore;
    })
    .sort((a, b) => {
      if (sortOrder === 'discount') {
        // Sort by discount percentage (higher first)
        return parseInt(b.discount) - parseInt(a.discount);
      } else if (sortOrder === 'price-low') {
        // Sort by price (low to high)
        return parseFloat(a.current.replace('$', '')) - parseFloat(b.current.replace('$', ''));
      } else {
        // Sort by price (high to low)
        return parseFloat(b.current.replace('$', '')) - parseFloat(a.current.replace('$', ''));
      }
    });

  const handleSearch = (e) => {
    e.preventDefault();
    useEffect({
      title: "Searching...",
      description: `Found ${filteredItems.length} results for "${searchQuery}"`,
    })
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Find the Best Grocery Deals</h1>
            
            {/* Search form */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 transparent-bg left-padding-1vh" />
                <input
                  type="text"
                  placeholder="Search for milk, eggs, bread..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-12 h-12 text-lg left-padding-2em"
                />
                <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 py-2 absolute right-0 top-0 h-12 px-6 rounded-l-none" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </form>
            
            {/* Filters toggle */}
            <div className="mb-4">
              <button
                variant="outline"
                className="w-full flex justify-between items-center"
                onClick={toggleFilters}
              >
                <span>Filters & Sorting</span>
                {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
            
            {/* Filters */}
            {showFilters && (
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="bg-white">
                  <h3 className="bg-white search-result-text font-medium text-sm mb-2">Categories</h3>
                  <div className="bg-white search-result-text flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white">
                  <h3 className="bg-white search-result-text font-medium text-sm mb-2">Price Range</h3>
                  <div className="bg-white search-result-text flex flex-wrap gap-2">
                    {priceRanges.map(range => (
                      <button
                        key={range}
                        variant={selectedPriceRange === range ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedPriceRange(range)}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white">
                  <h3 className="bg-white search-result-text font-medium text-sm mb-2">Stores</h3>
                  <div className="bg-white search-result-text flex flex-wrap gap-2">
                    {stores.map(store => (
                      <button
                        key={store}
                        variant={selectedStore === store ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStore(store)}
                      >
                        {store}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white">
                  <h3 className="bg-white search-result-text font-medium text-sm mb-2">Sort By</h3>
                  <div className="bg-white search-result-text flex gap-2">
                    <button
                      variant={sortOrder === 'discount' ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortOrder('discount')}
                    >
                      Biggest Discount
                    </button>
                    <button
                      variant={sortOrder === 'price-low' ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortOrder('price-low')}
                    >
                      Price: Low-High
                    </button>
                    <button
                      variant={sortOrder === 'price-high' ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortOrder('price-high')}
                    >
                      Price: High-Low
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Results */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                <div className="bg-white search-result-text text-sm">
                  <strong className="transparent-bg">{filteredItems.length}</strong> deals found
                </div>
                <div className="bg-white flex items-center text-sm">
                  <span className="bg-white search-result-text mr-2">Sorted by:</span>
                  <button variant="ghost" size="sm" className="search-result-text font-medium flex items-center">
                    {sortOrder === 'discount' ? 'Discount' : 
                     sortOrder === 'price-low' ? 'Price: Low-High' : 'Price: High-Low'}
                    <ArrowDown className="transparent-bg ml-1 h-3 w-3" />
                  </button>
                </div>
              </div>
              
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-500">No results found. Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="bg-white p-4 hover:bg-gray-50 transition-colors flex items-center">
                      <div className="h-16 w-16 bg-gray-200 rounded mr-4 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="bg-white flex-1">
                        <h3 className="bg-white search-result-text font-medium">{item.name}</h3>
                        <div className="bg-white flex items-center mt-1 text-sm">
                          <span className="bg-white text-gray-500 line-through mr-2">{item.original}</span>
                          <span className="bg-white text-primary font-bold">{item.current}</span>
                          <span className="ml-2 px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                            -{item.discount}
                          </span>
                        </div>
                      </div>
                      <div className="bg-white text-right text-xs text-gray-500">{item.store}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {filteredItems.length > 0 && (
                <div className="p-4 border-t bg-gray-50 flex justify-center">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 search-result-text" variant="outline">Load more results</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Search