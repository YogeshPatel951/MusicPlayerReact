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
        <Container className="alertmsg  " style={{ backgroundColor: warning ? "rgba(255,50,12,0.5)" : "aqua" }}>
          <button className="btn closeIcon" onClick={CloseAlert}><i class="fas fa-times"></i></button>
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
                <i className="far fa-check-square h1 mr-5 ml-2 mt-4 alertIcon" style={{fontSize:"3.5rem"}}></i>
                
                  <Col>
                    <div className="message "> Success husduif usd fusuif iud gs fiu sad asda as das ds ad ad sa ds gf</div>
                  </Col>
                </div>
              </>
            )}
        </Container>) : ""}
      <div className="pl-3 pb-3  h4 White">TOP TRENDING PODCAST</div>
      <div className="d-flex items" key="1" >
        <Link to="/podcast">
          <div className="d-flex flex-row">
            {MList.map(data => (<Col xs={2} className="" data-id={data.id}> <MusicCard data={data} passData={passData} />
            </Col>))
            }
          </div>
        </Link>
      </div>
      <CastofWeek data={CastOfWeekData} passData={passData}/>

      <div className="pl-3 pb-3  h2 White">Gamer's Top Choice</div>
      <div className="d-flex items pb-5 mb-5" key="1" >
        <Link to="/podcast">
          <div className="d-flex flex-row">
            {MList.map(data => (<Col xs={2} className="" data-id={data.id}> <MusicCard data={data} passData={passData} />
            </Col>))
            }
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Home;