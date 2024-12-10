import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnnouncementPage = () => {
  const [audience, setAudience] = useState('general');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [message, setMessage] = useState('');

  const courses = ['Course 1', 'Course 2', 'Course 3']; // Example courses

  const handleAnnouncement = () => {
    if (!message) {
      alert('Please type a message before announcing!');
      return;
    }

    const announcementDetails = {
      audience,
      selectedCourse: audience === 'specific' ? selectedCourse : null,
      message,
    };

    console.log('Announcement Published:', announcementDetails);
    alert('Announcement Published!');
    // Add your backend logic here to save the announcement.
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Make an Announcement</h2>
      <div className="card shadow">
        <div className="card-body">
          {/* Select Audience */}
          <div className="mb-3">
            <label className="form-label fw-bold">Audience:</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="audience"
                  id="general"
                  value="general"
                  checked={audience === 'general'}
                  onChange={(e) => setAudience(e.target.value)}
                />
                <label className="form-check-label" htmlFor="general">
                  General (All Students)
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="audience"
                  id="specific"
                  value="specific"
                  checked={audience === 'specific'}
                  onChange={(e) => setAudience(e.target.value)}
                />
                <label className="form-check-label" htmlFor="specific">
                  Specific (By Course)
                </label>
              </div>
            </div>
          </div>

          {/* Dynamic Dropdown for Specific Audience */}
          {audience === 'specific' && (
            <div className="mb-3">
              <label className="form-label fw-bold">Select Course:</label>
              <select
                className="form-select"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">-- Select a Course --</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Input Message */}
          <div className="mb-3">
            <label className="form-label fw-bold">Message:</label>
            <textarea
              className="form-control"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your announcement here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-end">
            <button className="btn btn-primary" onClick={handleAnnouncement}>
              Announce
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
