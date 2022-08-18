import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';


import "./Categories.scss";
import { data } from "../../../utils/constants";
import ItemCategory from "./ItemCategory/ItemCategory";

const Categories = ({
  type,
  onChangeCategory
}) => {

  const selectedCategory = useSelector(state => state[type].selectedCategory);
  const availableCategory = useSelector(state => state[type].categories);

  return (
    <ul className="categories">
      {data.map(item => {
        return <ItemCategory 
          key={nanoid()}
          active={item.category === selectedCategory}
          item={item}
          disabled={!availableCategory.includes(item.category)}
          onClick={onChangeCategory}
        />
      })}
      
    </ul>
  );
}

export default Categories;