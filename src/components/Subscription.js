import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom';
const Subscription = () => {
  return (
    <div className="backimage ">
      <div className="mb-5" style={{backgroundColor:"rgba(0,0,0,0.4)", position:"absolute",width:"100%",height:"auto",boxShadow:"inset 0 -400px 150px #000"}}>
        <div style={{paddingBottom:"50px"}}>
      <NavBar />

      <div className="d-flex flex-column mt-0" style={{fontFamily:"M PLUS Rounded 1c",fontWeight:"400"}}>

        <div className=" subCenter backSub mb-3" >
          <Link to={{
            pathname: '/',
            state: {
              warning: true
            }
          }}>
          <button className="btn " type="button"><span className="White">SUBSCRIBE NOW</span></button>
          </Link>
        </div>

        <div className="White subText mb-3">
        <img src="images/CombinedShape.png" width="30px" className="ml-3 mr-1 mt-3" style={{fontSize:"0.5rem",color:"red",position:"absolute",marginRight:"2.5rem",marginTop:"0.65rem"}}/>
          <div className=" subTextSize ml-4">LISTEN UNLIMITED</div>
          <div className=" subDesc ml-4" >Gaming Podcasts</div>
        </div>
        <div className="White subText mb-3">
        <i class="fas fa-download ml-3 mr-1 mt-3" style={{fontSize:"1.5rem",color:"rgba(255,20,10,0.8)",position:"absolute",marginRight:"2.5rem",marginTop:"0.65rem"}}></i>
          <div className=" subTextSize ml-4">DOWNLOAD UNLIMITED</div>
          <div className=" subDesc ml-4" >Gaming Podcasts</div>
        </div>
        <div className="White subText mb-3">
        <img src="images/check-circle.png" width="30px" className="ml-3 mr-1 mt-3" style={{fontSize:"0.5rem",color:"red",position:"absolute",marginRight:"2.5rem",marginTop:"0.65rem"}}/>
          <div className=" subTextSize ml-4">$2/Months(First 3 days FREE)</div>
          <div className=" subDesc ml-4" >Renews monthly unless cancelled</div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
export default Subscription;