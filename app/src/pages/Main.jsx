import { LoginBar } from '../components/LoginBar';
import React, { useRef, useState } from "react";


import "../css/login.css"

export default function Main() {
    const [isActive, setIsActive] = useState(false);
    const [username, setUsername] = useState(null);
    const timerRef = useRef();


    function onLogin(e) {
        e.preventDefault();
        setUsername("current user")
        setIsActive(true)
        
        timerRef.current = setTimeout(() => {
            setIsActive(false)
        }, 5000);
    }



    function onClose(e) {
        e.preventDefault()
        clearTimeout(timerRef.current);
        setIsActive(false)

    }


    return <div>
        <LoginBar username={username} onClose={onClose} isActive={isActive} />
        {
            !isActive ?
                <button className="showPopUp" onClick={onLogin}>login</button>
                : null
        }
    </div>
}