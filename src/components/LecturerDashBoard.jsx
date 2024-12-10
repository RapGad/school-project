import "../styles/LecturerDashBoard.css";
import SideBar from "./SideBar";

function LecturerDashboard({ menuItems,cardContent }) {
  return (
    <div className="container-fluid">
      <SideBar
      menuItems={menuItems}
      cardContent={cardContent}/>
    
    </div>
  );
}

export default LecturerDashboard;
