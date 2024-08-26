function MemberCard({ image, name, position, address }) {
  return (
    <div className="member-card p-2 position-relative d-flex flex-column">
      <div className="img-container position-relative">
        <img
          className="member-pic rounded-4"
          src={image}
          alt="something went wrong with the image"
        />
        {/* <h4 className="member-name text-white mb-0">{name}</h4> */}
      </div>
      {/* <div className="membercard-details pt-3 pb-2 d-flex flex-column align-items-center">
        <h5 className="mb-0 text-center">{position}</h5>
        <p className="mb-0 text-muted">{address}</p>
        <p className="mb-0 text-muted">BSIT 3A</p>
      </div> */}
      {/* <div className="social-icons d-flex justify-content-center mt-auto pt-2">
        <i className="p-2 rounded-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </i>
        <i className="p-2 rounded-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-map-pin-house"
          >
            <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
            <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
            <path d="M18 22v-3" />
            <circle cx="10" cy="10" r="3" />
          </svg>
        </i>
        <i className="p-2 rounded-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </i>
      </div> */}
      <div className="membercard-body position-relative pb-4 px-3 rounded-4 d-flex flex-column align-items-center justify-content-start overflow-hidden">
        <h5 className=" ustp-primary fw-semibold text-center">{name}</h5>
        <p className="text-black fw-normal text-center mb-1">{position}</p>
        {/* <p className="text-muted mb-1 fs-7">BSIT 3A</p> */}
        {/* <div className="social-icons d-flex justify-content-center mt-auto pt-2">
          <i className="p-2 rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-map-pin-house"
            >
              <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
              <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
              <path d="M18 22v-3" />
              <circle cx="10" cy="10" r="3" />
            </svg>
          </i>
          <i className="p-2 rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </i>
        </div> */}
      </div>
    </div>
  );
}

export default MemberCard;
