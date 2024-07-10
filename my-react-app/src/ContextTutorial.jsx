import React, { useState, createContext } from "react";
import User from "./User.jsx";
import Login from "./Login.jsx";

export const AppContext = createContext(null);

function ContextTutorial() {
    
    const [username, setUsername] = useState("");

    return (
        <AppContext.Provider value={{username, setUsername }}>
            <Login />  <User />
        </AppContext.Provider>
    );
}

export default ContextTutorial;