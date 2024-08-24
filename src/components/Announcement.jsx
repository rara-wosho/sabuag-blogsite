import SectionTitle from "./SectionTitle";
import AnnouncementCard from "./AnnouncementCard";

function Announcement() {
  return (
    <div
      id="announcement-wrapper"
      className="p-2 container d-flex flex-column align-items-center"
    >
      <SectionTitle
        title="Announcement"
        secondTitle="Don't get caught up with our latest announcements"
      />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 w-100">
        <div className="border col">
          <AnnouncementCard />
        </div>
        <div className="border col">
          <AnnouncementCard />
        </div>
        <div className="border col">
          <AnnouncementCard />
        </div>
      </div>
    </div>
  );
}

export default Announcement;
