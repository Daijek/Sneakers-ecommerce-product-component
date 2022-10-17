import React, { useState } from "react";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import iconMenu from "../images/icon-menu.svg";
import iconClose from "../images/icon-close.svg";

const Navbar = () => {
  const [navModal, setNavModal] = useState(false);
  return (
    <div>
      <div className="navbar" style={{ minWidth: navModal ? "0" : "400px" }}>
        <h1
          className="navbar-modal"
          onClick={() => {
            setNavModal(true);
          }}
        >
          <img src={iconMenu} alt="icon menu" />
        </h1>
        <h1 className="sneakers">sneakers</h1>
        <nav>
          <ul>
            <div>
              <li>Collections</li>
            </div>
            <div>
              {" "}
              <li>Men</li>
            </div>
            <div>
              <li>Women</li>
            </div>
            <div>
              <li>About</li>
            </div>
            <div>
              <li>Contact</li>
            </div>
          </ul>
        </nav>
        <div className="rightSide">
          <div className="cart">
            {" "}
            <img src={cart} alt="cart" />
            <div>
              <p>3</p>
            </div>
          </div>

          <img src={avatar} alt="avatar" />
        </div>
      </div>
      {navModal && (
        <div className="nav-modal">
          <div>
            <h1
              onClick={() => {
                setNavModal(false);
              }}
            >
              <img src={iconClose} alt="close menu button" />
            </h1>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
