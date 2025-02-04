import React from "react";

const Portfolio = () => {
  return (
    <>
      {/* start portfolio area  */}

      <div className="portfolio-main">
        <div className="portfolio-inner">
          <div className="portfolio-title">
            <h3>Chef has to run outside</h3>
          </div>
          <div className="inner-img">
            <div className="col">
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src="/assets/images/portfolio1.png" alt="portfolio1" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img
                    src="/assets/images/portfolio2.png"
                    alt="portfolio2.png"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src="/assets/images/portfolio3.png" alt="portfolio3" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src="/assets/images/portfolio4.png" alt="portfolio4" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <img src="/assets/images/portfolio5.png" alt="portfolio5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end portfolio area  */}
    </>
  );
};

export default Portfolio;
