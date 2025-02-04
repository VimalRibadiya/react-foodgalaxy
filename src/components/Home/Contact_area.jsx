import React from "react";

const Contact_area = () => {
  return (
    <>
      {/* start contact area  */}

      <div className="contact-area-main">
        <div className="contact-area-inner">
          <div className="align-items-center">
            <div className="contact-col">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.6194043224186!2d89.61168491495718!3d25.650754283687256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd33c03fbe69cb%3A0x273671e159f8b39e!2sRDRS%20Ulipur!5e0!3m2!1sen!2sbd!4v1636872467628!5m2!1sen!2sbd"
                  width="750"
                  height="700"
                  style={{border: 0}}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-box">
                <div className="contact-title">
                  <h4>Book Your Table</h4>
                </div>
                <div className="contact-form-box">
                  <form action="" method="post">
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="email"
                          placeholder="E-Mail Address"
                        />
                      </div>
                      <div className="col">
                        <input type="text" name="phone" placeholder="Phone" />
                      </div>
                      <div className="col">
                        <input type="date" name="date" />
                      </div>
                      <div className="col">
                        <input type="time" name="time" />
                      </div>
                      <div className="col">
                        <select name="" id="">
                          <option value="">2 people</option>
                          <option value="">1 people</option>
                        </select>
                      </div>
                      <div className="col">
                        <button>Book Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end contact area  */}
    </>
  );
};
export default Contact_area;
