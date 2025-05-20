import { Percent, Search, ArrowUp, Filter } from 'lucide-react'

const features = [
    {
        title: "Upload Weekly Circulars",
        description: "Easily upload and digitize supermarket circulars to make them searchable and shareable.",
        icon: <ArrowUp className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-lg" />,
    },
    {
        title: "Search Across Stores",
        description: "Find specific grocery items across multiple stores to compare prices and find the best deals.",
        icon: <Search className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-lg" />,
    },
    {
        title: "Sort by Biggest Discounts",
        description: "Never miss a bargain with our advanced sorting system that highlights the best deals first.",
        icon: <Percent className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-lg" />,
    },
    {
        title: "Filter Results",
        description: "Narrow down your search with filters for product categories, stores, and price ranges.",
        icon: <Filter className="h-10 w-10 p-2 bg-primary/10 text-primary rounded-lg" />,
    }
]

export default features