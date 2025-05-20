const plans = [
    {
        name: "Free",
        price: "0",
        description: "Perfect for casual shoppers looking to save on groceries",
        features: [
            "Upload up to 5 circulars per month",
            "Basic search functionality",
            "Sort by discount",
            "Access to your own uploaded circulars"
        ],
        buttonText: "Get Started",
        buttonVariant: "secondary",
        popular: false
    },
    {
        name: "Premium",
        price: "4.99",
        description: "Ideal for families looking to maximize grocery savings",
        features: [
            "Unlimited circular uploads",
            "Advanced search across all stores",
            "Access to all user-uploaded circulars",
            "Price history and tracking",
            "Deal alerts for favorite items",
            "Export shopping lists"
        ],
        buttonText: "Start Free Trial",
        buttonVariant: "primary",
        popular: true
    }
]

export default plans