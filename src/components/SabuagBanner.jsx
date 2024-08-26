export default function SabuagBanner() {
  const sabuag_poster = "public/images/image0.jpeg";
  return (
    <section
      id="sabuag-banner"
      className="bg-secondary d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${sabuag_poster})`,
      }}
    >
      <div className="container d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-lg-2 w-100 p-2">
          <div className="col d-flex flex-column align-items-start justify-content-center">
            <div className="banner-upper">
              <p className="fs-4 mb-1 text-light fw-semibold ">SABUAG</p>
              <h1 className="ustp-secondary fw-bold fs-1">
                Sustainable and Achievable Broadcasting with Unbiased and
                Attainable Goals
              </h1>
              <p className="fs-5 text-light">
                We are the official publication arm of USTP - Panaon,
                dedicated to delivering the latest news, stories, and insights
                about our school community. 
              </p>
            </div>
            {/* <div className="banner-middle mt-2">
              <div className="p-2 border bg-light rounded-2 d-flex align-items-center">
                <p className="mb-0 pe-5 ps-3">Sabuag@gmail.com</p>
                <button className="btn btn-warning">Contact Us</button>
              </div>
            </div> */}
          </div>
          <div className="col">
            <div className="d-none sabuag-logo-wrapper d-lg-flex align-items-center justify-content-center">
              <img
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
