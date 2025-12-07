import React from "react";
import { FaCalendarAlt, FaUserMd, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Blog = () => {
 
    const blogs = [
  {
    img: "https://images.pexels.com/photos/6129041/pexels-photo-6129041.jpeg",
    title: "How Dialysis Improves Life Quality",
    author: "Dr. Aman Verma",
    date: "12 Oct 2025",
    desc: "Dialysis plays a crucial role in kidney treatment and improves the quality of life for patients in long-term cases.",
  },
  {
    img: "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg",
    title: "Tips to Maintain Kidney Health",
    author: "Dr. Shruti Mehta",
    date: "25 Sep 2025",
    desc: "A proper diet, hydration and regular checkups can reduce the chance of kidney failure and improve overall health.",
  },
  {
    img: "https://images.pexels.com/photos/8460128/pexels-photo-8460128.jpeg",
    title: "The Future of Dialysis Technology",
    author: "Dr. Rahul Sharma",
    date: "8 Sep 2025",
    desc: "Technological innovations in dialysis machines have made treatment more comfortable and effective for patients.",
  },
];





  return (
    <>
      {/* Breadcrumb */}
      <div className="blog-breadcrumb text-start container mt-4">
        <Link to="/" className="crumb-link">Home</Link> <span className="mx-2">/</span>
        <span className="crumb-current">Blog</span>
      </div>

      {/* Page Heading */}
      <section className="blog-heading-section text-center py-5">
        <h2 className="blog-main-title">Our Latest Blogs</h2>
        <p className="blog-sub-title">Read trusted information related to Kidney Health & Dialysis Care</p>
      </section>

      {/* Blog Cards */}
      <div className="container py-5">
        <div className="row g-4">
          {blogs.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="blog-card">
                <img src={item.img} className="blog-img" alt={item.title} />
                <div className="blog-content">
                  <h4 className="blog-title">{item.title}</h4>
                  <p className="blog-desc">{item.desc}</p>

                  <div className="blog-meta">
                    <span><FaUserMd /> {item.author}</span>
                    <span><FaCalendarAlt /> {item.date}</span>
                  </div>

                  <Link to="/blog-details" className="blog-read-btn">
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
