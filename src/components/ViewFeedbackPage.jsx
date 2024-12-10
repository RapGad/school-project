import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewFeedbackPage = () => {
  const [feedbacks] = useState([
    {
      id: 1,
      studentName: 'John Doe',
      course: 'Mathematics',
      date: '2024-12-03',
      message: 'The course materials are very helpful!',
      status: 'New',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      course: 'Science',
      date: '2024-12-02',
      message: 'Can we have more practical examples in class?',
      status: 'Reviewed',
    },
    // Add more feedback entries
  ]);

  const [search, setSearch] = useState('');

  const filteredFeedbacks = feedbacks.filter((feedback) =>
    feedback.studentName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Student Feedback</h2>

      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by student name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Feedback Cards */}
      <div className="row">
        {filteredFeedbacks.map((feedback) => (
          <div className="col-md-4 mb-4" key={feedback.id}>
            <div
              className={`card h-100 shadow-sm ${
                feedback.status === 'New' ? 'border-primary' : ''
              }`}
            >
              <div className="card-body">
                <h5 className="card-title text-primary">
                  {feedback.studentName}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {feedback.course}
                </h6>
                <p className="card-text">{feedback.message}</p>
                <p className="text-muted small">
                  <i className="fa fa-calendar-alt me-2"></i>
                  {feedback.date}
                </p>
              </div>
              <div className="card-footer">
                <span
                  className={`badge ${
                    feedback.status === 'New'
                      ? 'bg-primary'
                      : 'bg-success'
                  }`}
                >
                  {feedback.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Feedback Message */}
      {filteredFeedbacks.length === 0 && (
        <div className="text-center mt-5">
          <h5 className="text-muted">No feedback available.</h5>
        </div>
      )}
    </div>
  );
};

export default ViewFeedbackPage;
