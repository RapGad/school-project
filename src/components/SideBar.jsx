import schoolImage from "../images/cohy.png";
import MainContent from "./MainContent";
import { NavLink } from "react-router-dom";

const SideBar = ({ menuItems,cardContent }) => {
  return (
    <div className="row flex-nowrap">
      <div className="bgCustom col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between curve">
        <div className="bgCustom p-2">
          <NavLink
            to="/"
            className="d-flex text-decoration-none mt-1 align-items-center text-white"
          >
            <span className="fs-4 d-none d-sm-inline">
              <img src={schoolImage} style={{ width: "85px" }} alt="" />
              <span style={{ marginTop: "50px", marginLeft: "30px" }}>
                @CoHY
              </span>
            </span>
          </NavLink>
          <ul className="nav nav-pills flex-column mt-4">
            {menuItems.map(item => {
              return (
                <li className="nav-item py-2 py-sm-0" key={item.key}>
                  <NavLink
                    to={item.path}
                  
                    className="nav-link text-white"
                    aria-current="page">
                    <i className={item.icon}></i>
                    <span className="fs-4 ms-3 d-none d-sm-inline">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav nav-pills flex-column mt-4 mb-3">
          <li className="nav-item py-2 py-sm-0">
            <NavLink to='/' className="nav-link text-white">
              <i className="fs-5 fa fa-sign-out-alt"></i>
              <span className="fs-4 ms-3 d-none d-sm-inline">Logout</span>
            </NavLink>
          </li>
        </div>
      </div>
      <MainContent cardContent={cardContent}/>
    </div>
  );
};

export default SideBar;
