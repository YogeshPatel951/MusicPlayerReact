import React from 'react'
import NavBar from './NavBar'
const Subscription = () => {
  return (
    <div className="backimage" style={{boxShadow:"inset 0 100px 70px #000"}}>
      <NavBar />
      <div className="d-flex flex-column  ">
        <div className=" subCenter backSub mb-3">
          <button className="btn " type="button"><span className="White">SUBSCRIBE NOW</span></button>
        </div>
        <div className="White subText mb-2">
          <div className=" subTextSize ">LISTEN UNLIMITED</div>
          <div className=" subDesc" >Gaming Podcasts</div>
        </div>
        <div className="White subText mb-2">
          <div className=" subTextSize">DOWNLOAD UNLIMITED</div>
          <div className=" subDesc" >Gaming Podcasts</div>
        </div>
        <div className="White subText mb-2">
          <div className=" subTextSize">$2/Months(First 3 days FREE)</div>
          <div className=" subDesc" >Renews monthly unless cancelled</div>
        </div>
      </div>
    </div>
  )
}
export default Subscription;