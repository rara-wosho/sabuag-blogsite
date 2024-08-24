function HeroSection() {
  return (
    <section
      id="hero-section"
      className="d-flex align-items-center justify-content-center position-relative"
    >
      <div className="container d-flex align-items-center justify-content-center hero-wrapper">
        <div className="row w-100">
          <div className="col-lg-7 col-12 col-md-12 ps-lg-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            <div className="hero-main">
              <h1 className="text-center text-lg-start fs-4 fw-semibold ustp-secondary">
                SABUAG - Campus Publication
              </h1>
              <h1 className="text-center text-lg-start ustp-primary fw-bold sabuag-title">
                Sustainable and Achievable Broadcasting with Unbiased and
                Attainable Goals
              </h1>
              <p className="fs-5 fw-normal text-muted text-center text-lg-start">
                ”Journalism can never be silent: that is its greatest virtue and
                its greatest fault.”
              </p>
            </div>
            <div className="hero-middle d-flex align-items-center mb-2">
              <button className="rounded-2 mx-1 py-2 btn btn-outline-dark">
                Be a Member
              </button>

              <button className="rounded-2 mx-1 py-2 px-3 btn btn-warning">
                Read Blogs
              </button>
            </div>  
          </div>
          <div className="col-lg-5 col-12 col-md-12">
            <div className="d-none sabuag-logo-wrapper d-lg-flex align-items-center justify-content-center">
              <img
                width="380"
                className="img-fluid sabuag-logo"
                src="public/images/379634318_6372257832885130_286660119582776002_n-removebg-preview (1).png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
