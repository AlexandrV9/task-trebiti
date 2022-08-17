import React from "react";

import "./Converter.scss";
import { BsArrowDownUp } from "react-icons/bs";
import InputFieldFunds from "./InputFieldFunds/InputFieldFunds";

const Converter = () => {
  return (
    <section className="converter">
      <InputFieldFunds title="Отдаёте" />
      <BsArrowDownUp fill="#f08080" stroke="none" className="icon"/>
      <InputFieldFunds title="Получаете" />
    </section>
  )
}

export default Converter;