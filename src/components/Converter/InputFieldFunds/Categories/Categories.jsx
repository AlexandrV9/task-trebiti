import React from "react";
import { nanoid } from '@reduxjs/toolkit';

import "./Categories.scss";
import { data } from "../../../../utils/constants";
import ItemCategory from "./ItemCategory/ItemCategory";


const Categories = () => {

  return (
    <ul className="categories">
      {data.map(item => (
        <ItemCategory 
          key={nanoid()}
          data={item}
        />
      ))}
      
    </ul>
  );
}

export default Categories;