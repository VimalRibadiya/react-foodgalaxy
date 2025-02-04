import React from "react";

const Brand_area = () => {
  return (
    <>
      {/* start brand area  */}
      <div className="brand-area-main">
        <div className="container">
          <div className="brand-area-inner">
            <div className="col">
              <img src="/assets/images/brand1.png" alt="brand1" />
            </div>
            <div className="col">
              <img src="/assets/images/brand2.png" alt="brand2" />
            </div>
            <div className="col">
              <img src="/assets/images/brand3.png" alt="brand3" />
            </div>
            <div className="col">
              <img src="/assets/images/brand4.png" alt="brand4" />
            </div>
            <div className="col none">
              <img src="/assets/images/brand5.png" alt="brand5" />
            </div>
          </div>
        </div>
      </div>
      {/* end brand area  */}
    </>
  );
};
export default Brand_area;
