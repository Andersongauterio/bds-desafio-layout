import "./styles.css";
import "bootstrap/js/src/collapse.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <NavLink to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="carrostop-navbar">
          <ul className="navbar-nav ms-auto offset-md-2 navbar-expand-md main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>Home </NavLink>
            </li>
            <li>
              <NavLink to="/cars" activeClassName="active">Catálogo </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
