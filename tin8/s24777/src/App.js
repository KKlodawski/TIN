import './stylesheets/App.css';
import {useState} from "react";

function App() {

  const [uniqueCar, addUniqueCar] = useState(3);
  const [uniquePhone, addUniquePhone] = useState(3);
  const [cars, editCars]  = useState([
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
    if(newCar.Brand.length < 3) {
      setCarError({state: true,message: `Marka nie może być krótsza niż 3 znaki`});
      return;
    }
    else if(newCar.Model < 3) {
      setCarError({state: true,message: `Model nie może być krótszy niż 3 znaki`});
      return;
    }
    else if(newCar.Price <= 0) {
      setCarError({state: true,message: `Cena nie może być mniejsza niz 0`});
      return;
    }
    else if(newCar.Year < 1886 || newCar.Year > new Date().getFullYear()) {
      setCarError({state: true,message: `Rok produkcji nie może być mniejszy niż 1886 i większy niż obecny`});
      return;
    }
    else {
      setCarError({state: false,message: ``});
    }

    console.log(newCar);
    console.log(carError);
    addUniqueCar(uniqueCar+1)
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
      if(e.id !== id) newCars.push(e);
    });
    editCars(newCars);
  }


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
    <div className="App">

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

    </div>
  );
}

export default App;
