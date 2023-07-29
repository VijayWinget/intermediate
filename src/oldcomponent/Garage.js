import { Component } from "react";
import Car from "../components/Car";
import CarList from "../components/CarList";

import Model from "./Model";

class Garage extends Component{
   render(){
   //   const  brand  = "Lenovo";
   //   const details = {brand : 'lenove',color : 'black'}
     const details = {} 
     const model="Hundaiu";
     const detailBoolean = details.brand !== undefined ;
    return (<>
    <h2>Old Garage</h2>
     {details.brand !== undefined ?<Car  details={details} /> : "Car Details Requied  ternay operator example \n"}
     {detailBoolean && <Car  details={details} />}
    <Model  model={model}  />
      <br/>
      <br/>
     <h2>List Example</h2>
   <CarList/>
    </>)
   }
}


export default Garage;