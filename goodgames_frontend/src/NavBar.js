import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import navbarLogo from "./images/navbar-logo.png"

class NavBar extends Component {
    state = { loggedIn: true }

    activeLink = {fontWeight: "bold", fontSize: "2.5em", color: "#007d7d", }

    render() {
        if (this.state.loggedIn) { 
        return (
            // The shit here changes url but not render, refreshes fine though? 
                <nav>
                    <img src={navbarLogo} alt="goodgames logo"></img>
                    <div id="link-div">
                        <NavLink activeStyle={this.activeLink} to={'/home'}  className="nav-link">Home</NavLink>
                        <NavLink activeStyle={this.activeLink} to={'/about'}  className="nav-link">About</NavLink>   
                        <NavLink activeStyle={this.activeLink} to={'/news'}  className="nav-link">News</NavLink>   
                        <NavLink activeStyle={this.activeLink} to={'/games'}  className="nav-link">Games</NavLink>    
                        <NavLink activeStyle={this.activeLink} to={'/reviews'}  className="nav-link">Reviews</NavLink>    
                        <NavLink activeStyle={this.activeLink} to={'/contact'}  className="nav-link">Contact</NavLink>
                        <p onClick={() => this.props.logout()}>Logout</p>
                    </div>  
                </nav>
            
        );
    } 
        else {
            return null
        }
    }
}

export default NavBar;