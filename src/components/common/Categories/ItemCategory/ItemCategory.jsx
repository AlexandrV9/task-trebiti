import React from "react";

const ItemCategory = ({
  item,
  onClick,
  active,
  disabled
}) => {

  return (
    <li 
      className={`${active ? "active" : ""} ${disabled ? "disabled" : ""}`}
      onClick={() => { onClick(item.category) }}
    >
      {item.title}
    </li>
  )
}

export default ItemCategory;