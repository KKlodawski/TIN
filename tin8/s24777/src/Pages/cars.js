import {useState} from "react";
import '../stylesheets/App.css';

function cars() {
    const [uniqueCar, addUniqueCar] = useState(3);
    const [cars, editCars] = useState([
        {id: 0, Brand: "Ford", Model: "Escape", Price: 60000, Year: 2018},
        {id: 1, Brand: "Audi", Model: "RS3", Price: 290000, Year: 2023},
        {id: 2, Brand: "BMW", Model: "M3", Price: 380000, Year: 2021}
    ]);
    const [car, setCar] = useState({
        Brand: "", Model: "", Price: 0, Year: 0
    });
    const [carError, setCarError] = useState({
        state: false,
        message: ""
    });

    const updateCars = () => {

        const newCar = {
            id: uniqueCar,
            Brand: car.Brand,
            Model: car.Model,
            Price: car.Price,
            Year: car.Year
        }
        if (newCar.Brand.length < 3) {
            setCarError({state: true, message: `Marka nie może być krótsza niż 3 znaki`});
            return;
        } else if (newCar.Model < 3) {
            setCarError({state: true, message: `Model nie może być krótszy niż 3 znaki`});
            return;
        } else if (newCar.Price <= 0) {
            setCarError({state: true, message: `Cena nie może być mniejsza niz 0`});
            return;
        } else if (newCar.Year < 1886 || newCar.Year > new Date().getFullYear()) {
            setCarError({state: true, message: `Rok produkcji nie może być mniejszy niż 1886 i większy niż obecny`});
            return;
        } else {
            setCarError({state: false, message: ``});
        }

        console.log(newCar);
        console.log(carError);
        addUniqueCar(uniqueCar + 1)
        editCars([...cars, newCar]);
        setCar({
            Brand: "", Model: "", Price: 0, Year: 0
        });
    };
    const handleCarAttribs = (e, attribute) => {
        const val = e.target.value;
        setCar(prevState => ({
            ...prevState,
            [attribute]: val
        }));
    }
    const removeCar = (id) => {
        const newCars = [];
        cars.forEach(e => {
            if (e.id !== id) newCars.push(e);
        });
        editCars(newCars);
    }

    return (
        <div id="LeftList">
            <table>
                <tr>
                    <th colSpan={5}> Auta </th>
                </tr>
                <tr>
                    <th>Marka</th>
                    <th>Model</th>
                    <th>Cena</th>
                    <th>Rok</th>
                    <th>Usuń</th>
                </tr>
                {cars.map(obj =>
                    <tr>
                        <td>{obj.Brand}</td>
                        <td>{obj.Model}</td>
                        <td>{obj.Price}</td>
                        <td>{obj.Year}</td>
                        <td><button className="remove" onClick={e => removeCar(obj.id)}></button></td>
                    </tr>

                )}
            </table>

            <br/>

            {carError.state === true ? <p>{carError.message}</p> : null}

            <br/>

            <input type="text" value={car.Brand} onChange={e => handleCarAttribs(e,"Brand")} placeholder="Marka"/> <br/>
            <input type="text" value={car.Model} onChange={e => handleCarAttribs(e,"Model")} placeholder="Model"/> <br/>
            <input type="number" value={car.Price} onChange={e => handleCarAttribs(e,"Price")} placeholder="Cena"/> <br/>
            <input type="number" value={car.Year} onChange={e => handleCarAttribs(e,"Year")} placeholder="Rok"/> <br/>
            <button onClick={updateCars}> Dodaj </button>

        </div>
    );
}

export default cars;