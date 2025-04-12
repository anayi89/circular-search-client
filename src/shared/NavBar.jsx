import React from "react";

function NavBar() {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
    document.getElementsByClassName("fa-solid fa-bars")[0].style.display = "none";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
    document.getElementsByClassName("fa-solid fa-bars")[0].style.display = "inline-block";
  };

    return (
      <nav className="nav_menu">
        <div id="myNav" className="overlay">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="overlay-content">
                <a href="#">Home</a>
                <a href="submit.html">Submit Circulars</a>
                <a href="search.html">Search Circulars</a>
                <a href="view_my.html">View My Circulars</a>
                <a href="view_all.html">View All Circulars</a>
            </div>      
          </div>
          
        <i className="fa-solid fa-bars" onClick={openNav}></i>
      </nav>
    )
}

export default NavBar;