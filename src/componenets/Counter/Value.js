import React from "react";
import css from  "../Counter/Counter.module.css"

const Value = ( { val }) => 
    <span className={css.Counter__value}>{val}</span>


export default Value;