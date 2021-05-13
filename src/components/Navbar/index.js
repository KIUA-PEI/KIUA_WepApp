import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">KIUA</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="aaa" smooth={true}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" smooth={true}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="users" smooth={true}>Users</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="parking" smooth={true}>Parking</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='signin' smooth={true}>Graphs</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
