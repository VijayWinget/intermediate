import { useState } from "react"


function ScooterNew(){

const  [scooter ,setScooter]=useState({
name : "Audi",
color: "green",
brand: "Hundai",
year: "2020-12-09"
})

  function updateColor(){
    // setScooter({color: "Bule"})
    setScooter(previusState =>{
        return { ...previusState,color : "blue"}

    })
  }

    return (<>
    <h1>My Scooter</h1>
    <p>name : {scooter.name}</p>
    <p>color : {scooter.color} </p>
    <p>brand : {scooter.brand}</p>
    <p>year: {scooter.year}</p>
    <button onClick={()=>{ updateColor()}} >Change Scooter</button>
    </>)
}


export default ScooterNew;
