const Recap = () => {
  return (
    <section className="text-white position-relative overflow-hidden py-5">
      <svg
        className="recap position-absolute top-0 start-0"
        viewBox="0 0 812 705"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M811.5 705H596.5H401.5L309.092 648.995L-36 449.991C81.9193 271.136 235.461 117.778 414.53 0L811.5 705Z"
          fill="#987BFF"
        />
      </svg>

      <div className="container position-relative">
        <div className="row align-items-center gy-5">
          <div className="col-md-6 position-relative">
            {" "}
            <div className="p-4 position-relative" style={{ zIndex: 1 }}>
              <div
                className="mb-3 d-flex align-items-center justify-content-center text-white"
                style={{ width: "70px", height: "70px" }}
              >
                <i className="bi bi-youtube fs-1"></i>
              </div>
              <h3 className="fw-bold mb-4">Watch Riyadh Season 2023 Recap</h3>
              <a
                href="https://www.youtube.com/c/riyadhseason"
                target="_blank"
                className="btn btn-outline-light"
              >
                Watch more moments
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <video
              controls
              playsInline
              disablePictureInPicture
              poster="https://images.ctfassets.net/vy53kjqs34an/5PcL5NRQvrljV31YLYi2UE/738df0fc1368a14eaec969afc8eb555a/Screenshot_2024-09-02_192441.png"
              className="w-100 rounded"
            >
              <source
                src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recap;
