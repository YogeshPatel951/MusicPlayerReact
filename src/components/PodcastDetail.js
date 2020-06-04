import React, { Component } from "react";
import styles from "./Podcast.css";
import podcasts from "../podcast.js";
import ShowMoreText from "react-show-more-text";
import { Link } from "react-router-dom";
class PodcastDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcastID: this.props.keyToPass,
      playIcon: 0,
      changeIcon: false,
    };

    podcasts.forEach((element) => {
      if (element.podcastID == this.props.match.params.podId) {
        this.image = element.image;
        this.description = element.description;
        this.episodes = element.episodes;
      }
    });

    this.svg =
      '<svg width="375px" height="170px" viewBox="0 0 375 170" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><desc>Created with Lunacy</desc><defs><linearGradient x1="0.5" y1="0" x2="0.5" y2="0.981396437" id="gradient_1"><stop offset="0" stop-color="#2C2939" stop-opacity="0" /><stop offset="0.496267021" stop-color="#2C2939" stop-opacity="0.721568644" /><stop offset="1" stop-color="#2C2939" /></linearGradient></defs><path d="M0 0L375 0L375 170L0 170L0 0Z" id="Shadow" fill="url(#gradient_1)" stroke="none" /></svg>';
  }
  isClicked = (id) => {
    this.props.passisClicked(id);
    if (this.state.playIcon == id) {
      this.setState({ changeIcon: !this.state.changeIcon });
    } else {
      this.setState({ changeIcon: true });
    }
    this.setState({ playIcon: id });
  };

  render() {
    return (
      <>
        <div
          className="d-flex flex-column overFlowoff"
          style={{
            backgroundImage: `url(${this.image}`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            margin: "0",
            padding: "0",
          }}
        >
          <Link to="/">
            <i
              className="far fa-arrow-alt-circle-left mt-4 mb-5 ml-4 p-0"
              style={{
                color: "white",
                backgroundColor: "#000",
                borderRadius: "100%",
                position: "absolute",
                zIndex: "10000",
                fontSize: "2rem",
              }}
            ></i>
          </Link>
          <div className="img-wrap">
            {/* <img src={this.image} className="img-fluid" style={{width:"100%"}}></img> */}
            <img src={this.image} className="img-fluid"></img>
          </div>

          <div className="shadow">
            <div className="down">
              <div
                className="description"
                style={{
                  paddingRight: "2rem",
                  lineHeight: "20px",
                  fontWeight: "lighter",
                  fontSize: "15px",
                  color: "white",
                }}
              >
                <ShowMoreText
                  /* Default options */
                  lines={3}
                  more=" More"
                  less=" Less"
                  anchorClass="showMore White"
                  expanded={false}
                >
                  Lorem ipsum dolor sit amet, conse cte tuisnr{" "}
                  <a href="https://www.yahoo.com/" target="_blank">
                    yahoo
                  </a>{" "}
                  adihhgp is ci ng elit, sed do eiu smd tem por inci d idjshgdhj
                  hithfun
                  <a
                    href="https://www.google.bg/"
                    title="Google"
                    rel="nofollow"
                    target="_blank"
                  >
                    {" "}
                    google
                  </a>{" "}
                  ut la bore et dolo re mag hfaamet, con sec tetur adipiscing
                  elit, sed do eiustit sugfrmod tempor incididunt ut labore et
                  dolore mag istena aliqua. Utsrt enim ad minim veniam, quis nos
                  dtatrud exercitation ullamco laboris nisi ut aliquip e
                  Loremisgt ipsum dolor sit amet, consectetur adipisc elitsagfg,
                  sed do eiusmod tempor incididunt ut
                </ShowMoreText>
              </div>

              <div className="d-flex flex-column forMobile ">
                <div
                  className="ml-4 mt-3 mb-0 pb-0 heading"
                  style={{
                    fontFamily: "M PLUS Rounded 1c",
                    fontWeight: "200",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {" "}
                  EPISODES
                </div>
                {this.episodes.map((episode) => (
                  <div
                    className="White secondEpi"
                    data-id={episode.id}
                    id={episode.id}
                  >
                    {this.state.changeIcon &&
                    this.state.playIcon ===
                      document
                        .getElementById(episode.id)
                        .getAttribute("data-id") ? (
                      <i
                        data-id={episode.id}
                        id={episode.id}
                        onClick={(e) =>
                          this.isClicked(e.currentTarget.dataset.id)
                        }
                        class="far fa-pause-circle ml-3 mt-3 mr-5"
                        style={{
                          fontSize: "1.5rem",
                          color: "red",
                          position: "absolute",
                        }}
                      ></i>
                    ) : (
                      <i
                        data-id={episode.id}
                        id={episode.id}
                        onClick={(e) =>
                          this.isClicked(e.currentTarget.dataset.id)
                        }
                        className="far fa-play-circle ml-3 mt-3 mr-5"
                        style={{
                          fontSize: "1.5rem",
                          color: "red",
                          position: "absolute",
                        }}
                      ></i>
                    )}

                    <div className="ml-4">
                      <i
                        onClick={() => console.log("download")}
                        class="fas fa-download"
                        style={{
                          fontSize: "1.5rem",
                          color: "red",
                          position: "absolute",
                          right: "0",
                          marginRight: "2.5rem",
                          marginTop: "0.65rem",
                        }}
                      ></i>
                      <div
                        data-id={episode.id}
                        id={episode.id}
                        onClick={(e) =>
                          this.isClicked(e.currentTarget.dataset.id)
                        }
                        className=" Epititle "
                        style={{
                          fontFamily: "M PLUS Rounded 1c",
                          fontWeight: "200",
                          fontSize: "15px",
                        }}
                      >
                        {episode.titlle}
                      </div>
                      <div
                        data-id={episode.id}
                        id={episode.id}
                        onClick={(e) =>
                          this.isClicked(e.currentTarget.dataset.id)
                        }
                        className=" date"
                      >
                        {episode.addedOn}
                      </div>
                      <div
                        data-id={episode.id}
                        id={episode.id}
                        onClick={(e) =>
                          this.isClicked(e.currentTarget.dataset.id)
                        }
                        className=" duration"
                        style={{
                          fontFamily: "Open Sans Condensed",
                          letterSpacing: "1px",
                          fontWeight: "lighter",
                        }}
                      >
                        {episode.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PodcastDetail;
