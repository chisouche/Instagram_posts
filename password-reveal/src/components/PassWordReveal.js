import React, { useState } from 'react';
import '../style/PassWordReveal.css';
import FlashlightOn from '../assets/icons/Flash_on.png';
import FlashlightOff from '../assets/icons/Flash_off.png';

const PassWordReveal = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [spotlightOn, setSpotlightOn] = useState(false);

  const togglePasswordVisibility = () => {
      setPasswordShown(!passwordShown);
      setSpotlightOn(!spotlightOn);
  };

    return (
        <div className={`password-container ${passwordShown ? 'light-on' : ''}`}>
            <div className='h1_css'>
                <h1>PassWord Reveal</h1>
            </div>

            <div className='input_container'>
                <input
                    type={passwordShown ? "text" : "password"}
                    className="password-input"
                    placeholder="Enter your password"
                    id="password"
                />
                <img
                    src={passwordShown ? FlashlightOn : FlashlightOff}
                    onClick={togglePasswordVisibility}
                    alt="Toggle password visibility"
                    className="password-toggle-icon"
                    id="toggleIcon"
                />
            </div>
        </div>
    );
};

export default PassWordReveal;
