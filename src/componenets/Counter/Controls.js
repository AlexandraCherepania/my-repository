import React from "react";
import css from "../Counter/Counter.module.css"

const Controls = ({ onIncr, onDecr }) => {
    <div className={css.Counter__controls}>

        <button type="button" onClick={onIncr}>Збільшити на 1
        </button>

        <button type="button" onClick={onDecr} >Зменшити на 1
        </button>

    </div>
}


export default Controls;