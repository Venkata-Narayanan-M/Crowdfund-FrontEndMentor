import React from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const listItem = ["About", "Discover", "GetStarted"];
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./images/logo.svg" className="img fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav ms-auto mb-2 me-2">
              {listItem.map((item, index) => {
                return <MenuItem item={item} key={index} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
