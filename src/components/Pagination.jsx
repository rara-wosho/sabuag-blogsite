import React from "react";

export default function Pagination({ total_page, current_page }) {
  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= total_page; i++) {
      pages.push(
        <button
          key={i}
          className={`fs-7 btn ${
            i === current_page ? "btn-warning" : "btn-light"
          } mx-1 px-3`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="my-3 d-flex align-items-center justify-content-center rounded-2 px-2 py-1">
      <button className="btn btn-light mx-1 px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      {renderPageNumbers()}
      <button className="btn btn-light mx-1 px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
