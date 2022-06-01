import React, { useEffect } from "react";
import styles from "./Body.module.css";
import { useRouter } from "next/router";
import { AuthContext } from "../../providers/auth";


function createElement(array) {
    if (array.length === 0) return array;
    const arrayLi = [];
    const router = useRouter();
    let arrayDiv = [];
    let div;
    
    array.forEach((element, index) => {
        div = <div className={styles.countryBody} key={index} onClick={(e) => {
            e.preventDefault();
            router.push(`/countries?name=${element.name.common}`)
        }}>
            <img src={element.flags.png} />
            <h2>{element.name.common}</h2>
            <p><b>Population:</b> {element.population}</p>
            <p><b>Region:</b> {element.region}</p>
            <p><b>Capital:</b> {element.capital !== undefined ? element.capital[0] : "No capital"}</p>
        </div>;
        arrayDiv.push(div);

        if (arrayDiv.length === 4) {
            arrayLi.push(<li className={styles.liBody} key={index*10}>{arrayDiv}</li>);
            arrayDiv = [];
        } else if (element === array[array.length-1]) arrayLi.push(<li className={styles.liBody} key={index*10}>{arrayDiv}</li>);
    })

    return arrayLi;
}

function Body() {
    const {arrayCountries, setArrayCountries, inputValue, region, getInfoApi} = React.useContext(AuthContext);
    useEffect(() => {
        getInfoApi(setArrayCountries, inputValue, region)
    }, [])
    return (
        <>
            <ul className={styles.ulBody}>{createElement(arrayCountries)}</ul>            
        </>
    );
}

export default Body;



