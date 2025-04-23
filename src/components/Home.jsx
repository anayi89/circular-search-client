import "../App.css"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Home() {
    return (
        <body>
            <section className="search_bar">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit" className="search_button"><FontAwesomeIcon icon={faSearch} /></button>
            </section>
        </body>
    )
}

export default Home