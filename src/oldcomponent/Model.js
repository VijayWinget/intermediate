import { Component } from "react";

class Model extends Component{
render (){
    const { model}= this.props; 
    return  (<><h1>New model Compoment</h1>
    <p> Model : {model}</p></>)
}
}

export default Model;