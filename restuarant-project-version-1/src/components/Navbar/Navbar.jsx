import React from "react";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <h1 className="app__heading">CHAMPARAN CENTRAL</h1>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#Home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#About">About</a>
      </li>
      <li className="p__opensans">
        <a href="#Menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#Awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#Contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
