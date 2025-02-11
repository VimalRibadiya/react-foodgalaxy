import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function showsidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "flex";
  }
  function hidesidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";
  }
  function pages_menu() {
    const pagesub = document.getElementById("pages-sub-menu")
    const plus = document.getElementById("plus")
    const minus1 = document.getElementById("minus1")
    pagesub.style.display = "block";
    plus.style.display ="none";
    minus1.style.display = "block";
  }
  function shop_menu() {
    const shopsub = document.getElementById("shop-sub-menu")
    const plus2 = document.getElementById("plus2")
    const minus2 = document.getElementById("minus2")
    shopsub.style.display = "block";
    plus2.style.display ="none";
    minus2.style.display = "block";
  }
  function page_hide() {
    const pagesub = document.getElementById("pages-sub-menu")
    const plus = document.getElementById("plus")
    const minus1 = document.getElementById("minus1")
    pagesub.style.display = "none";
    plus.style.display = "block";
    minus1.style.display = "none";
  }
  function shop_hide() {
    const shopsub = document.getElementById("shop-sub-menu")
    const plus2 = document.getElementById("plus2")
    const minus2 = document.getElementById("minus2")
    shopsub.style.display = "none";
    plus2.style.display ="block";
    minus2.style.display = "none";
  }
  return (
    <>
      <div className="header-main">
        <div className="container">
          <div className="header-inner">
            <div className="header-col-1">
              <a href="#">
                <img
                  src="/react-foodgalaxy/assets/images/dreamhub-logo.png"
                  alt="dreamhub-logo"
                />
              </a>
            </div>
            <div className="header-col-2">
              <div className="header-menu">
                <ul>
                  <li className="hideonmobile">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hideonmobile">
                    <a href="#">Pages</a>
                    <ul className="pages-sub-menu">
                      <li>
                        <Link to="/components/Service">Service</Link>
                      </li>
                      <li>
                        <Link to="/components/Team">Team</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="hideonmobile">
                    <Link to="/components/About">About</Link>
                  </li>
                  <li className="hideonmobile">
                    <Link to="/components/Contact_us">Contact Us</Link>
                  </li>
                  <li className="hideonmobile">
                    <a href="#">Shop</a>
                    <ul className="shop-sub-menu">
                      <li>
                        <Link to="/components/Shop_main">Shop</Link>
                      </li>
                      <li>
                        <Link to="/components/Shop_details">Shop Details</Link>
                      </li>
                    </ul>
                  </li>
                  <div className="header-icons">
                    <ul>
                      <li className="hideonmobile">
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="hideonmobile">
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li className="hideonmobile">
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li className="hideonmobile">
                        <a href="#">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                      </li>
                      <li onClick={showsidebar} className="sidebar-button">
                        <a href="#">
                          <i class="fa-solid fa-bars"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
            <div id="sidebar">
              <ul>
                <li onClick={hidesidebar}>
                  <a href="#">
                    <i class="fa-solid fa-xmark"></i>
                  </a>
                </li>
                <li>
                  <Link to="/" onClick={hidesidebar}>Home</Link>
                </li>
                <li>
                  <a href="#">
                    Pages <i class="fa-solid fa-plus" id="plus" onClick={pages_menu}></i><i class="fa-solid fa-minus" id="minus1" onClick={page_hide}></i>
                  </a>
                  <ul id="pages-sub-menu">
                    <li>
                      <Link to="/components/Service" onClick={hidesidebar}>Service</Link>
                    </li>
                    <li>
                      <Link to="/components/Team" onClick={hidesidebar}>Team</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/components/About" onClick={hidesidebar}>About</Link>
                </li>
                <li>
                  <Link to="/components/Contact_us" onClick={hidesidebar}>Contact Us</Link>
                </li>
                <li>
                  <a href="#">
                    Shop <i class="fa-solid fa-plus" id="plus2" onClick={shop_menu}></i><i class="fa-solid fa-minus" id="minus2" onClick={shop_hide}></i>
                  </a>
                  <ul id="shop-sub-menu">
                    <li>
                      <Link to="/components/Shop_main" onClick={hidesidebar}>Shop</Link>
                    </li>
                    <li>
                      <Link to="/components/Shop_details" onClick={hidesidebar}>Shop Details</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
