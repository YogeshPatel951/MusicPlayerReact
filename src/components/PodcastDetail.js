import React, { Component } from 'react';
import styles from "./Podcast.css";
import podcasts from "../podcast.js";
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom';
class PodcastDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcastID: this.props.keyToPass,
    }

    podcasts.forEach(element => {
      if (element.podcastID == this.state.podcastID) {
        this.image = element.image;
        this.description = element.description;
        this.episodes = element.episodes;
        console.log(this.props.keyToPass)
      }

    });

    this.svg = '<svg width="375px" height="170px" viewBox="0 0 375 170" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><desc>Created with Lunacy</desc><defs><linearGradient x1="0.5" y1="0" x2="0.5" y2="0.981396437" id="gradient_1"><stop offset="0" stop-color="#2C2939" stop-opacity="0" /><stop offset="0.496267021" stop-color="#2C2939" stop-opacity="0.721568644" /><stop offset="1" stop-color="#2C2939" /></linearGradient></defs><path d="M0 0L375 0L375 170L0 170L0 0Z" id="Shadow" fill="url(#gradient_1)" stroke="none" /></svg>'

  }


  render() {

    return (
      <>
        <div className="d-flex flex-column overFlowoff" style={{ backgroundImage: `url(${this.image}`, backgroundRepeat: "none", backgroundSize: "cover", margin: "0", padding: "0" }}>

          <div className="img-wrap">
            {/* <img src={this.image} className="img-fluid" style={{width:"100%"}}></img> */}
            <img src={this.image} className="img-fluid" ></img>
          </div>

          <div className="shadow">
            <div className="down">
              <div className="description ml-5 mr-4">

                <ShowMoreText
                  /* Default options */
                  lines={3}
                  more=' More'
                  less=' Less'
                  anchorClass='showMore White'
                  expanded={false}

                >
                  Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt
                <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore


                et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </ShowMoreText>
              </div>

              <div className="d-flex flex-column forMobile ">
                <div className="ml-4 mt-2 heading"> Episodes</div>
                {this.episodes.map(episode => (
                  <div className="White secondEpi" >
                    <div className=" Epititle ">{episode.titlle}</div>
                    <div className=" date" >{episode.addedOn}</div>
                    <div className=" duration">{episode.duration}</div>
                  </div>
                ))}


              </div>
            </div>

          </div>

        </div>
      </>
    )
  }
}


export default PodcastDetail;