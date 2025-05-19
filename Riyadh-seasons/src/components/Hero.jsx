import React from "react";
import heroVideo from "../assets/hero-Video_3.mp4";

function Hero() {
  return (
    <div className="position-relative">
      <div className="position-relative vh-100 overflow-hidden">        <video
          className="position-absolute w-100 h-100 object-fit-cover"
          autoPlay
          loop          
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        <div className="container-xxl position-relative h-100 z-1 d-flex flex-column">
          <div className="row h-100 align-items-end p-2 text-white">
            <div className="col-md-8 col-lg-8">
              <h1 className="display-1 display-md-3 fw-bold mb-2 lh-sm">
                Welcome to Riyadh Season 2024
              </h1>
            </div>
            <div className="col-md-4 gap-2 d-flex justify-content-center align-items-start">
              <button className="btn btn-outline-light btn-lg rounded-pill mb-4">
                Explore
              </button>

              <button className="btn btn-primary btn-lg rounded-pill mb-4">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
