import "./share.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import {
  faPhotoVideo,
  faTag,
  faMapMarkedAlt,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpg" alt="" className="shareProfileImg" />
          <input placeholder="What's up?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FontAwesomeIcon
                icon={faPhotoVideo}
                color="green"
                className="shareIcon"
              />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <FontAwesomeIcon
                icon={faTag}
                color="blue"
                className="shareIcon"
              />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                color="red"
                className="shareIcon"
              />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <FontAwesomeIcon
                icon={faSmile}
                color="orange"
                className="shareIcon"
              />
              <span className="shareOptionText">Emotion</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
