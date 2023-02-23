import React from "react";
import css from "../Counter/Counter.module.css"



const Controls2 = ({ onIncr, onDecr }) => 
    <div className={css.Counter__controls}>
        <button type="button" onClick={onIncr}>
            Увеличить на 1
        </button>
        <button type="button" onClick={onDecr}>
            Уменьшить на 1
        </button>

    </div>



export default Controls2;