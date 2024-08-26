import MemberCard from "./MemberCard";
import SectionTitle from "./SectionTitle";

function SabuagBoard() {
  const image =
    "https://images.pexels.com/photos/26524771/pexels-photo-26524771/free-photo-of-portrait-of-an-elegant-man-in-a-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const img2 =
    "https://i.pinimg.com/564x/e5/88/a8/e588a8844bdebe54eb8813fe1025d6a0.jpg";
  const img3 =
    "https://i.pinimg.com/564x/d9/26/75/d926759852becd98b17e23a3bd4cb42a.jpg";
  const img4 =
    "https://i.pinimg.com/564x/8d/c4/53/8dc453cf9a78d6f6d2365375eb7d9ee8.jpg";
  const img5 =
    "https://i.pinimg.com/564x/5e/7a/1d/5e7a1dfabab3d1c98a7485ccb3796603.jpg";
  return (
    <section id="sabuag-board">
      <div className="container pt-4">
        <SectionTitle
          title="Editorial Board and Staffs"
          secondTitle="Our team ensures that every piece of content we publish is informative, accurate, and reflective of the diverse voices within our school."
        ></SectionTitle>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 mt-5 px-5">
          <div className="mb-3 col ">
            <MemberCard
              image={image}
              name="Israel De Vera"
              address="Jimenez Misamis Occidental"
              position="Editorial Cartoonist"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={img2}
              name="Renz Patrick Angelo Bison"
              address="Panaon Misamis Occidental"
              position="Photojournalist"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={img3}
              name="Dexter Tumampos"
              address="Aloran Misamis Occidental"
              position="Associate Editor in Chief"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={img4}
              name="Ate She"
              address="Panaon Misamis Occidental"
              position="Editor in Chief"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={img5}
              name="Sanny Aranas"
              address="Aloran Misamis Occidental"
              position="Photojournalist"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={img4}
              name="Ate She"
              address="Panaon Misamis Occidental"
              position="Editor in Chief"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={img5}
              name="Sanny Aranas"
              address="Aloran Misamis Occidental"
              position="Photojournalist"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={image}
              name="Israel De Vera"
              address="Jimenez Misamis Occidental"
              position="Editorial Cartoonist"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={img2}
              name="Renz Patrick Angelo Bison"
              address="Panaon Misamis Occidental"
              position="Photojournalist"
            />
          </div>
          <div className="mb-3 col ">
            <MemberCard
              image={img3}
              name="Dexter Tumampos"
              address="Aloran Misamis Occidental"
              position="Associate Editor in Chief"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SabuagBoard;
