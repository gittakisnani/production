import React, { useState } from 'react';
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const cars = useSelector(selectCars)
  return (
    <header>
        <Logo src="/images/logo.svg"/>
        <Nav>
           <a href="#">Model S</a>
           <a href="#">Model 3</a>
           <a href="#">Model Y</a>
           <a href="#">Solar Roof</a>
           <a href="#">Solar Panels</a>
        </Nav>
        <RightNav>
           <a href='#'>Shop</a>
           <a href='#'>Accounts</a>
           <a href='#' className='burger-menu' onClick={_ => setShowNav(true)}>Menu</a>
           <a href='#' className="burger-icon" onClick={_ => setShowNav(true)}><FaBars /></a>
        </RightNav>
        <Aside showNav={showNav} className="aside">
            <CloseButton onClick={_ => setShowNav(false)}>
                <FaTimes onClick={_ => setShowNav(false)}/>
            </CloseButton>
            {cars && cars.map(car => (
                <a href='#'>{car}</a>
            ))}
            <a href='#'>Existing Inventory</a>
            <a href='#'>Used Inventory</a>
            <a href='#'>Trade-In</a>
            <a href='#'>Test Drive</a>
            <a href='#'>Insurance</a>
            <a href='#'>CyberTruck</a>
            <a href='#'>Roadster</a>
            <a href='#'>Semi</a>
            <a href='#'>Charging</a>
            <a href='#'>Charging</a>
            <a href='#'>Charging</a>
            <a href='#'>Charging</a>
            <a href='#'>PowerWall</a>
            <a href='#'>Commercial Energy</a>
            <a href='#'>Utilities</a>
            <a href='#'>Find Us</a>
            <a href='#'>Support</a>
            <a href='#'>Investor Relations</a>

        </Aside>

        <Overlay className={!showNav ? `no-overlay` : `overlay`}>
        </Overlay>
    </header>
  )
}

const Logo = styled.img`
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    @media (max-width: 768px) {
        display: none;
    };
    gap: 15px;
    a {
        color: #171a20;
        padding: 5px 10px;
    }

    a:hover {
        background-color: rgba(0, 0, 0, .1);
        border-radius: 100px;
    }
`

const RightNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 10px;
    a {
        color: #171a20;
        padding: 5px 10px;
    }

    a:hover {
        background-color: rgba(0, 0, 0, .1);
        border-radius: 100px;
    } 

    .burger-menu {
        @media (max-width: 768px) {
            display: none;
        }
    }

    .burger-icon {
        @media (min-width: 769px) {
            display: none;
        }
    }
`

const Aside = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    width: 300px;
    z-index: 10;
    padding: 20px 20px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: transform 0.2s;
    transform: ${({showNav}) => showNav ? "translateX(0);" : "translateX(100%);"}
    overflow: auto;
    a {
        padding: 5px 10px;
        border-radius: 100px;
        color: #171a20;
    }

    a:hover {
        background-color: rgba(0, 0, 0, .1);
    }

`;

const Overlay = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
`

const CloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 10px 40px;
    cursor: pointer;
`

export default Header