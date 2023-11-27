import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState, useEffect } from "react";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

export function LoginBar({
  username,
  isActive,
  onClose
}) {
  const [percentage, setPercentage] = useState(0);



  useEffect(() => {
    isActive ? setPercentage(100) : setPercentage(0)
  }, [isActive])

  return isActive ? <div className="progressBar">
    <p onClick={onClose} className="closeButton">&#x2715;</p>
    <VerifiedOutlinedIcon className="verifyIcon"/>
    <p className="welcomeMsg">Welcome, <span className="gradientName">{username}!</span></p>
    <ProgressBar
      className="bar"
      completed={percentage}
      bgColor="linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
      baseBgColor="#5C4033"
      height="7px"
      isLabelVisible={false}
      transitionDuration="5s" />

  </div> : null;
}
