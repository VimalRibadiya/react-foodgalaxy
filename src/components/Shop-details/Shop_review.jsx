import React from "react";

const Shop_review = () => {
  return (
    <>
      <div className="review-main">
        <div className="container">
          <div className="review-inner">
            <div class="review-title">
              <h3>2 Reviews</h3>
            </div>
            <div className="review-content">
              <div class="review-icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="review-img">
                <img src="/react-foodgalaxy/assets/images/review-1-1.jpg" alt="review-1-1" />
              </div>
              <div class="review-comment">
                <h2>Michael jordan</h2>
                <span>22 January, 2023</span>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting unchanged. It was popularised in
                  the sheets containing lorem ipsum is simply free text. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Vestibulum sollicitudin varius mauris
                  non dignissim.
                </p>
              </div>
            </div>
            <div className="review-content">
              <div class="review-icon">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="review-img">
                <img src="/react-foodgalaxy/assets/images/review-1-2.jpg" alt="review-1-1" />
              </div>
              <div class="review-comment">
                <h2>Angel Jara</h2>
                <span>28 January, 2023</span>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting unchanged. It was popularised in
                  the sheets containing lorem ipsum is simply free text. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Vestibulum sollicitudin varius mauris
                  non dignissim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop_review;
