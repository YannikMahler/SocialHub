import React from "react";
import "./leftbar.css";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import {
  faRss,
  faPlayCircle,
  faUsers,
  faBookmark,
  faCalendar,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <FontAwesomeIcon icon={faRss} className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <FontAwesomeIcon icon={faPlayCircle} className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <FontAwesomeIcon icon={faUsers} className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <FontAwesomeIcon icon={faBookmark} className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <FontAwesomeIcon icon={faCalendar} className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <FontAwesomeIcon icon={faQuestionCircle} className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
