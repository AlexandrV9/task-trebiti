import React from "react";

import "./InputFieldFunds.scss";
import Categories from "./Categories/Categories";
import Input from "./Input/Input";
import ListOptions from "./ListOptions/ListOptions";

const InputFieldFunds = ({
  title
}) => {
  return (
    <div className="input-field-funds">
      <p>{title}</p>
      <Categories />
      <div className="content">
        <Input />
        <ListOptions />
      </div>
    </div>
  )
}

export default InputFieldFunds;