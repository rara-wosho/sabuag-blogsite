import SectionTitle from "./SectionTitle";
import Article from "./Article";
import WritersSection from "./WritersSection";
function LatestBlog() {
  return (
    <section id="latesblog-section">
      <div className="d-flex flex-column align-items-center">
        <SectionTitle
          title="Latest Blog"
          secondTitle="Fresh Takes on Campus Happenings"
        />
        <Article enableSwiper={false}></Article>
      </div>
    </section>
  );
}

export default LatestBlog;
