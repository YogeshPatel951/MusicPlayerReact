import React, { useState } from 'react'
import CastofWeek from './GameCastOfWeek'
import { MusicCard } from './MusicCard'
import MList from '../data.json'
import { Col } from 'react-bootstrap'
import CastOfWeekData from '../CastOfTheWeekData.json'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from './NavBar'
const Home = (props) => {
  const [alertStatus, SetalertStatus] = useState(true);
  const [warning, Setwarning] = useState(false);
  const [gotKey, setgotKey] = useState(0);
  function CloseAlert() {
    SetalertStatus(false);
  }
  function passData(key) {
    props.passPodCastData(key)
  }
  return (
    <div className="wid">
      <Navbar />
      {alertStatus == true ? (
        <Container className="alertmsg  " style={{ backgroundColor: warning ? "rgb(255,50,12)" : "aqua" }}>
          <button className="btn closeIcon" onClick={CloseAlert}>X</button>
          {warning ? (
            <>
              <div className=' alertTitle h3'>WARNING</div>
              <div className="d-flex flex-row">
                <div className="alertIcon   h2">!</div>
                <Col>
                  <div className="message "> Warning husduif usd fusuif iud gs fiu sad asda as das ds ad ad sa ds gf</div>
                </Col>
              </div>
            </>
          ) : (
              <>
                <div className=' alertTitle h3'>SUCCESS</div>
                <div className="d-flex flex-row">
                  <div className="alertIcon   h2">Y</div>
                  <Col>
                    <div className="message "> Success husduif usd fusuif iud gs fiu sad asda as das ds ad ad sa ds gf</div>
                  </Col>
                </div>
              </>
            )}
        </Container>) : ""}
      <div className="pl-3 pb-3  h2 White">Top Trending Podcast</div>
      <div className="d-flex items" key="1" >
        <Link to="/podcast">
          <div className="d-flex flex-row">
            {MList.map(data => (<Col xs={2} className="" data-id={data.id}> <MusicCard data={data} passData={passData} />
            </Col>))
            }
          </div>
        </Link>
      </div>
      <CastofWeek data={CastOfWeekData} />
    </div>
  );
}
export default Home;