import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewAnnouncements = () => {
  const [filter, setFilter] = useState('all');
  const announcements = [
    {
      id: 1,
      title: 'Welcome Back!',
      audience: 'General',
      message: 'We hope you had a great break. Let’s have an amazing semester!',
      date: '2024-12-01',
    },
    {
      id: 2,
      title: 'Assignment Reminder',
      audience: 'Course 101',
      message: 'Submit your assignment by Friday.',
      date: '2024-11-28',
    },
    {
      id: 3,
      title: 'Exam Schedule',
      audience: 'General',
      message: 'The exam timetable is now available.',
      date: '2024-11-20',
    },
  ];

  const filteredAnnouncements =
    filter === 'all'
      ? announcements
      : announcements.filter((a) => a.audience === filter);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Announcements</h2>

      {/* Filter Section */}
      <div className="mb-4">
        <label className="form-label fw-bold">Filter by Audience:</label>
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="General">General</option>
          <option value="Course 101">Course 101</option>
          {/* Add more options dynamically based on courses */}
        </select>
      </div>

      {/* Announcements List */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredAnnouncements.map((announcement) => (
          <div className="col" key={announcement.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">{announcement.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Audience: {announcement.audience}
                </h6>
                <p className="card-text">{announcement.message}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Posted on: {new Date(announcement.date).toLocaleDateString()}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Announcements Message */}
      {filteredAnnouncements.length === 0 && (
        <div className="text-center text-muted mt-5">
          <p>No announcements found for the selected audience.</p>
        </div>
      )}
    </div>
  );
};

export default ViewAnnouncements;
