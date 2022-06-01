import React from "react";
import Style from './header.module.css'

function Header() {
    return (
        <div className={Style.navbar}>
            <h1>Where in the world?</h1>

            <div className={Style.darkmode}>
                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-moon-weather-dreamstale-lineal-dreamstale-6.png"/>
                <h3>Dark Mode</h3>
            </div>
    </div>
    );
}

export default Header;