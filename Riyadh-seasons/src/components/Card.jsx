import React from "react";

function Card({ bgImage, logoImage, Image2nd, isNew = false }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className={`position-relative rounded w-100 h-100 ${
          isNew ? "border border-success border-2" : "border-0"
        }`}
        style={{ aspectRatio: "3 / 2.2", overflow: "hidden" }}
      >
        {isNew && (
          <div className="position-absolute top-0 start-50 translate-middle bg-success text-white px-3 py-1 rounded-pill mt-2 fw-bold small z-2">
            NEW!
          </div>
        )}
        <img
          src={bgImage}
          className="w-100 h-100 object-fit-cover position-absolute"
          alt="background"
          style={{ inset: 0, zIndex: -1 }}
        />

        <div className="h-100 w-100 p-3 d-flex flex-column justify-content-center align-items-center text-center card-overlay">
          <img
            src={logoImage}
            className="d-block mx-auto mb-2"
            style={{ maxWidth: "45%" }}
          />

          {Image2nd && (
            <img
              src={Image2nd}
              className="d-block mx-auto"
              style={{ maxWidth: "25%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
