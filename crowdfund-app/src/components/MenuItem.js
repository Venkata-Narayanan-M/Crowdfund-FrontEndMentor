import React from "react";

function MenuItem(props) {
  return (
    <div>
      <li className="nav-item ">
        <a className="nav-link" href="#">
          {props.item}
        </a>
      </li>
    </div>
  );
}

export default MenuItem;
