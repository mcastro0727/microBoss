import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 180,
        clear: "both",
        paddingTop: 10,
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