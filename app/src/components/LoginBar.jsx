import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState,useEffect } from "react";

export function LoginBar({
  username,
  isActive
}) {
    const [percentage, setPercentage] = useState(0);

    useEffect(()=>{
        isActive ? setPercentage(100) : setPercentage(0)
    },[isActive])

  return isActive ? <div className="progressBar">
        <p className="welcomeMsg">Welcome, <span className="color">{username}</span>!</p>
            <ProgressBar completed={percentage} bgColor="gold" baseBgColor="#232D3F" height="7px" isLabelVisible={false} transitionDuration="5s" />
        </div> : null;
}
  