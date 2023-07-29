import { Component} from "react";

class FavCar extends Component {
constructor(){
    super();
    this.state = {color : "AUDI"}
}
    render() {
        return (<>
            <h1>class Compoent State My Fav Car  {this.state.color} </h1>
            <button onClick={() => { this.setState({ color : "BENZE" }) }} >Change</button>
        </>)
    }
}

export default FavCar;