import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import "./ListOptions.scss";


const ListOptions = () => {
  return (
    <div className="list-option">
      <div className="current-option">
        <span>BTC</span>
        <IoMdArrowDropdown fill="black" stroke="none"/>
      </div>
      <ul className="list-option__wrapper">
        <li>ETH</li>
        <li>USDTTRC</li>
      </ul>
    </div>
  )
}

export default ListOptions;