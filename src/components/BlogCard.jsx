import { Link } from "react-router-dom";

function BlogCard({ main_image, blog_id, title, blog_text }) {
  return (
    <Link to="/article" className="text-decoration-none">
      <div className="blog-card rounded-4 overflow-hidden">
        <div className="img-container rounded-4 overflow-hidden position-relative mb-3">
          <img src={main_image} alt="" className="img-fluid" />
        </div>
        <div className="blogcard-body">
          <div className="blogcard-title fw-semibold fs-4 mb-2 text-uppercase">
            {title}
          </div>
          <div className="blogcard-desc">
            <p className="text-secondary blog-text mb-3 fs-65">{blog_text}</p>
          </div>
          <div className="blogcard-details d-flex align-items-center justify-content-start mb-4">
            <p className="text-muted mb-0 fs-7 me-2">
              <img
                className="writer-image me-2 rounded-circle img-fluid"
                src="https://i.pinimg.com/originals/e0/55/39/e0553957d224f7818cc586499dcc7210.jpg"
                alt=""
              />
              <span className="ustp-secondary txt-serif">Israel De Vera</span>
            </p>
            <p className="text-muted mb-0 fs-7">June 17 2023</p>
          </div>
          {/* <div className="d-flex align-items-center mb-1">
            <p className="continue-reading fs-7 mb-0 text-secondary">Continue reading</p>
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="lightgray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </i>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
