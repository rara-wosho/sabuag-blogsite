import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";

function FeaturedSection({ main_image, title, blog_text }) {
  const jsonData = {
    blogPosts: [
      {
        id: 1,
        author: {
          name: "John Doe",
          image:
            "https://images.unsplash.com/photo-1603415526960-fca3e1f25e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0NTk0&ixlib=rb-1.2.1&q=80&w=400",
        },
        blog: {
          title: "The Future of Technology",
          image:
            "https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0NjA4&ixlib=rb-1.2.1&q=80&w=1080",
          text: "Technology is evolving at a rapid pace, and the future holds endless possibilities. From AI advancements to sustainable energy solutions, we are on the brink of a new era.",
        },
      },
      {
        id: 2,
        author: {
          name: "Jane Smith",
          image:
            "https://images.unsplash.com/photo-1603415526772-c2f91fcfb396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0NjI4&ixlib=rb-1.2.1&q=80&w=400",
        },
        blog: {
          title: "The Impact of Social Media on Society",
          image:
            "https://images.pexels.com/photos/5217327/pexels-photo-5217327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Social media has transformed how we communicate, share information, and interact with the world around us. While it has many benefits, it also poses significant challenges.",
        },
      },
      {
        id: 3,
        author: {
          name: "Alex Johnson",
          image:
            "https://images.unsplash.com/photo-1603415526923-51f87e66c6a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0NjY4&ixlib=rb-1.2.1&q=80&w=400",
        },
        blog: {
          title: "Exploring the Wonders of the Natural World",
          image:
            "https://images.pexels.com/photos/27438372/pexels-photo-27438372/free-photo-of-abirama-on-the-weekend.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Nature offers us an endless array of wonders, from the tallest mountains to the deepest oceans. In this blog, we explore some of the most breathtaking natural landscapes.",
        },
      },
    ],
  };

  const markup = jsonData.blogPosts.map((blog) => {
    return (
      <div key={blog.id} className="pb-4 col">
        <BlogCard
          blog_id={blog.id}
          title={blog.blog.title}
          blog_text={blog.blog.text}
          main_image={blog.blog.image}
        />
      </div>
    );
  });
  return (
    <section id="featured-section">
      <div className="container d-flex flex-column align-items-center">
        <SectionTitle
          title="Featured Blogs"
          secondTitle="Featured Articles: What’s Making Waves"
        />

        <div className="row w-100 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {markup}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
