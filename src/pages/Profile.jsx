import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Header Section */}
        <div className="profile-header">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <h2 className="profile-name">Shiva Krishna</h2>
            <button className="edit-btn">Edit Profile</button>
          </div>
        </div>

        {/* Performance Section */}
        <div className="profile-section">
          <h3>Performance</h3>
          <div className="performance-bar">
            <div className="performance-fill" style={{ width: "75%" }}>
              75%
            </div>
          </div>
        </div>

        {/* Courses Enrolled */}
        <div className="profile-section">
          <h3>Courses Enrolled</h3>
          <ul className="course-list">
            <li>Full Stack Development</li>
            <li>Artificial Intelligence & ML</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </div>

        {/* Day Working Percentage */}
        <div className="profile-section">
          <h3>Daily Progress</h3>
          <div className="progress-circle">
            <span>85%</span>
          </div>
          <p>You are consistent in your learning today 🎯</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
