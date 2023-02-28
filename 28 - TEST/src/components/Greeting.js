import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>its good to see you</p>}

      {/*     <p>its good to see you</p> */}
      {changedText && <p>Changed</p>}
      <button onClick={changeTextHandler}></button>
    </div>
  );
};

export default Greeting;
