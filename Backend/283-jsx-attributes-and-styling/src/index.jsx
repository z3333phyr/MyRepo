import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="title">Cute dogs </h1>
    <img className="dog-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCwVWKtl4NxgFLu1LYSBSaQa49bvZ0XC5DQ&s" alt="dog"/>
    <img className="dog-img" src="https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=12%2C96%2C2671%2C1335&q=45&auto=format&w=1356&h=668&fit=crop" alt="dog"/>
    <img className="dog-img" src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Golden-Retriever.jpg?v=1645179525" alt="dog"/>

  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// className="dog-img" 
// to launch your react project in your browser
