import React from "react";

const Children = React.memo((props) => {
  console.log("I am re-rendered");
  return (
    <div>
      <h3>I am Child</h3>
      <input
        type='number'
        onChange={(event) => {
          props.expensiveFunction(event.target.value);
        }}
      />
    </div>
  );
});

export default Children;
