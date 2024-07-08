import React, { useState } from "react";
import styles from './Button.module.css';


function StateTutorial() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(". . .");


    const increment = () => {
        setCounter(counter+3);
    };

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };
    

    return (
        <div>
            {counter} <button className={styles.secondarybutton} onClick={increment}> Increment</button>
            <br></br>
            <input placeholder="Enter Your Name Please..." onChange={onChange} className={styles.inputName}/> {inputValue}
        </div>
    );
}

export default StateTutorial;