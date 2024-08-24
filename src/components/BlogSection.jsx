import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

function BlogSection() {
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
      {
        id: 4,
        author: {
          name: "Emily Davis",
          image:
            "https://images.unsplash.com/photo-1603415527125-a7d44d579b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0NzI4&ixlib=rb-1.2.1&q=80&w=400",
        },
        blog: {
          title: "The Art of Minimalist Living",
          image:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0NzU4&ixlib=rb-1.2.1&q=80&w=1080",
          text: "Minimalist living is not just a trend; it’s a lifestyle. In this blog, we discuss how to declutter your life and focus on what truly matters.",
        },
      },
      {
        id: 5,
        author: {
          name: "Michael Brown",
          image:
            "https://images.unsplash.com/photo-1603415527100-98231c0db77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0Nzc4&ixlib=rb-1.2.1&q=80&w=400",
        },
        blog: {
          title: "The Evolution of Music in the Digital Age",
          image:
            "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0ODU4&ixlib=rb-1.2.1&q=80&w=1080",
          text: "Music has undergone a significant transformation in the digital age. From vinyl records to streaming services, we explore the journey of music.",
        },
      },
      {
        id: 6,
        author: {
          name: "Sarah Wilson",
          image:
            "https://images.pexels.com/photos/6943389/pexels-photo-6943389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        blog: {
          title: "The Power of Positive Thinking",
          image:
            "https://images.pexels.com/photos/6943389/pexels-photo-6943389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Positive thinking can change your life. In this blog, we delve into the benefits of a positive mindset and how to cultivate it.",
        },
      },
      {
        id: 7,
        author: {
          name: "David Lee",
          image:
            "https://images.unsplash.com/photo-1603415527236-cbf2b2cb7f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0OTc4&ixlib=rb-1.2.1&q=80&w=400",
        },
        blog: {
          title: "Traveling the World on a Budget",
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0OTY4&ixlib=rb-1.2.1&q=80&w=1080",
          text: "Traveling doesn’t have to be expensive. We share tips and tricks on how to explore the world without breaking the bank.",
        },
      },
      {
        id: 8,
        author: {
          name: "Laura Martinez",
          image:
            "https://images.unsplash.com/photo-1603415527257-58f6062f7a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjE4OTg0OTE0&ixlib=rb-1.2.1&q=80&w=400",
        },
        blog: {
          title: "A Guide to Healthy Eating",
          image:
            "https://images.pexels.com/photos/11031989/pexels-photo-11031989.jpeg",
          text: "Healthy eating is essential for a balanced life. This blog provides a guide to nutritious foods and how to incorporate them into your daily routine.",
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
          title="All Blog Posts"
          secondTitle="Dive into Every Post, From the First to the Latest"
        />

        <div className="d-flex align-items-center justify-content-between w-100 px-lg-3 mb-2 fs-7">
          <p className="mb-0"></p>
          <p className="mb-0">23 Blogs</p>
        </div>
        <div className="row w-100 row-cols-1 row-cols-md-2 row-cols-lg-4">
          {markup}
        </div>
        <Pagination total_page={3} current_page={1} />
      </div>
    </section>
  );
}

export default BlogSection;
