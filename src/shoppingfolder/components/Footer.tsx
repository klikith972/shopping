import React from "react";

//const [];

const Footer = () => {
  return (
    <div className="footersection">
      <div className="Box">
        <h3>Subscribe to our awesome emails</h3>
        <br />
        <p>Get our latest offers and news straiht in your inbox</p>
        {/*<img src="assets/footer.png" alt="banner"></img>*/}
        <input type="text" placeholder="Please enter an email adress"></input>
        {/*<button onClick={}></button>*/}
      </div>
      <div className="mbox">
        <h3>Hey,Happy shopping 🥳🥳🥳🥳</h3>
      </div>
      <div className="rbox">
        <h3>Download our Apps</h3>
        <p>shop on our products and offer on the go</p>
      </div>
    </div>
  );
};

export default Footer;
