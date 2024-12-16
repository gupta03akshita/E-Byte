// src/Blog.js

import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const blogData = [
  {
    title: 'The Impact of E-Waste on the Environment',
    date: 'October 1, 2024',
    author: 'Jane Doe',
    description: 'E-waste is one of the fastest-growing waste streams. Learn about its environmental impact and how proper disposal can make a difference.',
    icon: 'fas fa-earth-americas',
    image: 'https://www.shutterstock.com/image-photo/computer-laptop-keyboard-digital-tablet-260nw-2516197447.jpg', // Updated URL
  },
  {
    title: '5 Ways to Reduce E-Waste',
    date: 'October 5, 2024',
    author: 'John Smith',
    description: 'Discover simple steps you can take to minimize e-waste in your daily life, from recycling to donating old devices.',
    icon: 'fas fa-recycle',
    image: 'https://www.shutterstock.com/image-photo/waste-bin-full-electronics-e-260nw-2441530511.jpg', // Updated URL
  },
  {
    title: 'Understanding E-Waste Recycling',
    date: 'October 10, 2024',
    author: 'Alice Johnson',
    description: 'Get insights into the recycling process for electronic waste and why it is essential for a sustainable future.',
    icon: 'fas fa-sync-alt',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400', // Retained previous working URL
  },
  {
    title: 'The Dangers of Improper E-Waste Disposal',
    date: 'October 15, 2024',
    author: 'Michael Lee',
    description: 'Learn about the health risks associated with improper e-waste disposal and the importance of responsible management.',
    icon: 'fas fa-exclamation-triangle',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgxg3lEXH-ec5RljhY7NpFoFwMfvYqWRjjQ&s', // Retained previous working URL
  },
];

const Blog = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">E-Waste Awareness Blog</h1>
      <p className="text-center mb-5">
        Stay informed about electronic waste and its impact on our planet. Read our latest articles for awareness and solutions.
      </p>
      <div className="row">
        {blogData.map((blog, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm border-success d-flex flex-column" style={{ height: '100%' }}>
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <div className="text-center">
                  <i className={`${blog.icon} fa-3x text-success mb-3`}></i>
                  <h5 className="card-title">{blog.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{blog.date} by {blog.author}</h6>
                </div>
                <p className="card-text flex-grow-1">{blog.description}</p>
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-success">Read More</button>
                  <div>
                    <a href="#" className="text-success me-2"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-success me-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-success"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
