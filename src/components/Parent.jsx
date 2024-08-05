import React, { useCallback, useState } from "react";
import Children from "./Children";

const Parent = () => {
  const [randomText, setRandomText] = useState("");

  const expensiveFunction = useCallback((num) => {
    for (let i = 0; i <= 100; i++) {
      console.log("Function Hit");
    }
    return num;
  }, []);

  return (
    <div>
      <h3>I am parent</h3>
      <input
        type='text'
        placeholder='text'
        onChange={(event) => {
          setRandomText(event.target.value);
        }}
      />
      <h4>{randomText}</h4>
      <Children expensiveFunction={expensiveFunction} />
    </div>
  );
};

export default Parent;
