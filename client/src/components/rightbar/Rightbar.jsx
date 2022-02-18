import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayBox">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Marius Tie</b> and <b>3 other Friends</b> have Birthday today
          </span>
        </div>
        <img src="/assets/ad.webp" alt="Ad" className="rightbarAd" />
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
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Birthday:</span>
            <span className="rightbarInfoValue">01.01.2000</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Hamburg</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country:</span>
            <span className="rightbarInfoValue">Germany 🇩🇪</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Ayleen</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/3.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Alex Durden</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Ayleen</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Ayleen</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Ayleen</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/2.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">Ayleen</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <HomeRightbar />
      </div>
    </div>
  );
}

export default Rightbar;
