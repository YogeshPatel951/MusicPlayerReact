import React from 'react';
import './CastOfWeek.css'
import { Container, Col, Row } from 'react-bootstrap'
import PlayIcon from './play-circle-regular.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';

const CastofWeek = ({ data }) => {

  return (
    <div>

      <div className='h2 al pl-3 pb-4 pt-0 mt-0 White'>GameCast of the Week</div>

      <div className="container-fluid mb-5 ">
        <div className="row ">
          <Link to="/podcast">
            <img className="img-fluid week" src="images/a.png" />
          </Link>

          <div className="col ep widset">
            {data.map(epi => (

              <p className="eplist White  " key={epi.key}>
                <img src={PlayIcon} width="40px" className="mr-4 red" key={epi.key} />
                {epi.Name}<br />
                <span className=" small  time" key={epi.key}>{epi.time}</span></p>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
export default CastofWeek;