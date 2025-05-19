import React from "react";
import riyadhSeasonLogo from "../assets/RiyadhSeason.webp";

function Header() {
  return (
    <header className="w-100 bg-transparent text-white  top-0 start-0 end-0 z-3 position-absolute">
      <nav className="container-xxl py-2">
        <div className="row align-items-center">
          <div className="col-4 d-flex justify-content-start">
            <button className="btn p-0 border-0">
              <div
                style={{ width: "24px", height: "18px" }}
                className="d-flex flex-column justify-content-between"
              >
                <span
                  className="bg-white"
                  style={{ height: "2px", width: "100%" }}
                ></span>
                <span
                  className="bg-white"
                  style={{ height: "2px", width: "100%" }}
                ></span>
                <span
                  className="bg-white"
                  style={{ height: "2px", width: "100%" }}
                ></span>
              </div>
            </button>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <a className="logo">
              <img
                src={riyadhSeasonLogo}
                alt="Riyadh Season Logo"
                height="110"
                width="85"
                className="d-block"
              />
            </a>
          </div>

          <div className="col-4 d-flex justify-content-end gap-3 align-items-center">
            <button className="btn text-white fw-bold border-0 p-0">
              العربية
            </button>
            <a
              href="https://r2.riyadhseason.com/RS_2024_14.pdf"
              target="_blank"
              className="btn btn-primary rounded-pill px-3"
            >
              View Booklet
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}


export default Header;
