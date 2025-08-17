import React from "react";
import "./BlogPage.css";

const blogData = [
  {
    id: 1,
    title: "Exploring AI in 2025",
    description: "Discover how AI is shaping the future of technology and everyday life.",
    img: "https://source.unsplash.com/400x250/?ai,technology"
  },
  {
    id: 2,
    title: "React.js Tips",
    description: "Enhance your React skills with these advanced tips and tricks.",
    img: "https://source.unsplash.com/400x250/?reactjs,code"
  },
  {
    id: 3,
    title: "Sustainable Tech",
    description: "How technology is helping us build a greener planet.",
    img: "https://source.unsplash.com/400x250/?technology,green"
  },
  {
    id: 4,
    title: "Web3 Innovations",
    description: "The future of blockchain and decentralized applications.",
    img: "https://source.unsplash.com/400x250/?blockchain,crypto"
  },
  {
    id: 5,
    title: "Cloud Computing",
    description: "Leveraging cloud platforms for scalable and secure applications.",
    img: "https://source.unsplash.com/400x250/?cloud,technology"
  },
  {
    id: 6,
    title: "Cybersecurity Essentials",
    description: "Protecting your digital assets in the modern era.",
    img: "https://source.unsplash.com/400x250/?cybersecurity,hacking"
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      {/* Top Intro Paragraph */}
      <div className="blog-intro">
        <h1> SyncUpBlog</h1>
        <p>
          Dive into a world of knowledge where we explore the latest in technology, innovation, and sustainable practices. Stay informed, inspired, and ahead with our curated blog posts.
        </p>
      </div>

      {/* Blog Cards Section */}
      <div className="blog-cards">
        {blogData.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.img} alt={blog.title} />
            <div className="blog-info">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
