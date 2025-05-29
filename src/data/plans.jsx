import dummyTextStrings from "../data/dummyTextStrings"

const dummyText = (n) => {
    let result = ''
    for (let i = 0; i <= n; i++) {
        result = result.concat(dummyTextStrings[Math.floor(Math.random() * dummyTextStrings.length)], ' ')
    }
    return result.charAt(0).toUpperCase() + result.slice(1).slice(0,-1).concat(".")
}

const plans = [
    {
        name: "Free",
        price: "0",
        description: "For the cheaper option",
        features: [
            dummyText(5),
            dummyText(5),
            dummyText(5),
            dummyText(5),
            dummyText(5)
        ],
        buttonText: "Get Started",
        popular: false
    },
    {
        name: "Premium",
        price: "4.99",
        description: "To make the most your Circular Search experience",
        features: [
            dummyText(5),
            dummyText(5),
            dummyText(5),
            dummyText(5),
            dummyText(5)
        ],
        buttonText: "Start Free Trial",
        buttonVariant: "primary",
        popular: true
    }
]

export default plans