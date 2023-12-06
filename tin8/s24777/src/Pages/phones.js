import '../stylesheets/App.css';
import {useState} from "react";
function phones() {
    const [uniquePhone, addUniquePhone] = useState(3);
    const [phones, editPhones]  = useState([
        {id: 0, Brand: "Apple", Model: "iPhone 13", Color: "Srebrny", Storage: 128},
        {id: 1, Brand: "Samsung", Model: "Galaxy S23 Ultra", Color: "Kremowy", Storage: 512},
        {id: 2, Brand: "Xiaomi", Model: "Poco F5 12", Color: "Czarny", Storage: 256}
    ]);
    const [phone, setPhone] = useState({
        Brand: "", Model: "", Color: "", Storage: 0
    });
    const [phoneError, setPhoneError] = useState({
        state: false, message: ""
    })
    const updatePhone = () => {
        const newPhone = {
            id: uniquePhone,
            Brand: phone.Brand,
            Model: phone.Model,
            Color: phone.Color,
            Storage: phone.Storage
        }

        if(newPhone.Brand.length < 3) {
            setPhoneError({state: true, message: "Marka nie może być którsza niż 3 znaki"});
            return;
        }
        else if(newPhone.Model.length < 3) {
            setPhoneError({state: true, message: "Model nie może być którszy niż 3 znaki"});
            return;
        }
        else if(newPhone.Color.length <= 0 ) {
            setPhoneError({state: true, message: "Musisz podać kolor"});
            return;
        }
        else if(newPhone.Storage <= 0) {
            setPhoneError({state: true, message: "Pamięć nie może być mniejsza niż 0"});
            return;
        }
        else {
            setPhoneError({state: false, message: ""});
        }

        console.log(newPhone);
        addUniquePhone(uniquePhone+1)
        editPhones([...phones, newPhone]);
        setPhone({
            Brand: "", Model: "", Color: "", Storage: 0
        });
    }
    const handlePhoneAttribs = (e, attribute) => {
        const val = e.target.value;
        setPhone(prevState => ({
            ...prevState,
            [attribute]: val
        }));
    }
    const removePhone = (id) => {
        const newPhones = [];
        phones.forEach(e => {
            if(e.id !== id) newPhones.push(e);
        });
        editPhones(newPhones);
    }

    return (
        <div id="RightList">
            <table>
                <tr>
                    <th colSpan={5}> Telefony </th>
                </tr>
                <tr>
                    <th> Marka </th>
                    <th> Model </th>
                    <th> Kolor </th>
                    <th> Pojemność </th>
                    <th> Usuń </th>
                </tr>
                {phones.map(obj =>
                    <tr>
                        <td>{obj.Brand}</td>
                        <td>{obj.Model}</td>
                        <td>{obj.Color}</td>
                        <td>{obj.Storage}</td>
                        <td><button className="remove" onClick={e => removePhone(obj.id)}></button></td>
                    </tr>

                )}
            </table>

            <br/>

            {phoneError.state === true ? <p>{phoneError.message}</p> : null}

            <br/>

            <input type="text" value={phone.Brand} onChange={e => handlePhoneAttribs(e,"Brand")} placeholder="Marka"/> <br/>
            <input type="text" value={phone.Model} onChange={e => handlePhoneAttribs(e,"Model")} placeholder="Model"/> <br/>
            <input type="text" value={phone.Color} onChange={e => handlePhoneAttribs(e,"Color")} placeholder="Kolor"/> <br/>
            <input type="number" value={phone.Storage} onChange={e => handlePhoneAttribs(e,"Storage")} placeholder="Pamięć"/> <br/>
            <button onClick={updatePhone}> Dodaj </button>

        </div>
    );
}

export default phones;