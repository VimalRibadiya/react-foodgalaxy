import React from "react";

const Shop = () => {
  return (
    <>
      {/* start shop area  */}
    
      <div className="shop-main">
        <div className="container">
          <div className="shop-inner">
            <div className="shop-title">
              <h3>The secret is at the table</h3>
            </div>
            <div className="shop-items">
              <div className="col">
                <div className="box">
                  <img src="/assets/images/shop1.png" alt="shop1" />
                  <h5>Apricot Chicken</h5>
                  <div className="icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>£18.30</p>
                  <a href="#">Add to cart</a>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src="/assets/images/shop2.png" alt="shop2" />
                  <h5>American Cheese</h5>
                  <div className="icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>£20.30</p>
                  <a href="#">Add to cart</a>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src="/assets/images/shop3.png" alt="shop3" />
                  <h5>Big Cheeseburger</h5>
                  <div className="icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>£22.30</p>
                  <a href="#">Add to cart</a>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <img src="/assets/images/shop4.png" alt="shop4" />
                  <h5>Sleek Iron Clock</h5>
                  <div className="icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                  <p>£24.30</p>
                  <a href="#">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end shop area  */}
    </>
  );
};
export default Shop;
