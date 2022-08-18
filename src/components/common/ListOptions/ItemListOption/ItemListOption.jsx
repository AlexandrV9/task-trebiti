import React from "react";
import { useSelector } from "react-redux";

const ItemListOption = ({
  type,
  item,
  onChangeListItem,
}) => {

  const listActive = useSelector(state => state[type]?.selectedItemList?.code);

  return (
    <li 
      className={`${item.code === listActive ? "active" : ""}`}
      onClick={() => { onChangeListItem(item) }}
    >
      {item.name}
    </li>
  )
}

export default ItemListOption;