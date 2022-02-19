import React, { useContext, useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faUserFriends,
  faBell,
  faInbox,
  faCog,
  faCaretDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";

function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="link">
          <h3 className="Logo">SocialHub</h3>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Suche nach Freunden, Gruppen, oder Posts"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <button className="topbarIconItem">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="topbarIconItem">
            <FontAwesomeIcon icon={faUserFriends} className="topbarIconIcon" />
            <span className="topbarIconItemBadge">1</span>
          </button>
          <button className="topbarIconItem">
            <FontAwesomeIcon icon={faBell} className="topbarIconIcon" />
            <span className="topbarIconItemBadge">1</span>
          </button>
          <button className="topbarIconItem">
            <FontAwesomeIcon icon={faInbox} className="topbarIconIcon" />
            <span className="topbarIconItemBadge">1</span>
          </button>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.jpg"
              }
              className="topbarProfile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
