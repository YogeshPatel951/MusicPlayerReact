import React from 'react'
import Navbar from './NavBar'
import { Link } from 'react-router-dom'
const MyAccount = () => {
  /* function gotoHome(props) {
    history.push("/")
  } */
  return (
    <div className="mb-5 pb-5">
      <Navbar />
      <div className="roundAcc  red pt-2"><span className="myAcc">MY ACCOUNT</span></div>

      <div className="d-flex flex-column" style={{fontFamily:"M PLUS Rounded 1c",fontWeight:"200"}}>
        <div className="mt-4 accBlock roundback White">
        <span><i className="far fa-user mt-4 ml-3" style={{position:"absolute",zIndex:"20000",fontSize:"2rem",color:"rgba(255,20,10,0.8)"}}></i></span>
          <div className=" fsize accrowup accrow ml-3" >USER  PROFILE</div>
          <div className=" accrow detail ml-3">+919999999999</div>
        </div>
        <div className=" mt-4 accBlock   roundback White">
        <span><i className="fas fa-th-large mt-4 ml-3" style={{position:"absolute",zIndex:"20000",fontSize:"2rem",color:"rgba(255,20,10,0.8)"}}></i></span>

          <div className=" fsize accrowup accrow ml-3" >CURRENTLY ACTIVE </div>
          <div className=" accrow detail ml-3">GAMECAST MONTHLY</div>

        </div>
        <div className=" mt-4 accBlock roundback White">
        <span><i className="far fa-check-square mt-4 ml-3" style={{position:"absolute",zIndex:"20000",fontSize:"2rem",color:"rgba(255,20,10,0.8)"}}></i></span>

          <div className=" fsize  accrowup accrow ml-3" >LAST CHARGED ON</div>
          <div className=" accrow detail ml-3">10 May, 2020 19:10:00</div>

        </div>
        <div className=" mt-4 accBlock roundback White">
        <span><i className="far fa-clock mt-4 ml-3" style={{position:"absolute",zIndex:"20000",fontSize:"2rem",color:"rgba(255,20,10,0.8)"}}></i></span>

          <div className=" fsize  accrowup accrow ml-3" >NEXT BILLING DUE ON</div>
          <div className=" accrow detail ml-3">10 June, 2020</div>
        </div>


        <button type="button" className=" btn   cancelButton White" /* onClick={gotoHome} */>
          <Link to="/" className="White ">
            <span className="cancelWidht"> Cancel My Plan</span>
          </Link >
        </button>


      </div>
    </div>
  )
}
export default MyAccount;