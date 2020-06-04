import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyAccount from "./components/MyAccount";
import Subscription from "./components/Subscription";
import Navbar from "./components/NavBar";
import Player from "./components/Player";
import PodcastDetail from "./components/PodcastDetail";
import Home from "./components/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import podcast from "./podcast";
import MList from "./data.json";
import bg from "./components/Background.png";
function App() {
  const [podClicked, setPodClicked] = useState(0);
  const [checkButton, setCheckButton] = useState(false);
  /*  function getPage() {
     const route = window.location.pathname;
     if (route == "/Myaccount") return <MyAccount/;
     if (route == "/Subscription") return <Subscription/>;
     if (route == "/podcast") return <PodcastDetail/>;
     return <Home/>;
   } */
  let keyToPass = "";
  function passPodCastData(key) {
    keyToPass = key;
  }

  function passPodCastIsClicked(isClick) {
    if (isClick === podClicked) {
      setCheckButton(!checkButton);
    } else {
      setCheckButton(false);
    }
    setPodClicked(isClick);
  }

  return (
    <>
      <div className="wid">
        <Route
          path="/"
          exact
          render={(props) => (
            <Home
              {...props}
              passPodCastData={passPodCastData}
              passisClicked={passPodCastIsClicked}
            />
          )}
        />
        <Route path="/Myaccount" component={MyAccount} />
        <Route path="/Subscribe" component={Subscription} />
        <Route
          path="/Podcast/:podId"
          render={(props) => (
            <PodcastDetail
              {...props}
              keyToPass={keyToPass}
              data={MList}
              passisClicked={passPodCastIsClicked}
            />
          )}
        />
      </div>

      {window.location.pathname != "/Subscribe" ? (
        <Player isClicked={podClicked} sameButtonClicked={checkButton} />
      ) : (
        <></>
      )}
    </>
  );
}
export default App;
