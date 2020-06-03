import React from 'react';
import './CastOfWeek.css'
import { Container, Col, Row } from 'react-bootstrap'
import PlayIcon from './play-circle-regular.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';

const CastofWeek = ({ data , passData}) => {
  function handleClick(e) {
    passData(4)
  }

  const arr=[1,2,3]

  return (
    <div className="pb-4">

      <div className='h4 al pl-3 pb-4 pt-0 mt-0 White' style={{fontFamily:"M PLUS Rounded 1c",fontWeight:"200"}}>GAMECAST OF TH WEEK</div>

      <div className="container-fluid  hei mb-2  pb-1">
        <div className="row ">
          <Link to="/podcast">
            <img className="img-fluid week" src="images/a.png" onClick={handleClick}/>
          </Link>

          <div className="col ep widset">
            {data.map(epi => (

              <p className="eplist White  " key={epi.key}>
      
                <i class="far fa-play-circle ml-1 mr-3" style={{fontSize:"1.3rem",color:"red"}} key={epi.key}></i>
                <span style={{fontFamily:"M PLUS Rounded 1c",fontWeight:"light"}}>{epi.Name}</span><br />
                <span className=" small  time" key={epi.key}>{epi.time}</span></p>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
export default CastofWeek;