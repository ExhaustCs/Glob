import React from "react";
import "./sidebar.css";
import aboutMeProfile from "../topbar/pfp2.png";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://th.wallhaven.cc/small/6o/6od3px.jpg" alt="" />
        {/* <img src={aboutMeProfile} alt="" /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
          distinctio tenetur. Id dolorem ab facere, odit natus deserunt in autem
          ullam at eveniet, quam quos.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-linkedin-in"></i>
          <i className="sidebarIcon fab fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
