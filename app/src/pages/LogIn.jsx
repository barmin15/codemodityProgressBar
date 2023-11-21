import { LoginBar } from './../components/LoginBar';
import React, { useState } from "react";

import "../css/login.css"

export default function Login() {
    const [isActive, setIsActive] = useState(false);
    const [username, setUsername] = useState(null);

    function onLogin(e) {
        e.preventDefault();

        setIsActive(true)

        setTimeout(()=>{
            setIsActive(false)
        },5000)
    }

    return <div>
        <LoginBar username={username} isActive={isActive} />
        <div className="login-container">
            <div>
                <label htmlFor="username">Username</label>
                <input placeholder='enter username' type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input placeholder='enter password' type="password" id="password" name="password" />

                <button onClick={onLogin}>Login</button>
            </div>
        </div>
    </div>
}