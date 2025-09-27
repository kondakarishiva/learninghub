import React from "react";
import "./Courses.css";

const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn React from scratch and build amazing web apps.",
    thumbnail: "https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description: "Master JavaScript fundamentals and ES6 features.",
    thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Python Programming",
    description: "Start your journey in Python with hands-on projects.",
    thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Full Stack Development",
    description: "Become a Full Stack Developer using MERN stack.",
    thumbnail: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
  },
];

const Courses = () => {
  return (
    <div className="courses-section">
      <h2>Our Courses</h2>
      <div className="courses-container">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button>Watch Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
