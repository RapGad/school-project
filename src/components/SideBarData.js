// sidebarData.js
export const lecturerMenu = [
    { id: 1, label: "Home", icon: "fs-5 fa fa-house", path: "/LecturerDashBoard" },
    { id: 2, label: "Upload Questions", icon: "fs-5 fa fa-upload", path: "/UploadQuestions" },
    { id: 3, label: "Announcement", icon: "fs-5 fa fa-bullhorn", path: "/AnnouncementPage" },
    { id: 4, label: "Examination", icon: "fs-5 fa fa-book", path: "/Examination" },
  ];
  
  export const studentMenu = [
    { id: 1, label: "Home", icon: "fs-5 fa fa-home", path: "/StudentDashboard" },
    { id: 2, label: "Submit Comment", icon: "fs-5 fa fa-edit", path: "/FeedbackPage" },
    { id: 3, label: "Results", icon: "fs-5 fa fa-chart-bar", path: "/CheckResultsPage" },
    { id: 4, label: "Access Exam", icon: "fs-5 fa fa-book", path: "/ExaminationPage" },
  ];


  export const studentCard = [
    {id:1, title: "View Announcement",icon: "fs-5 fa fa-bullhorn", description: "You can view announcement sent from various tutors by clicking on this card", path: "/ViewAnnouncements"},
    {id:2, title: "Check Results",icon: "fs-5 fa fa-chart-bar", description: "View Results here", path: "/CheckResultsPage"},
    {id:3, title: "Send feedBack",icon: "fs-5 fa fa-comments", description: "Communicate with your tutors", path: "/FeedbackPage"},
    {id:4, title: "Examination",icon: "fs-5 fa fa-book", description: "Partake in the exams from your tutors", path: "/ExaminationPage"},
  ]
  export const lecturerCard = [
    {id:1, title: "Set new Questions",icon: "fs-5 fa fa-upload", description: "Upload Questions fro your students to answer", path: "/UploadQuestions"},
    {id:2, title: "View FeedBack",icon: "fs-5 fa fa-comments", description: "Read feedBack sent by students", path: "/ViewFeedbackPage"},
    {id:3, title: "Generate new Code",icon: "fs-5 fa fa-key", description: "Generate access code for your Students to partake in the exam", path: "/examcodepage"},
    {id:4, title: "Examination",icon: "fs-5 fa fa-book", description: "Partake in the exams from your tutors", path: "/UploadQuestions"},
  ]
  