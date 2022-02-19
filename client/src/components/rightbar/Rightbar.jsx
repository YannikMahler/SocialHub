import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { faGift } from "@fortawesome/free-solid-svg-icons";

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayBox">
          <img src={`${PF}gift.png`} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Marius Tie</b> and <b>3 other Friends</b> have Birthday today
          </span>
        </div>
        <img src={`${PF}ad.webp`} alt="Ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          {/* <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Birthday:</span>
            <span className="rightbarInfoValue">01.01.2000</span>
          </div> */}
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/2.jpg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Ayleen</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/3.jpg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Alex Durden</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/4.jpg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Paul ED</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/5.webp`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Lisa</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/6.jpg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Coach Esume</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={`${PF}person/7.jpeg`}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Tom Brady</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
