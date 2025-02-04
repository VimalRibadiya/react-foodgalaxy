import React from "react";

const Client = () => {
  return (
    <>
      {/* start client says area  */}

      <div className="client-main">
        <div className="container">
          <div className="client-inner">
            <div className="tomato1">
              <img src="/react-foodgalaxy/assets/images/testi-shape-1.png" alt="testi-shape-1" />
            </div>
            <div className="tomato2">
              <img src="/react-foodgalaxy/assets/images/testi-shape-2.png" alt="testi-shape-2" />
            </div>
            <div className="tomato3">
              <img src="/react-foodgalaxy/assets/images/testi-shape-3.png" alt="testi-shape-3" />
            </div>
            <div className="tomato4">
              <img src="/react-foodgalaxy/assets/images/testi-shape-4.png" alt="testi-shape-4" />
            </div>
            <div className="client-title">
              <h3>What your client says</h3>
            </div>
            <div className="client-content">
              <div className="img-content">
                <img src="/react-foodgalaxy/assets/images/testi.jpg" alt="testi" />
                <div className="quote">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
              </div>
              <div className="text-content">
                <h4>Nina Margaret</h4>
                <span>Design</span>
                <p>
                  In volutpat vehicula iaculis. Nullam dapibus velit vel
                  suscipit malesuada. <br />
                  Morbi tincidunt, dui tristique tincidunt faucibus, purus
                  sapien consectetur <br />
                  libero, vitae venenatis t dui purus, interdum eget urna nec,
                  mollis <br />
                  condimentum magna.
                </p>
              </div>
              <div className="star-icons">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end client says area */}
    </>
  );
};
export default Client;
