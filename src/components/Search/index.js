import React, { useEffect } from "react";
import { AuthContext } from "../../providers/auth";
import Style from './search.module.css'

export default () => {
    const { setInputValue, setRegion, inputValue, region, setArrayCountries, getInfoApi } = React.useContext(AuthContext);

    return (
        <div className={Style.pesquisa}>
        <div className={Style.barradepesquisa}>
            <input type="text" id="search-bar" placeholder="Search for a country..." onChange={event => {
                const value = event.target.value.toLowerCase();
                getInfoApi(setArrayCountries, value, region)
                setInputValue(value);
            }} />
            
            <div className={Style.icon}>
                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"/>
            </div>
        </div>

        <div>
            <select className={Style.listapaises} onChange={e => {
                const regionValue = e.target.value
                getInfoApi(setArrayCountries, inputValue, regionValue)
                setRegion(regionValue);
            }}>
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select> 
        </div>
    </div>
    )
}