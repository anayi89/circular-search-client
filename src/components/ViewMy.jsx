import React, { useState } from 'react'
import { FileText, Calendar, Store, Trash2, Search, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import circulars from "../data/circulars"

const Circular = {
  id: String,
  name: String,
  store: String,
  date: String,
  imageUrl: String
}

const ViewMy = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [myCirculars, setMyCirculars] = useState(circulars);
  
  const filteredCirculars = circulars.filter(circular => 
    circular.name.toLowerCase().includes(search.toLowerCase()) || 
    circular.store.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate search delay
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const handleDelete = (id) => {
    setMyCirculars(myCirculars.filter(circular => circular.id !== id))
    useEffect({
      title: "Circular deleted",
      description: "The circular has been removed from your account."
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">Your Circulars</h1>
                <p className="text-lg md:text-xl text-green mb-2 max-w-3xl mx-auto">
                  View and manage all the store circulars you've uploaded
                </p>
              </div>
              <Link to="/upload" className="mt-4">
                <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Upload New Circular</button>
              </Link>
            </div>
            
            <div className="mb-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="lucide lucide-search absolute left-4 top-7em h-5 w-5 text-gray-400 transparent-bg left-padding-1vh" />
                <input
                  className="pl-10 bg-white flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm left-padding-2em"
                  placeholder="Search by name or store"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="overflow-hidden">
                    <div className="aspect-[4/3] w-full">
                      <div className="h-full w-full animate-pulse rounded-md bg-muted" />
                    </div>
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="h-6 w-3/4 mb-2 animate-pulse rounded-md bg-muted" />
                      <div className="h-4 w-1/2 animate-pulse rounded-md bg-muted" />
                    </div>
                    <div className="flex items-center p-6 pt-0">
                      <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredCirculars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCirculars.map((circular) => (
                  <div key={circular.id} className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="aspect-[4/3] w-full bg-gray-100 relative group circular-div">
                      <img 
                        src={circular.imageUrl} 
                        alt={circular.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-3 mr-2">
                          <Eye className="mr-1 h-4 w-4 transparent-bg" />
                          View
                        </button>
                        <button 
                          onClick={() => handleDelete(circular.id)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
                        >
                          <Trash2 className="mr-1 h-4 w-4 transparent-bg" />
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="bg-white flex flex-col space-y-1.5 p-6">
                      <h3 className="bg-white text-2xl font-semibold leading-none tracking-tight">{circular.name}</h3>
                      <div className="bg-white flex flex-col text-sm text-gray-500 space-y-1 mt-2">
                        <div className="bg-white flex items-center">
                          <Store className="h-4 w-4 mr-2 transparent-bg" />
                          {circular.store}
                        </div>
                        <div className="bg-white flex items-center">
                          <Calendar className="h-4 w-4 mr-2 transparent-bg" />
                          {circular.date}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white flex justify-between items-center p-6 pt-0">
                      <Link to={`/search?circular=${circular.id}`} className="bg-white">
                        <button className="transition-colors px-6 bg-primary rounded-md h-12 font-medium text-lg text-primary-foreground">
                          <Search className="mr-1 h-4 w-4 transparent-bg" />
                          Search Deals
                        </button>
                      </Link>
                      <button
                        className="text-red-500 hover:bg-accent hover:text-accent-foreground"
                        onClick={() => handleDelete(circular.id)}
                      >
                        <Trash2 className="h-4 w-4 transparent-bg" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border">
                <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">No circulars found</h3>
                <p className="text-gray-500 mb-6">
                  {search ? 
                    `No results found for "${search}"` : 
                    "You haven't uploaded any circulars yet"}
                </p>
                <Link to="/upload">
                  <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Upload Your First Circular</button>
                </Link>
              </div>
            )}
            
            <div className="mt-4 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="bg-white search-result-text text-xl font-bold mb-4">About Your Circulars</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white">
                  <h3 className="bg-white search-result-text font-medium mb-2">What are circulars?</h3>
                  <p className="bg-white search-result-text text-gray-600">
                    Circulars are weekly advertisements from grocery stores and retailers that 
                    showcase their latest deals and discounts. By uploading them, you can easily 
                    search and compare prices.
                  </p>
                </div>
                <div className="bg-white">
                  <h3 className="bg-white search-result-text font-medium mb-2">Tips for best results</h3>
                  <ul className="bg-white search-result-text text-gray-600 space-y-2 list-disc list-inside">
                    <li className="bg-white search-result-text">Upload clear, high-resolution images</li>
                    <li className="bg-white search-result-text">Include the store name when uploading</li>
                    <li className="bg-white search-result-text">Add the valid dates for the circular</li>
                    <li className="bg-white search-result-text">Remove any personal information before uploading</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewMy