import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ExaminationPage = () => {
  const [showModal, setShowModal] = useState(true); // Modal initially visible
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const storedQuestions = localStorage.getItem("questions");
  const initialQuestions = storedQuestions ? JSON.parse(storedQuestions) : [];
  const [getQuestions, setGetQuestions] = useState(initialQuestions);


  const correctCode = "EXAM123"; // Replace with your logic for code validation

  const handleCodeSubmit = () => {
    if (code === correctCode) {
      setAuthenticated(true);
      setShowModal(false);
    } else {
      setError("Invalid code. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      {/* Modal */}
      {showModal && (
        <div
          className="modal d-block"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Exam Code</h5>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter your exam code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError("");
                  }}
                />
                {error && <p className="text-danger text-center">{error}</p>}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleCodeSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exam Content */}
      {!showModal && authenticated && (
        <div>
          <h2 className="text-center">Examination Page</h2>
          <p className="text-muted">
            Please read the instructions carefully before starting your exam.
          </p>

          {/* Example Question */}
          {getQuestions.length === 0 ? 
          (<p>No questions Available at the Moment</p>): (getQuestions.map((question,index) => {
            return (
              <div className="card my-4 shadow-sm" key={index+1}>
                <div className="card-body">
                  <h5 className="card-title">{index+1}</h5>
                  <p className="card-text">{question.questionText}</p>
                  <div>
                    {question.options.map(option=>{
                        return(
                            < ><label key={index}>
                                <input type="radio" style={{margin:"10px"}} name={index + 1} value={option} />{option}
                            </label><br /></>

                        )
                    })}
                    
                    
                  </div>
                </div>
              </div>
            );
          }))}

          {/* Add more questions dynamically */}
        </div>
      )}
    </div>
  );
};

export default ExaminationPage;
