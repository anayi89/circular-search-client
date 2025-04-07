function NavBar() {
    return (
      <nav className="nav_menu">
        <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <div class="overlay-content">
                <a href="#">Home</a>
                <a href="submit.html">Submit Circulars</a>
                <a href="search.html">Search Circulars</a>
                <a href="view_my.html">View My Circulars</a>
                <a href="view_all.html">View All Circulars</a>
            </div>      
          </div>
          
        <i class="fa-solid fa-bars" onclick="openNav()"></i>
      </nav>
    )
}

export default NavBar;