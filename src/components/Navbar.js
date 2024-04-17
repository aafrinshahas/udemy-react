

function Navbar(){
    return(
        <>
        <div class="navbar">
    <div class="navbar__logo">
        <h1>Udemy</h1>
    </div>
    <div class="navbar__search-bar">
        <i class="fa-solid fa-magnifying-glass" style={{color: '#000000'}}></i>
        <input type="search" placeholder="Search for anything here. Tech, Business, Art ..."/>
    </div>
    <div class="navbar__icons">
        <p>Trending Courses</p>
        <div class="mylearning">
            <p>My Learning</p>
            <div class="mylearning-popup">You did not purchase anything yet</div>
        </div>
     
        <i class="fa-solid fa-cart-shopping" style={{color: '#000000'}}></i>
        <i class="fa-solid fa-bell" style={{color: '#000000'}}></i>
        <i class="fa-solid fa-user" style={{color: '#000000'}}></i>
    </div>
    <div class="menu-bar">
        <i class="fa-solid fa-bars"></i>
    </div>
</div>
        </>
    )
}

export default Navbar;