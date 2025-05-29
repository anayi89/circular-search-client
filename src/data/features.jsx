import { Percent, Search, ArrowUp, Filter } from 'lucide-react'
import dummyTextStrings from "../data/dummyTextStrings"

const dummyText = (n) => {
    let result = ''
    for (let i = 0; i <= n; i++) {
        result = result.concat(dummyTextStrings[Math.floor(Math.random() * dummyTextStrings.length)], ' ')
    }
    return result.charAt(0).toUpperCase() + result.slice(1).slice(0,-1).concat(".")
}

const features = [
    {
        title: "Upload weekly circulars from your local market",
        description: dummyText(10),
        icon: <ArrowUp />,
    },
    {
        title: "Access Weekly Circulars from Mulktiple Stores at the Same Time",
        description: dummyText(10),
        icon: <Search />,
    },
    {
        title: "Find Grocery Items with the Best Deals by Sorting Searxch Results by Discount",
        description: dummyText(10),
        icon: <Percent />,
    },
    {
        title: "Filter Your Search Results to Make the Best Purchasing Decisions",
        description: dummyText(10),
        icon: <Filter />,
    }
]

export default features