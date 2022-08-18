import React from "react";

const ItemCategory = ({
  item,
  onClick,
  active,
  disabled
}) => {

  const handleClick = () => {
    if(!disabled) {
      onClick(item.category)
    }
  }

  return (
    <li 
      className={`${active ? "active" : ""} ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
    >
      {item.title}
    </li>
  )
}

export default ItemCategory;