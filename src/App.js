import "./App.css";
import LecturerDashBoard from "./components/LecturerDashBoard";
import LoginPage from "./components/Login";
import StudentDashBoard from "./components/StudentDashboard";
import UploadQuestions from "./components/UploadQuestions";
import AnnouncementPage from "./components/AnnouncementPage";
import ViewAnnouncements from "./components/ViewAnnouncements";
import FeedbackPage from "./components/FeedbackPage";
import CheckResultsPage from "./components/CheckResultsPage";
import ExaminationPage from "./components/ExaminationPage";
import ViewFeedbackPage from "./components/ViewFeedbackPage";
import ExamCodePage from "./components/ExamCodePage";
import { lecturerMenu, studentMenu,studentCard,lecturerCard } from "./components/SideBarData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
    
          <Route
            path="/StudentDashboard"
            element={<StudentDashBoard menuItems={studentMenu} 
            cardContent={studentCard}/>}
          ></Route>
          <Route
            path="/LecturerDashBoard"
            element={<LecturerDashBoard menuItems={lecturerMenu} 
            cardContent={lecturerCard}/>}
          ></Route>
          <Route path="/UploadQuestions" element={<UploadQuestions/>}>
          </Route>
          <Route path="/AnnouncementPage" element={<AnnouncementPage/>}>
          </Route>
          <Route path="/ViewAnnouncements" element={<ViewAnnouncements/>}>
          </Route>
          <Route path="/FeedbackPage" element={<FeedbackPage/>}>
          </Route>
          <Route path="/CheckResultsPage" element={<CheckResultsPage/>}>
          </Route>
          <Route path="/ExaminationPage" element={<ExaminationPage/>}>
          </Route>
          <Route path="/ViewFeedbackPage" element={<ViewFeedbackPage/>}>
          </Route>
          <Route path="/examcodepage" element={<ExamCodePage/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
