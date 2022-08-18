import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { IoMdArrowDropdown } from "react-icons/io";

import "./ListOptions.scss";

import ItemListOption from "./ItemListOption/ItemListOption";

const ListOptions = ({ 
  type,
  onChangeListItem
}) => {

  const listActive = useSelector(state => state[type]?.selectedItemList?.name);
  const list = useSelector(state => state[type]?.list);

  return (
    <div className="list">
      <div className="option">
        <span>{listActive}</span>
        <IoMdArrowDropdown 
          fill="black" 
          stroke="none"
        />
      </div>
      <ul className="options">
        {list.map((item) => (
          <ItemListOption 
            key={nanoid()} 
            type={type}
            item={item} 
            onChangeListItem={onChangeListItem}/>) 
        )}
      </ul>
    </div>
  )
}

export default ListOptions;