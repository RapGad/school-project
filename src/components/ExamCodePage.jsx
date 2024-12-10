import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExamCodePage = () => {
  const [code, setCode] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [expiration, setExpiration] = useState('30'); // Default: 30 minutes
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Generate random code
  const generateRandomCode = () => {
    const randomCode = Math.random().toString(36).substr(2, 8).toUpperCase();
    setCode(randomCode);
    setIsConfirmed(false); // Reset confirmation
  };

  // Handle custom code submission
  const handleCustomCode = () => {
    if (customCode.trim() === '') {
      alert('Please enter a valid custom code.');
      return;
    }
    setCode(customCode.trim().toUpperCase());
    setCustomCode('');
    setIsConfirmed(false); // Reset confirmation
  };

  // Confirm code
  const confirmCode = () => {
    if (code) {
      alert(`Code "${code}" confirmed with expiration of ${expiration} minutes.`);
      setIsConfirmed(true);
    } else {
      alert('No code to confirm!');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Generate Exam Code</h2>

      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Create a Custom Code</h5>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter custom code"
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  onClick={handleCustomCode}
                >
                  Set Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 offset-md-3 text-center">
          <button
            className="btn btn-success btn-lg"
            onClick={generateRandomCode}
          >
            Generate Random Code
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          {code && (
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title text-success">Generated Code</h5>
                <p className="fs-3 fw-bold text-primary">{code}</p>

                <div className="mb-3">
                  <label className="form-label">
                    Set Expiration Time (in minutes):
                  </label>
                  <select
                    className="form-select"
                    value={expiration}
                    onChange={(e) => setExpiration(e.target.value)}
                  >
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="1440">24 hours</option>
                  </select>
                </div>

                <button
                  className="btn btn-outline-primary me-2"
                  onClick={confirmCode}
                  disabled={isConfirmed}
                >
                  {isConfirmed ? 'Confirmed' : 'Confirm Code'}
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => setCode('')}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamCodePage;
