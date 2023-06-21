import React from "react";
import ReactDOM from "react-dom/client";

// const heading =
// const heading = React.createElement("h2", { id: "h2", key: "h2" }, "hello");

const heading = (
  <h1 id="title" key={"h2"}>
    hello react
  </h1>
);
const Ttitle = () => (
  <h1 id="title" key={"h3"}>
    Food Villa
  </h1>
);

//composing component use one component inside another component

const HeaderComponent = () => {
  return (
    <div>
      {52 * 588}
      <Ttitle />
      {Ttitle()}
      {heading}
      <h2>React Function component</h2>
      <h3>React Function h2 tag</h3>
    </div>
  );
};

console.log(HeaderComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(<HeaderComponent />);
