import { LoginBar } from '../components/LoginBar';
import React, { useState } from "react";


import "../css/login.css"

export default function Main() {
    const [isActive, setIsActive] = useState(false);
    const [username, setUsername] = useState(null);

    function onLogin(e) {
        e.preventDefault();
        setUsername("current user")
        setIsActive(true)

        setTimeout(() => {
            setIsActive(false)
        }, 5000)

    }

    function onClose(e) {
        e.preventDefault()
        setIsActive(false);
    }


    return <div>
        <LoginBar username={username} onClose={onClose} isActive={isActive}/>
        {
            !isActive ?
                <button className="showPopUp" onClick={onLogin}>login</button>
                : null
        }
    </div>
}