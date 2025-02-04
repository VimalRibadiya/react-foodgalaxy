import React from "react";

const Menu_main = () => {
  return (
    <>
      {/* start menu area  */}

      <div className="menu-main">
        <div className="container">
          <div className="menu-inner">
            <div className="menu-title">
              <h3>MENUS</h3>
            </div>
            <div className="menu-item-inner">
              <div className="menu-item">
                <img src="/react-foodgalaxy/assets/images/feature-1.jpg" alt="feature-1" />
                <div className="menu-text">
                  <h4>PIZZA</h4>
                </div>
              </div>
              <div className="menu-item">
                <img src="/react-foodgalaxy/assets/images/feature-2.jpg" alt="feature-2" />
                <div className="menu-text">
                  <h4>BURGER</h4>
                </div>
              </div>
              <div className="menu-item">
                <img src="/react-foodgalaxy/assets/images/feature-3.jpg" alt="feature-3" />
                <div className="menu-text">
                  <h4>KIDS MENU</h4>
                </div>
              </div>
              <div className="menu-item">
                <img src="/react-foodgalaxy/assets/images/feature-4.jpg" alt="feature-4" />
                <div className="menu-text">
                  <h4>COMBO</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end menu area  */}
    </>
  );
};

export default Menu_main;
