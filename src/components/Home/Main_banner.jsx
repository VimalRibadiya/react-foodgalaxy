import React from "react";

const Main_banner = () => {
  return (
    <>
      {/* start main banner */}
      <div className="main-banner">
        <div className="container">
          <div className="main-inner">
            <div className="leaf1">
              <img src="/react-foodgalaxy/assets/images/leaf1.png" alt="leaf1" />
            </div>
            <div className="leaf2">
              <img src="/react-foodgalaxy/assets/images/leaf2.png" alt="leaf2" />
            </div>
            <div className="leaf3">
              <img src="/react-foodgalaxy/assets/images/leaf3.png" alt="leaf3" />
            </div>
            <div className="leaf4">
              <img src="/react-foodgalaxy/assets/images/leaf4.png" alt="leaf4" />
            </div>
            <div className="main-col">
              <div className="item left-col">
                <div className="text">Good Food - Good life</div>
                <h1>
                  BEST BURGERS <br />
                  IN GALAXY
                </h1>
                <p>
                  We can’t think of a better way to celebrate summer with these
                  Plus, <br />
                  try our over-the-top creative cheeseburgers.
                </p>
                <br />
                <a href="#" className="action-btn">
                  Get Start
                </a>
              </div>
              <div className="item right-col">
                <div className="item-inner">
                  <img
                    src="/react-foodgalaxy/assets/images/hero-thumb.png"
                    alt="hero-thumb"
                    className="herothumb"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end main banner  */}
    </>
  );
};
export default Main_banner;
