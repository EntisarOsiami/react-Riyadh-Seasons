import React from "react";
import riyadhSeasonLogo from "../assets/RiyadhSeason.webp";

function Footer() {
  return (
    <footer className="pt-4 text-white bg-black">
      <div className="container-xxl px-3 pb-4">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4 py-4">
          <img src={riyadhSeasonLogo} width="85" height="110" alt="Logo" />
          <div className="d-flex gap-2">
            <a
              className="d-inline-flex align-items-center justify-content-center p-2 text-white"
              href="#"
              target="_blank"
              style={{ width: "45px", height: "45px" }}
            >
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a
              className="d-inline-flex align-items-center justify-content-center p-2 text-white"
              href="#"
              target="_blank"
              style={{ width: "45px", height: "45px" }}
            >
              <i className="bi bi-twitter-x fs-4"></i>
            </a>
            <a
              className="d-inline-flex align-items-center justify-content-center p-2 text-white"
              href="#"
              target="_blank"
              style={{ width: "45px", height: "45px" }}
            >
              <i className="bi bi-instagram fs-4"></i>
            </a>
          </div>
        </div>
        <div className="border-top border-secondary pt-4 d-flex flex-column flex-lg-row justify-content-between">
          <nav className="py-2 pb-3">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 mb-0 text-uppercase text-white ">
              <li>
                <a className="text-white px-2 text-decoration-none" href="/privacy" target="_blank">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-white px-2 text-decoration-none" href="/terms" target="_blank">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center text-white-50 small mb-2 mb-lg-0">
            &copy; 2024 RIYADH SEASON. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
