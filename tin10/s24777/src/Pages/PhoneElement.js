import {Link} from "react-router-dom";

function PhoneElement({phoneData}) {

    return (
        <>
        <td><Link to={"/phonelist/"+phoneData.id} className="navButton">{phoneData.Brand}</Link></td>
        <td><Link to={"/phonelist/"+phoneData.id} className="navButton">{phoneData.Model}</Link></td>
        </>
    );

}
export default PhoneElement;