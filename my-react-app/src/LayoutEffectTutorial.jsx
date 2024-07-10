import React, { useLayoutEffect, useEffect } from "react";

function LayoutEffectTutorial() {
    
    useLayoutEffect(() => {
        console.log("UseLayoutEffect");
    }, []);

    useEffect(() => {
        console.log("UseEffect");
    },[]);

    return (
    <h1>Hello</h1>
    );
}

export default LayoutEffectTutorial;