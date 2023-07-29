import { useEffect, useState } from "react";

function Timer() {
const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Screen rendering *** **");
  }, [count]);


  function updateCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <h1>Func Component rendering by Increment {count} </h1>
      <button onClick={updateCount}>Add Increment</button>
    </>
  );
}

export default Timer;
