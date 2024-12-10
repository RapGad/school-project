import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    course: '',
    type: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const courses = ['Course 101', 'Course 202', 'Course 303']; // Replace with dynamic course data if available

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback); // Replace with API call or data handling logic
    setSubmitted(true);
  };

  return (
    <div className="mainBody">
       <div className="container my-5" style={{maxWidth: "650px"}}>
      <h2 className="text-center mb-4">Send Us Your Feedback</h2>

      {submitted ? (
        <div className="alert alert-success text-center" role="alert">
          Thank you for your feedback!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
          {/* Course Selection */}
          <div className="mb-3">
            <label htmlFor="course" className="form-label fw-bold">
              Select Course
            </label>
            <select
              id="course"
              name="course"
              className="form-select"
              value={feedback.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Course --</option>
              {courses.map((course, index) => (
                <option value={course} key={index}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          {/* Feedback Type */}
          <div className="mb-3">
            <label htmlFor="type" className="form-label fw-bold">
              Feedback Type
            </label>
            <select
              id="type"
              name="type"
              className="form-select"
              value={feedback.type}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Feedback Type --</option>
              <option value="Compliment">Compliment</option>
              <option value="Complaint">Complaint</option>
              <option value="Suggestion">Suggestion</option>
            </select>
          </div>

          {/* Feedback Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Your Feedback
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="form-control"
              placeholder="Write your feedback here..."
              value={feedback.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btnSubmit px-4" style={{color: "#fff"}}>
              Submit Feedback
            </button>
          </div>
        </form>
      )}
    </div>

    </div>
   
  );
};

export default FeedbackPage;
