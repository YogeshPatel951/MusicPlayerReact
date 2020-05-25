import React from 'react'
import NavBar from './NavBar'
const Subscription = () => {
  return (
    <div className="backimage">
      <NavBar />
      <div className="d-flex flex-column  ">
        <div className=" subCenter backSub">
          <button className="btn " type="button"><span className="White">SUBSCRIBE NOW</span></button>
        </div>
        <div className="White subText">
          <div className=" subTextSize ">LISTEN UNLIMITED</div>
          <div className=" subDesc" >Gaming Podcasts</div>
        </div>
        <div className="White subText">
          <div className=" subTextSize">DOWNLOAD UNLIMITED</div>
          <div className=" subDesc" >Gaming Podcasts</div>
        </div>
        <div className="White subText">
          <div className=" subTextSize">$2/Months(First 3 days FREE)</div>
          <div className=" subDesc" >Renews monthly unless cancelled</div>
        </div>
      </div>
    </div>
  )
}
export default Subscription;