import { Outlet, Link } from "react-router-dom";
import {useEffect, useState} from "react";
import '../Stylesheet/PhoneList.css';
import PhoneElement from "./PhoneElement";
const PhoneList = () => {

    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/KKlodawski/TIN/phones',{method: 'GET'})
            .then(response => response.json())
            .then(json => setPhones(json));
    })

    const phoneElement = phones.map(phone => {
        return (
            <>
                <tr>
                   <PhoneElement phoneData={phone}/>
                </tr>
            </>
    )
    })

    return (
        <>
            <div className="PhoneList">
            <table>
                <tr>
                    <th>Marka</th>
                    <th>Model</th>
                </tr>
                {phoneElement}
            </table>
            </div>
            <Outlet/>
        </>
    )
}

export default PhoneList;