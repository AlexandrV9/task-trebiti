import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowDownUp } from "react-icons/bs";

import styles from "./Converter.module.scss";

import InputField from "./InputField/InputField";
import OutputField from "./OutputField/OutputField";
import RoundLoader from "../common/RoundLoader/RoundLoader";

import { fetchData } from "../../redux/slices/inputSlice";

const Converter = () => {

  const loading = useSelector(state => state.input.loading);
  const dispatch = useDispatch();
  const testTimeFetchReq = 500;

  useEffect(() => {
    dispatch(fetchData(testTimeFetchReq));
  },[dispatch])

  return (
    <section className={styles.converter}>
      {loading ? 
        <RoundLoader /> 
        : 
        <>
          <InputField />
          <BsArrowDownUp 
            fill="#f08080" 
            stroke="none" 
            className={styles.icon}
          />
          <OutputField />
        </>
      }
    </section>
  )
}

export default Converter;