import logo from "../../images/framelogo.png";
import "./Navbar.css";

export function Navbar(){
    return(
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search for a title"/>
                </div>

                <img src={logo} alt="Logo" />

                <button>SIGNIN</button>
            </nav>
        </>
    )
}