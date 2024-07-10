import React, { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
    
    const divRef = useRef(null);

    useLayoutEffect(() => {
        console.log(divRef.current.value);
    }, []);

    useEffect(() => {
        divRef.current.value = "HELLO"
    },[]);

    return (
        <div className="App">
            <input ref={divRef} value="TESTING" style={ { width: 400, height: 200}} />
        </div>
    );
}

export default LayoutEffectTutorial;