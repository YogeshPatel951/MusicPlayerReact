import React from 'react'
import Navbar from './NavBar'
import { Link } from 'react-router-dom'
const MyAccount = () => {
  /* function gotoHome(props) {
    history.push("/")
  } */
  return (
    <div>
      <Navbar />
      <div className="roundAcc White red "><span className="mt- fsize">My Account</span></div>

      <div className="d-flex flex-column">
        <div className="mt-4 roundback White">
          <div className=" fsize accrowup accrow  " >USER  PROFILE</div>
          <div className=" accrow detail">+919999999999</div>
        </div>
        <div className=" mt-4   roundback White">
          <div className=" fsize accrowup accrow " >CURRENTLY ACTIVE PLAN</div>
          <div className=" accrow detail">GAMECAST MONTHLY</div>

        </div>
        <div className=" mt-4 roundback White">
          <div className=" fsize  accrowup accrow " >LAST CHARGED ON</div>
          <div className=" accrow detail">10 May,2020 19:10:00</div>

        </div>
        <div className=" mt-4 roundback White">
          <div className=" fsize  accrowup accrow " >NEXT BILLING DUE ON</div>
          <div className=" accrow detail">10 June, 2020</div>
        </div>


        <button type="button" className=" btn  cancelButton White" /* onClick={gotoHome} */>
          <Link to="/" className="White ">
            <span className="cancelWidht"> Cancel</span>
          </Link >
        </button>


      </div>
    </div>
  )
}
export default MyAccount;