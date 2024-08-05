import React, { useMemo, useState } from "react";

//performance optimization React Hooks
// memoization => remember
//useMemo :- memoizes value
// useCallback :- memoizes function

const expensiveFunction = (num) => {
  for (let i = 1; i <= 100; i++) {
    console.log("num entered");
  }
  return num;
};
const Hello = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomText, setRandomText] = useState("");

  //======use of useMemo() ===========================
  //======memorizes value of userNumber====i.e value==
  const result = useMemo(() => {
    return expensiveFunction(userNumber);
  }, [userNumber]);

  return (
    <div>
      <input
        placeholder='enter a number'
        type='number'
        onChange={(event) => {
          setUserNumber(event.target.value);
        }}
      />
      <h3>{result}</h3>
      <input
        placeholder='enter text'
        onChange={(e) => {
          setRandomText(e.target.value);
        }}
      />
      <h3>{randomText}</h3>
    </div>
  );
};

export default Hello;
