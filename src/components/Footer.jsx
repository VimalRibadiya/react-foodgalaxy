import React from "react";

const Footer = () => {
  return (
    <>
      {/* start main-footer area */}

      <div class="main-footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-inner">
              <div class="footer-col">
                <div class="left-heading-title">
                  <strong>Contact Info</strong>
                </div>
                <div class="left-link-desc">
                  <ul>
                    <li>
                      <i class="fa-solid fa-location-dot"></i>16/B
                      California,USA
                    </li>
                    <li>
                      <i class="fa-solid fa-phone"></i>+33 156 78 89 56
                    </li>
                    <li>
                      <i class="fa-solid fa-angles-right"></i>example@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-col">
                <div class="mid-heading-title">
                  <img src="/assets/images/footer-logo.png" alt="footer-logo" />
                </div>
                <div class="mid-link-desc">
                  <div class="item">
                    <p>
                      Whisper to us about your feelings, and we <br />
                      will prepare what you need now.
                    </p>
                  </div>
                  <div class="icons">
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="footer-col">
                <div class="right-heading-title">
                  <strong>Working Hours</strong>
                </div>
                <div class="right-link-desc">
                  <ul>
                    <li>Mon – Fri: 7.00am – 6.00pm</li>
                    <li>Sat: 7.00am – 6.00pm</li>
                    <li>Sun: 8.00am – 6.00pm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end main-footer area */}
      {/* start footer-bottom area  */}

      <div className="footer-bottom-main">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-bottom-col">
              <div className="copyright-text">
                <p>© 2022 All Rights Reserved Dreamhub</p>
              </div>
            </div>
            <div className="footer-bottom-col">
              <div className="card-img">
                <a href="#">
                  <img src="assets/images/card1.jpg" alt="card1" />
                </a>
                <a href="#">
                  <img src="assets/images/card2.jpg" alt="card1" />
                </a>
                <a href="#">
                  <img src="assets/images/card3.jpg" alt="card3" />
                </a>
                <a href="#">
                  <img src="assets/images/card4.jpg" alt="card4" />
                </a>
                <a href="#">
                  <img src="assets/images/card5.jpg" alt="card5" />
                </a>
                <a href="#">
                  <img src="assets/images/card6.jpg" alt="card6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end footer-bottom area */}
    </>
  );
};
export default Footer;
