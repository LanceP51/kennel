import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><NavLink className="nav-link" exact to="/" activeStyle={{
              fontWeight: "bold", color: "lime"}}>Home</NavLink></li>
            <li><NavLink className="nav-link" to="/animals" activeStyle={{
              fontWeight: "bold", color: "lime"}}>Animals</NavLink></li>
            <li><NavLink className="nav-link" to="/locations" activeStyle={{
              fontWeight: "bold", color: "lime"}}>Locations</NavLink></li>
            <li><NavLink className="nav-link" to="/employees" activeStyle={{
              fontWeight: "bold", color: "lime"}}>Employees</NavLink></li>
            <li><NavLink className="nav-link" to="/owners" activeStyle={{
              fontWeight: "bold", color: "lime"}}>Owners</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;