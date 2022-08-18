import React from "react";
import { useDispatch } from "react-redux";

import styles from "./InputField.module.scss";

import Categories from "../../common/Categories/Categories";
import ListOptions from "../../common/ListOptions/ListOptions";
import Input from "../../common/Input/Input";

import { changeInputCategory, changeInputListItem } from "../../../redux/slices/inputSlice";

const InputField = () => {

  const dispatch = useDispatch();

  const onChangeCategory = (category) => { dispatch(changeInputCategory(category)) }
  const onChangeListItem = (listItem) => { dispatch(changeInputListItem(listItem)) }

  return (
    <div className={styles.field}>
      <p>Отдаёте</p>
      <Categories 
        type="input" 
        onChangeCategory={onChangeCategory} 
      />
      <div className={styles.content}>
        <Input />
        <ListOptions 
          type="input"
          onChangeListItem={onChangeListItem}
        />
      </div>
    </div>
  )
}

export default InputField;