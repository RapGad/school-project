import React, { useState } from "react";

const UploadQuestions = () => {
  const [totalQuestionsInput, setTotalQuestionsInput] = useState("");
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    questionText: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });
  const [questionNumber, setQuestionNumber] = useState(1);

  // Confirm total questions
  const handleConfirmTotalQuestions = () => {
    const parsedNumber = parseInt(totalQuestionsInput, 10);
    if (isNaN(parsedNumber) || parsedNumber <= 0) {
      alert("Please enter a valid number greater than 0.");
      return;
    }
    setTotalQuestions(parsedNumber);
    setTotalQuestionsInput("");
  };

  // Save the current question
  const saveQuestion = () => {
    if (
      !currentQuestion.questionText ||
      currentQuestion.options.some((opt) => !opt) ||
      !currentQuestion.correctAnswer
    ) {
      alert("Please fill in all fields and select a correct answer.");
      return;
    }

    setQuestions([...questions, { ...currentQuestion, id: new Date().getTime() }]);
    setCurrentQuestion({ questionText: "", options: ["", "", "", ""], correctAnswer: "" });
    setQuestionNumber((prev) => prev + 1);
  };

  // Handle Upload
  const uploadQuestions = () => {
    if (questions.length === totalQuestions) {
      localStorage.setItem("questions", JSON.stringify(questions));
      alert("Questions uploaded successfully!");
      // Reset form
      setTotalQuestions(0);
      setQuestions([]);
      setCurrentQuestion({ questionText: "", options: ["", "", "", ""], correctAnswer: "" });
      setQuestionNumber(1);
    } else {
      alert("Please complete setting all questions before uploading.");
    }
  };

  return (
    <div className="container mt-5" style={{maxWidth: '550px'}}>
      <div className="text-center mb-4">
        <h1 className="display-5 font-weight-bold text-primary">Set Exam Questions</h1>
        <p className="text-muted">
          Specify the total number of questions
        </p>
      </div>

      {totalQuestions === 0 ? (
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5">
            <label htmlFor="totalQuestionsInput" className="form-label fs-5 text-dark">
              Total Number of Questions
            </label>
            <input
              type="number"
              className="form-control form-control-lg rounded-3"
              id="totalQuestionsInput"
              min="1"
              placeholder="Enter the total number of questions"
              value={totalQuestionsInput}
              onChange={(e) => setTotalQuestionsInput(e.target.value)}
            />
            <button
              className="btn btn-primary btn-lg mt-4 w-100 rounded-3"
              onClick={handleConfirmTotalQuestions}
            >
              Confirm Total Questions
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Set Questions Form */}
          <div className="card shadow-lg border-0 rounded-4 mb-4">
            <div className="card-body p-5">
              <h3 className="text-primary mb-4">
                Question {questionNumber} of {totalQuestions}
              </h3>
              {/* Question Text */}
              <div className="mb-4">
                <label htmlFor="questionText" className="form-label fs-5 text-dark">
                  Question Text
                </label>
                <textarea
                  className="form-control form-control-lg rounded-3"
                  id="questionText"
                  rows="4"
                  placeholder="Enter the question text"
                  value={currentQuestion.questionText}
                  onChange={(e) =>
                    setCurrentQuestion({ ...currentQuestion, questionText: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Options */}
              <div className="mb-4">
                <label className="form-label fs-5 text-dark">Options</label>
                {currentQuestion.options.map((option, index) => (
                  <div className="input-group mb-2" key={index}>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3"
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) =>
                        setCurrentQuestion((prev) => {
                          const newOptions = [...prev.options];
                          newOptions[index] = e.target.value;
                          return { ...prev, options: newOptions };
                        })
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Correct Answer */}
              <div className="mb-4">
                <label htmlFor="correctAnswer" className="form-label fs-5 text-dark">
                  Correct Answer
                </label>
                <select
                  className="form-select form-select-lg rounded-3"
                  id="correctAnswer"
                  value={currentQuestion.correctAnswer}
                  onChange={(e) =>
                    setCurrentQuestion({ ...currentQuestion, correctAnswer: e.target.value })
                  }
                >
                  <option value="">Select the correct answer</option>
                  {currentQuestion.options.map((option, index) => (
                    <option value={option} key={index}>
                      Option {index + 1}: {option}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="btn btn-primary btn-lg w-100 rounded-3"
                onClick={saveQuestion}
                disabled={questions.length >= totalQuestions}
              >
                Save Question
              </button>
            </div>
          </div>

          {questions.length === totalQuestions && (
            <button
              className="btn btn-success btn-lg w-100 rounded-3"
              onClick={uploadQuestions}
            >
              Upload Questions
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default UploadQuestions;
