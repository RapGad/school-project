import { NavLink } from "react-router-dom";
const MainContents = ({ cardContent }) => {
  return (
    <div className="col backG" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        Examination Bank
      </h1>

      <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 p-3">
        {cardContent.map((item) => {
          return (
            <NavLink className="col text-decoration-none"  to={item.path} key={item.id}>
              <div className="card h-100">
                <div className="cardBackG card-body">
                  <h5 className="card-title">
                    <i className={item.icon}></i>
                    <span className="fs-4 ms-3 ">
                      {item.title}
                    </span>
                  </h5>
                  <p className="card-text">
                   {item.description}
                  </p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MainContents;
