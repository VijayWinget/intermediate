
function Car(props) {
// const brand = "Shift";
const { brand ,color } = props.details
    return (<><h2>New Car  </h2>
    <p>*** Brand Name  {brand}   Color :  {color} </p>
    </>);
  }


  export default Car;