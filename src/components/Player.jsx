import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(e) {
  //   setSubmitted(false);
  //   // setEnteredPlayerName((prevState) => e.target.value); // this is only required when you need to update state based on previous state
  //   setEnteredPlayerName(e.target.value);
  //   console.log(enteredPlayerName);
  // }

  function handleClick() {
    //setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2> */}
      {/* This is the regular manner for refs: */}
      {/* <h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2> */}
      {/* shortcut: */}
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        {/* GET RID OF THIS FOR REFS inside the input element: onChange={handleChange} and value={enteredPlayerName}*/}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
