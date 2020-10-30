import React from "react";

const App = () => {
  return (
    <>
      <h1>Hello Ime Control</h1>
      <div>{"textTransform : uppercase"}</div>
      <input type="text" style={{ textTransform: "uppercase" }} />
    </>
  );
};

export default App;
