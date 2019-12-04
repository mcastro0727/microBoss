import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        paddingTop: 100,
        textAlign: "center",
        backgroundColor: "#A9DFF3"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
