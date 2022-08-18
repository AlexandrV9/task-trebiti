import React from "react";

import Categories from "../../common/Categories/Categories";
import ListOptions from "../../common/ListOptions/ListOptions";
import Input from "../../common/Input/Input";

const Field = ({
  type,
  title,
  onChangeCategory,
  onChangeListItem,
}) => {

  return (
    <div className="field">
      <p>{title}</p>
      <Categories 
        type={type}
        onChangeCategory={onChangeCategory} 
      />
      <div className="content">
        <Input />
        <ListOptions 
          type={type}
          onChangeListItem={onChangeListItem}
        />
      </div>
    </div>
  )
}

export default Field;