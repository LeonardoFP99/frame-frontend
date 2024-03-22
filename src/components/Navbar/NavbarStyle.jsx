import styled from "styled-components";

export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    i {
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        color: #757575;
        border-radius: 0.5rem;
        padding: 0.5rem;
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.5rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: 0.5rem;

        &:focus {
            border: 1px solid #6969ff;
        }

    }

`

export const ImageLogo = styled.img`
    width: 10rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    /* position: fixed;
    top: 0; */
    background: #fff;
    z-index: 1;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const Button = styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    background-color: #6969ff;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, Arial;
    /* width: 40%; */
    font-weight: 500;
    letter-spacing: 0.1rem;

    &:hover {
        background-color: #2121ff;
    }
`