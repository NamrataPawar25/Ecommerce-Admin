import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light flex-column vh-100 p-3"
        style={{"width": "250px"}}
      >
        <ul className="navbar-nav flex-column w-100">
          <li className="nav-item">
            <Link className="nav-link active" to="/category-list">
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-category">
              Create Category
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/brand-list">
              Brand
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-brand">
              Create Brand
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Product
            </Link>
          </li>
        </ul>
      </nav>

      {/* <div className="flex-grow-1 p-4">
        <h2>Main Content Area</h2>
        <p>This is where your page content will appear.</p>
      </div> */}
    </div>
  );
};

export default Navbar;
