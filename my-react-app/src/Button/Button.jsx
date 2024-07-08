import React, {useState} from 'react';
import styles from './Button.module.css';
import MoveSquare from '../Square/MoveSquare';


function Button() {


    const [buttonText, setButtonText] = useState('Click Me');
    const [clickCount, setClickCount] = useState(0);


    const onClick = () => {
        setClickCount(clickCount + 1);
        clickCount === 0 ? alert("You clicked this button") : setButtonText(buttonText === 'Submit' ? 'Loading...' : 'Submit'); 
    
        // setClickCount(prevCount => {
        //     if(prevCount === 0){
        //         alert("You clicked this button");
        //     } else if (prevCount > 1) {
        //         setButtonText(button === 'Submit' ? 'Loading...' : 'Submit');
        //     } 
        //     return prevCount + 1;
        // });
     //   setClickCount(clickCount + 1);
        // if(clickCount > 1)
        // {
        //     setButtonText(buttonText === 'Submit' ? 'Loading...' : 'Submit');
        // } else {
        //     alert("You clicked this button");   
        // }
        // alert("You clicked this button");   
        // setButtonText(buttonText === 'Submit' ? 'Loading...' : 'Submit');
        
    };

    return(
        <div>
            <button className={styles.button} onClick={onClick}> {buttonText} </button>
            <p>This button has been clicked {clickCount}</p>
        </div>
    );
}

export default Button;