import '../Stylesheet/Phone.css';

import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Phone() {

    const {id} = useParams();

    const [phoneDetails, setPhoneDetails] = useState({});

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/KKlodawski/TIN/phones/${id}`)
            .then(response => response.json())
            .then(data => setPhoneDetails(data));
    },[]);

    return (
        <div className="Phone">
            <table>
                <tr>
                    <th>Marka</th>
                    <th>Model</th>
                    <th>Pamięć</th>
                    <th>Rozdzielczość</th>
                    <th>Odświeżanie</th>
                    <th>Zegar procesora</th>
                    <th>RAM</th>
                </tr>
                <tr>
                    <td>{phoneDetails.Brand}</td>
                    <td>{phoneDetails.Model}</td>
                    <td>{phoneDetails.Storage}</td>
                    <td>{phoneDetails.Resolution}</td>
                    <td>{phoneDetails.Refresh}</td>
                    <td>{phoneDetails.Cloak}</td>
                    <td>{phoneDetails.RAM}</td>
                </tr>
            </table>

            <Link to="/phonelist">Powrót</Link>
        </div>
    );
}

export default Phone;
