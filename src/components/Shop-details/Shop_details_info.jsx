import React from "react";

const Shop_details_info = () => {
  return (
    <>
      <div className="shop-detail-info">
        <div className="container">
          <div className="shop-detail-inner">
            <div className="shop-detail-col">
              <div className="shop-detail-img">
                <img
                  src="/react-foodgalaxy/assets/images/style3-service1.jpg"
                  alt="style3-service1"
                />
              </div>
            </div>
            <div className="shop-detail-col">
              <div className="shop-detail">
                <h3>
                  BURGERS <span>$23.00</span>
                </h3>
              </div>
              <div class="product-details-review">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>2 Customer reviews</span>
              </div>
              <div class="shop-details-content">
                <p>
                  Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis
                  des mauris commodo venenatis ligula commodo leez sed blandit
                  convallis dignissim onec vel pellentesque neque.
                </p>
                <span>
                  REF. 4231/406
                  <br />
                  Available in store
                </span>
              </div>
              <div class="product-details-quantity">
                <h5>Choose quantity</h5>
                <form action="">
                    <input type="number"/>
                </form>
              </div>
              <div class="shop-details-btn">
                <a href="#">Add to whitelist</a>
                <a href="#">Add to cart</a>
              </div>
              <div class="shop-details-social">
                <div class="shop-details-social-title">
                  <h3>Share with friends</h3>
                </div>
                <div class="shop-details-social-link">
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-pinterest-p"></i>
                  </a>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop_details_info;
