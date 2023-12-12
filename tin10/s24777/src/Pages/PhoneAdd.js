import {Outlet} from "react-router-dom";
import '../Stylesheet/PhoneAdd.css';
import {useEffect, useState} from "react";

function PhoneAdd() {

    const [obj, setObject] = useState({
        Brand: "",
        Model: "",
        Storage: "",
        Resolution: "",
        Refresh: "",
        Cloak: "",
        RAM: ""
    });
    const [err, setError] = useState({
        state: false,
        msg: ""
    })

    const handleInputs = (index, value) => {
        setObject({
            ...obj,
            [index]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(err)
        if(!isNumber(obj.Storage)) {
            setError({
                state: true,
                msg: "Pojemność musi być numerem!"
            });
            return;
        }
        else if(!/^[0-9]{3,4}x[0-9]{3,4}$/.test(obj.Resolution)) {
            setError({
                state: true,
                msg: "Niepoprawny format rozdzielczości!"
            });
            return;
        }
        else if(!isNumber(obj.Refresh)) {
            setError({
                state: true,
                msg: "Odświeżanie musi być numerem!"
            });
            return;
        }
        else if(!/^\d+(\.\d+)?$/.test(obj.Cloak)) {
            setError({
                state: true,
                msg: "Taktowanie musi być liczbą zmiennoprzecinkową!"
            });
            return;
        }

        else if(!isNumber(obj.RAM)) {
            setError({
                state: true,
                msg: "RAM musi być numerem!"
            });
            return;
        }


        const response = await fetch('https://my-json-server.typicode.com/KKlodawski/TIN/Phones',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });

        if(!response.ok) {
            setError({
                state: true,
                msg: "Nie udało się wysłać zapytania!"
            });
            return;
        }

        setError({
            state: false,
            msg: ""
        });

        setObject({
            Brand: "",
            Model: "",
            Storage: "",
            Resolution: "",
            Refresh: "",
            Cloak: "",
            RAM: ""
        });
        console.log(obj);
    }

    const isNumber = (str) => {
        return /^\d+$/.test(str)
    }

    return (
        <>
            <div className="phoneAdd">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Marka" value={obj.Brand} onChange={(e) => {handleInputs("Brand",e.target.value)}}/><br/>
                    <input type="text" placeholder="Model" value={obj.Model} onChange={(e) => {handleInputs("Model",e.target.value)}}/><br/>
                    <input type="text" placeholder="Pojemność" value={obj.Storage} onChange={(e) => {handleInputs("Storage",e.target.value)}}/><br/>
                    <input type="text" placeholder="Rozdzielczość" value={obj.Resolution} onChange={(e) => {handleInputs("Resolution",e.target.value)}}/><br/>
                    <input type="text" placeholder="Odświeżanie" value={obj.Refresh} onChange={(e) => {handleInputs("Refresh",e.target.value)}}/><br/>
                    <input type="text" placeholder="Taktowanie procesora" value={obj.Cloak} onChange={(e) => {handleInputs("Cloak",e.target.value)}}/><br/>
                    <input type="text" placeholder="RAM" value={obj.RAM} onChange={(e) => {handleInputs("RAM",e.target.value)}}/><br/>

                    <button type="submit">Dodaj</button>
                </form>
                <br/>
                {err.state && <h1>{err.msg}</h1>}
            </div>
            <Outlet/>
        </>
    )
}

export default PhoneAdd;