import React from "react";
import ReactDOM from "react-dom/client";

const Ttitle = () => (
  <a href="/">
    <img
      className="logo"
      src="https://lh3.googleusercontent.com/EbPS9tYwL3H8NkiYJPJbuRHmeIFVUYJs99IdfFT7ea6ZF9sw1Vhw9tiCFVCXqornHGKZyP8sy89up4G-yKqGzoLgPx8"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Ttitle />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <h2>body</h2>
    </div>
  );
};
const Footer = () => {  
  return <h2>Footer</h2>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
