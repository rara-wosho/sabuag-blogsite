function Article({ enableSwiper }) {
  return (
    <div className="container-fluid d-flex justify-content-center article-container position-relative">
      <div className="article-wrapper px-2 d-flex flex-column align-items-center">
        <div className="article-main-img mb-2 mb-lg-5 w-100 position-relative">
          {enableSwiper && (
            <div className="article-swiper px-3 d-flex align-items-center justify-content-between w-100">
              <i className="rounded-circle p-2   prev-article">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </i>
              <i className="rounded-circle p-2   next-article">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </i>
            </div>
          )}
          <img src="public/images/image0.jpeg" alt="" className="img-fluid" />
          <p className="fs-7 text-secondary text-center pt-2">Photo by Renz</p>
        </div>
        <div className="article-title mb-3 w-100">
          <p className="fs-2 text-uppercase mb-1 title fw-semibold">
            This is a creative title and a nice one
          </p>
          <div className="artile-details d-flex align-items-center justify-content-start py-2">
            <div>
              <p className="article-credit mb-0 fs-7">
                <span>Writer : </span>
                <span className="ustp-secondary">Israel De Vera</span>
              </p>
              <p className="mb-0 article-published-date fs-7">July 23 2024</p>
            </div>
            <div className="article-actions ms-5 d-flex align-items-center">
              <i className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-thumbs-up"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
                <p className="mb-0 ms-2">234</p>
              </i>
              {/* <i className="ms-2 d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-thumbs-down"
                >
                  <path d="M17 14V2" />
                  <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
                </svg>
                <p className="mb-0 ms-2">0</p>
              </i> */}
            </div>
          </div>
        </div>
        <div className="article-text border-bottom">
          <p style={{ whiteSpace: "pre-wrap" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            excepturi at laborum neque sunt earum natus? Facilis, ad error cum /t
            accusantium culpa nulla rerum ducimus nihil odio in. Quisquam odio
            atque animi, harum maxime, autem nostrum optio ipsum consectetur
            consequatur numquam! Repellat obcaecati, ex earum vero dolores
            deserunt a nobis aperiam expedita perspiciatis ad harum veritatis,
            cum quaerat, ipsam dignissimos esse quibusdam culpa. Voluptas neque
            necessitatibus quam! Laboriosam, temporibus ratione sapiente quo
            quibusdam iusto illum provident odio, perspiciatis aliquam magnam
            nesciunt atque reprehenderit? Itaque reiciendis eveniet illo placeat
            natus nostrum, architecto doloremque cumque aspernatur tempore
            molestiae. Numquam non consequuntur exercitationem pariatur facilis
            temporibus cum quaerat sed, labore nostrum dolores culpa odit ad
            maiores praesentium consectetur ex earum doloremque delectus
            consequatur sit. Impedit amet laudantium quam non necessitatibus
            sunt? Quos fuga, eaque vel hic doloremque iusto tenetur? Repellendus
            similique ipsam asperiores placeat, iusto beatae accusamus sed nam
            magni nisi sequi quos recusandae! Vero odit veritatis dolorum omnis.
            Velit cupiditate architecto ipsa dignissimos quibusdam, sed quam
            aliquid accusamus sapiente asperiores. illo deleniti expedita nemo
            blanditiis at deserunt esse debitis eum delectus quis nesciunt eius
            sit. Nesciunt, vel. Beatae odio nisi neque itaque, amet nobis. Nulla
            deserunt maiores magni animi. Quibusdam, eveniet fugiat.
          </p>
        </div>

        <div className="related-fb-post w-100 py-3">
          <p>Related facebook posts can be seen here</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
