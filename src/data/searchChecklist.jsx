import dummyTextStrings from "./dummyTextStrings"

const dummyText = (n) => {
    let result = ''
    for (let i = 0; i <= n; i++) {
        result = result.concat(dummyTextStrings[Math.floor(Math.random() * dummyTextStrings.length)], ' ')
    }
    return result.charAt(0).toUpperCase() + result.slice(1).slice(0,-1).concat(".")
}

const searchChecklist = [
    dummyText(5),
    dummyText(5),
    dummyText(5),
    dummyText(5),
    dummyText(5)
]

export default searchChecklist