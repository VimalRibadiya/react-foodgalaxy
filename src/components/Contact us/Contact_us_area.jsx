import React from "react";

const Contact_us_area = () => {
  return (
    <>
      <div className="contact-us-area-main">
        <div className="container">
          <div className="contact-us-area-inner">
            <div className="contact-col">
              <div className="contact-box">
                <div className="contact-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="contact-content">
                  <h5>Location</h5>
                  <p>40 Park Ave, Brooklyn</p>
                  <span>New York, New York 1111</span>
                </div>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-box">
                <div className="contact-icon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="contact-content">
                  <h5>Contact</h5>
                  <p>+1 800 000 111</p>
                  <span>contact@example.com</span>
                </div>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-box">
                <div className="contact-icon">
                  <i class="fa-solid fa-bell"></i>
                </div>
                <div class="contact-content">
                  <h5>Open Hours</h5>
                  <p>Lunch: 12PM – 2PM</p>
                  <span>Dinner: 6PM – 10PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_us_area;
