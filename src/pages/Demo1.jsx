import { React, ReactDOM, useState } from "../CONST";

// import React from "../kreact/";
// import {useState} from "../kreact/ReactDOM";

export default function Demo1(props) {
  const [count, setCount] = useState(0);
  return (
      <p onClick={() => setCount(count + 1)}>{count}</p>
  );
}
