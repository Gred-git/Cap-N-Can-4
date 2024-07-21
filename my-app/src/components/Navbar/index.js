import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>

                    <NavLink to="/" > Home </NavLink>
                    <NavLink to="/Search" > Search </NavLink>
                    <NavLink to="/Challenges" activeStyle> Challenges </NavLink>
                    <NavLink to="/Forums" activeStyle> Forums </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;