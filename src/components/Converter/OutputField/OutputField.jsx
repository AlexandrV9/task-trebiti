import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./OutputField.module.scss";

import Categories from "../../common/Categories/Categories";
import ListOptions from "../../common/ListOptions/ListOptions";
import Input from "../../common/Input/Input";

import { changeOutputListItem, changeOutputCategory, filtredOutputData } from "../../../redux/slices/outputSlice";

const OutputField = () => {

  const dispatch = useDispatch();

  const selectedItemList = useSelector(state => state.input.selectedItemList);

  const handleChangeCategory = (category) => { dispatch(changeOutputCategory(category)) };
  const handleChangeListItem = (listItem) => { dispatch(changeOutputListItem(listItem)) };

  useEffect(() => {
    if(selectedItemList) {
      dispatch(filtredOutputData(selectedItemList))
    }
  },[dispatch, selectedItemList])

  return (
    <div className={styles.field}>
      <p>Получаете</p>
      <Categories 
        type="output" 
        onChangeCategory={handleChangeCategory} 
      />
      <div className={styles.content}>
        <Input />
        <ListOptions 
          type="output"
          onChangeListItem={handleChangeListItem}
        />
      </div>
    </div>
  )
}

export default OutputField;