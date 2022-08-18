import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowDownUp } from "react-icons/bs";

import "./Converter.scss";

import Field from "./Field/Field";
import RoundLoader from "../common/RoundLoader/RoundLoader";

import { fetchData } from "../../redux/slices/appSlice";
import { changeInputCategory, changeInputListItem } from "../../redux/slices/inputSlice";
import { changeOutputCategory, changeOutputListItem, filtredOutputData } from "../../redux/slices/outputSlice";


const Converter = () => {

  const loading = useSelector(state => state.app.loading);
  const selectedItemList = useSelector(state => state.input.selectedItemList);
  const dispatch = useDispatch();
  const testTimeFetchReq = 500;

  const wrapperField = useCallback((WrappedComponent, type) => {

    const Component = () => {
      const props = { type };

      switch(type) {
        case "input": {
          props.title = "Отдаёте"
          props.onChangeListItem = (listItem) => { dispatch(changeInputListItem(listItem)) }
          props.onChangeCategory = (category) => { dispatch(changeInputCategory(category)) }
          break;
        }
        case "output": 
        default: {
          props.title = "Получаете"
          props.onChangeListItem = (listItem) => { dispatch(changeOutputListItem(listItem)) }
          props.onChangeCategory = (category) => { dispatch(changeOutputCategory(category)) }
          break;
        }
      }

      return <WrappedComponent {...props} />
    }

    return Component;
  
  },[dispatch]);

  const InputField = wrapperField(Field, "input");
  const OutputField = wrapperField(Field, "output");

  useEffect(() => {
    if(selectedItemList) {
      dispatch(filtredOutputData(selectedItemList))
    }
  },[dispatch, selectedItemList])

  useEffect(() => {
    dispatch(fetchData(testTimeFetchReq));
  },[dispatch])

  return (
    <section className="converter">
      {loading ? 
        <RoundLoader /> 
        : 
        <>
          <InputField />
          <BsArrowDownUp 
            fill="#f08080" 
            stroke="none" 
            className="icon"
          />
          <OutputField />
        </>
      }
    </section>
  )
}

export default Converter;