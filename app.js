// HMR = Hot Module Reloading (Parcel)
// File Watcher Algorithm used here  written in c++

import React from "react";
import ReactDOM from "react-dom/client";



// const heading =
const heading = React.createElement("h2", { id: "h2", key: "h2" }, "hello");





//JSX  ========>

const heading2 = (
  <h1 id="title" key={"h2"}>
    hello react
  </h1>
);





console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
