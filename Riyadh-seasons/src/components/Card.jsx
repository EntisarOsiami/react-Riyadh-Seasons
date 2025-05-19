import React from "react";

function Card({ bgImage, logoImage, Image2nd }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className="position-relative d-block border-0 rounded overflow-hidden"
        style={{ aspectRatio: "3 / 2.2" }}
      >
        <img
          src={bgImage}
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1"
        />

        <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 w-100 p-3 bg-dark bg-opacity-75">
          <div className="w-100 mb-2">
            <img
              src={logoImage}
              className="d-block mx-auto"
              style={{ maxWidth: "45%" }}
            />
          </div>
          {Image2nd ? (
            <img
              src={Image2nd}
              className="d-block mx-auto"
              style={{ maxWidth: "25%" }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
