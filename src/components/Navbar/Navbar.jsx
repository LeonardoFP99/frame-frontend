import logo from "../../images/framelogo.png";
import { Button, Nav, ImageLogo, InputSpace } from "./NavbarStyled";

export function Navbar(){
    return(
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search for a title"/>
                </InputSpace>

                <ImageLogo src={logo} alt="Logo" />

                <Button>SIGNIN</Button>
            </Nav>
        </>
    )
}