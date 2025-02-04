import React from "react";

const Team_area = () => {
  return (
    <>
      {/* start team area  */}

      <div className="team-area-main">
        <div className="container">
          <div className="team-area-inner">
            <div className="team-title">
              <h3>Our Talented Chefs</h3>
            </div>
            <div className="team-boxes">
              <div className="team-box">
                <div className="team-img">
                  <img src="/react-foodgalaxy/assets/images/team1.jpg" alt="team1" />
                  <div className="team-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-text">
                  <h3>
                    <a href="#">John Dey</a>
                  </h3>
                  <p>Manager</p>
                </div>
              </div>
              <div className="team-box">
                <div className="team-img">
                  <img src="/react-foodgalaxy/assets/images/team2.jpg" alt="team2" />
                  <div className="team-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-text">
                  <h3>
                    <a href="#">Willam Smith</a>
                  </h3>
                  <p>Chef</p>
                </div>
              </div>
              <div className="team-box">
                <div className="team-img">
                  <img src="/react-foodgalaxy/assets/images/team3.jpg" alt="team3" />
                  <div className="team-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-text">
                  <h3>
                    <a href="#">Eloise Smith</a>
                  </h3>
                  <p>Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end team area  */}
    </>
  );
};

export default Team_area;
