import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
        <h1 className='title'>A Guide to Exercise and Nutrition</h1>
        <ul className="navigate">
            <li className="home">
                <Link to={"/"}>Home</Link>
            </li>

            <li className="exercise">
                <Link to={"/exercises"}>Exercise</Link>
            </li>

            <li className="foods">
                <Link to={"/foods"}>Foods</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar