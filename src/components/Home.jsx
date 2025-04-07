function Home() {
    return (
        <section className="search_bar">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit" className="search_button"><i className="fa fa-search"></i></button>
        </section>
    )
}

export default Home;