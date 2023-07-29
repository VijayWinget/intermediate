import { Component } from "react";


class ScooterOld extends Component {

    constructor() {
        super();

        this.state = {
            name: "Audi",
            color: "green",
            brand: "Hundai",
            year: "2020-12-09"
        }
    }

    render() {

        return (<><h1>My Scooter</h1>
            <p>name : {this.state.name}</p>
            <p>color : {this.state.color} </p>
            <p>brand : {this.state.brand}</p>
            <p>year: {this.state.year}</p>
            <button onClick={() => { this.setState((previousState)=>{ return {...previousState,color: "White"} }) }} >Change Scooter</button></>)
    }

}


export default ScooterOld;