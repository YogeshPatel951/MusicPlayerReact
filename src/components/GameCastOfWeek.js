import React, { useState } from "react";
import "./CastOfWeek.css";
import { Container, Col, Row } from "react-bootstrap";
import PlayIcon from "./play-circle-regular.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import podcast from "../podcast";

const CastofWeek = ({ data, passData, passEpiKey }) => {
  function handleClick(key) {
    passData(key);
  }
  function passEpisode(ke) {
    passEpiKey(ke);
    if (iconId === ke) {
      setPasueIcon(!pauseIcon);
    } else {
      setPasueIcon(true);
    }
    setIconId(ke);
  }
  const [pauseIcon, setPasueIcon] = useState(false);
  const [iconId, setIconId] = useState(0);
  return (
    <div className="pb-4">
      <div
        className="h4 al pl-3 pb-4 pt-0 mt-0 White"
        style={{ fontFamily: "M PLUS Rounded 1c", fontWeight: "200" }}
      >
        GAMECAST OF THE WEEK
      </div>

      <div className="container-fluid  hei mb-2  pb-1">
        <div className="row ">
          <Link to={`/podcast/4`}>
            <img
              src="images/a.png"
              className="img-fluid week"
              data-id="4"
              onClick={(e) => handleClick(e.currentTarget.dataset.id)}
            />
          </Link>

          <div className="col ep widset">
            {data.map((epi) => (
              <p
                className="eplist White  "
                data-id={epi.key}
                key={epi.key}
                id={epi.key}
                onClick={(e) => passEpisode(e.currentTarget.dataset.id)}
              >
                {pauseIcon &&
                iconId ===
                  document.getElementById(epi.key).getAttribute("data-id") ? (
                  <i
                    class="far fa-pause-circle ml-1 mr-3"
                    style={{ fontSize: "1.3rem", color: "red" }}
                  ></i>
                ) : (
                  <i
                    class="far fa-play-circle ml-1 mr-3"
                    style={{ fontSize: "1.3rem", color: "red" }}
                  ></i>
                )}

                <span
                  style={{
                    fontFamily: "M PLUS Rounded 1c",
                    fontWeight: "light",
                  }}
                >
                  {epi.Name}
                </span>
                <br />
                <span className=" small  time" key={epi.key}>
                  {epi.time}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CastofWeek;
