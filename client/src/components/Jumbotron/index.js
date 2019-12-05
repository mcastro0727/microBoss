import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 185,
        clear: "both",
        paddingTop: 5,
        textAlign: "center",
        backgroundColor: "#FEE07C",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 #000",
        margin: "auto"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
