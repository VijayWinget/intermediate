import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Garage from './oldcomponent/Garage';
import HeadStyle from "./components/HeadStyle.js";
import FavColor from './statecomponent/FavColor';
import FavCar from './statecomponent/FavCar';
import ScooterNew from './statecomponent/ScooterNew';
import ScooterOld from './statecomponent/ScooterOld';
import List from './statecomponent/List';
import List1 from './statecomponent/List1';
import Timer from './useeffect/Timer';

// function Carf() {
//   return (<h3>Hello, I'm a Car</h3>)  
// }
// function Tool() {
//   return  (
//   <>
//   <h2>Im Tool </h2>
//   </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <Garage/> */}
{/* <HeadStyle/> */}
{/* <FavColor/>
  <FavCar/> */}
{/* 
  <ScooterNew/>
  <ScooterOld/> */}

  {/* <List/> */}
  {/* <List1/> */}

  <Timer/>
  </React.StrictMode>

);

reportWebVitals();
