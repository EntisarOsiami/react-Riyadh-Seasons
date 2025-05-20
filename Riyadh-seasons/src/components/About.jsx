const About = () => {
  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-md-2 col-lg-2">
          <div className="d-flex flex-column gap-3 h-100">
            <div className="rounded bg-dark p-4 flex-grow-1 d-flex align-items-center justify-content-center">
              <img
                src={"/RiyadhSeason.webp"}
                width="85"
                height="110"
                alt="Logo"
              />
            </div>

            <div className="d-flex gap-3">
              <div
                className="rounded bg-dark flex-shrink-0"
                style={{ width: "64px", height: "64px" }}
              />
              <div className="rounded p-3 text-white bg-dark text-center flex-grow-1">
                <p className="mb-0 text-uppercase small fw-bold">STARTS</p>
                <p className="mb-0 display-6 fw-bold">12</p>
                <p className="mb-0 small">October</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-10 col-lg-4">
          <div className="rounded p-4 text-white bg-dark h-100">
            <h2 className="fw-bold mb-3">About Riyadh Season</h2>
            <p className="mb-0 small">
              Riyadh Season is one of the world's largest winter entertainment
              events. Variety of food from around the world, courtesy of
              exclusive restaurants — plus countless exciting surprises. The
              festivities capture the essence of Saudi, from its Najdi heritage
              to its present-day dynamism.
            </p>
          </div>
        </div>

        <div className="col-md-12 col-lg-6">
          <iframe
            className="w-100"
            style={{ aspectRatio: "16/9", minHeight: "300px" }}
            src="https://www.youtube.com/embed/g8-NjAOWhME"
            title="Riyadh Season 2023 New Identity"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
