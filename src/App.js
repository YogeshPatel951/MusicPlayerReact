import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyAccount from './components/MyAccount'
import Subscription from './components/Subscription'
import Navbar from './components/NavBar'
import Player from './components/Player'
import PodcastDetail from './components/PodcastDetail'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import podcast from './podcast';
import MList from './data.json'
import bg from "./components/Background.png";
function App() {
  const[podClicked,setPodClicked]=useState(0);
  /*  function getPage() {
     const route = window.location.pathname;
     if (route == "/Myaccount") return <MyAccount/;
     if (route == "/Subscription") return <Subscription/>;
     if (route == "/podcast") return <PodcastDetail/>;
     return <Home/>;
   } */
  let keyToPass = ""
  function passPodCastData(key) {
    console.log("podCastData")
    console.log(key)
    keyToPass = key;
    console.log(keyToPass)
  }
  let isClicked=0
  function passPodCastIsClicked(isClick){
   setPodClicked(isClick)
   console.log(window.location.pathname)
  }


  return (
    <>
    <Router>
      <div className="wid">
        <Route path="/" exact
          render={(props) => <Home {...props} passPodCastData={passPodCastData} />} />
        <Route path="/Myaccount" component={MyAccount} />
        <Route path="/Subscribe" component={Subscription} />
        <Route path="/Podcast"
          render={(props) => <PodcastDetail {...props} keyToPass={keyToPass} data={MList} passisClicked={passPodCastIsClicked} />} />
      </div >
    </Router>
    {window.location.pathname!='/Subscribe'?(
      <Player isClicked={podClicked} />
    ):<></>
    }
    </>
  );
}
export default App;
