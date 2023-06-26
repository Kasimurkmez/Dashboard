import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <i class="ri-taxi-line"></i>
          </span>
          UberX
        </h2>
      </div>
      <div className="sidebar__content">
        <div className="mneu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li key={index} className="nav__item">
                <NavLink
                  to="/dashboard"
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <span>
                    <i className={item.icon}></i>
                  </span>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__bottom">
          <span>
            <i class="ri-logout-circle-r-line"></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
