
import './App.css';
import React from 'react'
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TimeInfo from './TimeInfo';

const NavigationBar = () => {
    const userData = JSON.parse(sessionStorage.getItem("userName"));
    const location = useLocation();

    const clearStorage = (e) => {
        e.preventDefault();
        sessionStorage.clear("userName")
        alert('Session Storage has been cleard');
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
                <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav style={{width:"100%"}}>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/movies">Movies</NavLink>
                        <NavLink href="/about/defaultname">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                        <NavLink href="/registration" style={userData ? {visibility:"hidden", display:"none"}:{}}>Registration</NavLink>
                        <NavLink href="/editregistration" style={userData ? {}: {visibility:"hidden", display:"none"}}>Edit Registration</NavLink>
                        <NavLink href="/login" style={userData ? {visibility:"hidden", display:"none"}:{}}>Login</NavLink>
                        <NavLink href="/#" onClick={clearStorage} style={userData ? {}: {visibility:"hidden", display:"none"}} className="btn btn-dark">Logout</NavLink>
                        {/* <NavLink href="/product">Products</NavLink> */}
                        {/* <NavLink href="/admin">Admin</NavLink> */}
                        <NavLink className="ms-auto"><TimeInfo/></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default NavigationBar
