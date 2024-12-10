import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckResultsPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const results = [
    {
      id: 1,
      course: "Mathematics",
      score: 85,
      grade: "A",
      semester: "1st",
    },
    {
      id: 2,
      course: "Computer Science",
      score: 78,
      grade: "B+",
      semester: "2nd",
    },
    { id: 3, course: "Physics", score: 60, grade: "C", semester: "2nd" },
    {
      id: 4,
      course: "Chemistry",
      score: 50,
      grade: "D",
      semester: "1st",
    },
  ];

  const filteredResults = results.filter((result) => {
    const matchesSearch =
      search === "" ||
      result.course.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || result.semester === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mainBody">
      <div className="container my-5 glassCard" style={{maxWidth: "700px"}}>
        <h2 className="text-center mb-4">Check Your Results</h2>

        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by course name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <select
              className="form-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Semesters</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
            </select>
          </div>
        </div>

        {/* Results Table */}
        <div className="table-responsive">
          <table className="table table-hover shadow-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Semester</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                  <tr key={result.id}>
                    <td>{index + 1}</td>
                    <td>{result.course}</td>
                    <td>{result.score}</td>
                    <td
                      style={{
                        color:
                          result.grade === "A"
                            ? "green"
                            : result.grade === "F"
                            ? "red"
                            : "black",
                      }}
                    >
                      {result.grade}
                    </td>
                    <td>{result.semester}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckResultsPage;
