import { LoginBar } from './../components/LoginBar';
import React, { useState } from "react";

import "../css/login.css"

export default function Login() {
    const [isActive, setIsActive] = useState(false);
    const [username, setUsername] = useState(false);

    function onLogin(e) {
        e.preventDefault();
        setIsActive(true)
        setTimeout(()=>{
            setIsActive(false)
        },5000)
    }

    return <div>
        <LoginBar username={username} isActive={isActive} />
        <div class="login-container">
            <div>
                <label for="username">Username</label>
                <input placeholder='enter username' type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />

                <label for="password">Password</label>
                <input placeholder='enter password' type="password" id="password" name="password" />

                <button onClick={onLogin}>Login</button>
            </div>
        </div>
    </div>
}