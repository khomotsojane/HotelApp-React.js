import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Starbucks from "../media/Starbucks.png";
import homebackground from "../media/Home.jpg";
import { auth } from "./config/firebase";

const ParentContainer = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div
      className="container vh-100 ParentLayout"
      style={{
        backgroundColor: "white",
        backgroundImage: `url(${homebackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={Starbucks} height={"35px"} width={"45px"} alt="..." />
          <a className="navbar-brand" href="#">
            Hotel App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/About"} className="nav-link" href="#">
                  About us{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Contact"} className="nav-link" href="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to={"/Contact"}
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rooms
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link to={"/DoubleB"} className="dropdown-item" href="#">
                      Double Beds
                    </Link>
                  </li>
                  <li>
                    <Link to={"/SingleRoom"} className="dropdown-item" href="#">
                      Single bed
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <button onClick={() => handleLogout()}>log out</button>
        <Outlet />
      </main>
    </div>
  );
};

export default ParentContainer;
