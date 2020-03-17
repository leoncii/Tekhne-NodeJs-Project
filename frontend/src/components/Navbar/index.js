import React from 'react'
import { Nav } from './style'
import { Ul, Li, A } from './style'
import { Logo } from '../Logo'

export const Navbar = () => {
    return (
        <Nav className="navigation-menu">
         <Logo />       
            <Ul>
                <Li><a href="">Register</a></Li>
                <Li><a href="">About Us</a></Li>
                <Li><a href="">Contact Us</a></Li>
            </Ul>
        </Nav>
    )
}