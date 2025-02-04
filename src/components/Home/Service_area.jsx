import React from "react";

const Service_area = () => {
  return (
    <>
      {/* start service area  */}
      <div className="service-main">
        <div className="container">
          <div className="service-inner">
            <div className="service-item-col">
              <div className="service-item1">
                <div className="inner-item">
                  <h4>
                    Any day <br />
                    offers
                  </h4>
                  <p>
                    New Phenomen <br />
                    Burger Taste
                  </p>
                  <br />
                  <p>$18.90</p>
                </div>
              </div>
            </div>
            <div className="service-item-col">
              <div className="service-item2">
                <div className="inner-item">
                  <h4>
                    Find a Poco <br />
                    store near you
                  </h4>
                  <p>
                    New Phenomen <br />
                    Burger Taste
                  </p>
                  <br />
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="service-item-col">
              <div className="service-item3">
                <div className="inner-item">
                  <h4>
                    Other <br />
                    flavors
                  </h4>
                  <p>
                    Save room. We <br />
                    made salats
                  </p>
                  <br />
                  <p>$18.90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end service area  */}
    </>
  );
};
export default Service_area;
