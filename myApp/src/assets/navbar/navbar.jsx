import{useRef} from "react";
import './navbar.css'
function Navbar() {
const navRef = useRef();
const showNavbar = () => {
navRef.current.classList.toggle("responsive_nav");
}
    return(
        <header>
         <h3 className='box'>Logo</h3>

           
             <nav ref={navRef}>
<a href="#">Home</a>
<a href="#">My work</a>
<a href="#">Blog</a>
<a href="#">About me</a>
<button className="nav-btn nav-close-btn" onClick={showNavbar}>
x
</button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>=</button>
        </header>
    )
}
export default Navbar