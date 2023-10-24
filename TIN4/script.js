function validate() {
    let name = document.forms["form"]["name"];
    let email = document.forms["form"]["email"];
    if(!nameValidation(name) || !emailValidation(email)) return false;
    return true;

}
function nameValidation(name) {
    console.log(name.value.length);
    const errorExists = document.getElementById("nameError");
    if (name.value.length >= 2 && name.value.length <= 60) {
        if(errorExists != null) errorExists.remove();
        return true;
    }
    else {
        if(errorExists == null) {
            let errorPara = document.createElement("label");
            errorPara.textContent = "Name must be in range 2..60";
            errorPara.setAttribute('for', 'name');
            errorPara.id = "nameError";
            name.insertAdjacentElement("afterend", errorPara);
        }
        return false;
    }
}

function emailValidation(email) {
    const regex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    const errorExists = document.getElementById("emailError");
    console.log(email.value + " " + email.value.match(regex));
    if(email.value.match(regex) != null) {
        if(errorExists != null) errorExists.remove();
        return true;
    }
    else {
        if(errorExists == null) {
            let errorPara = document.createElement("label");
            errorPara.textContent = "Email format is invalid!";
            errorPara.setAttribute('for', 'email');
            errorPara.id = "emailError";
            email.insertAdjacentElement("afterend", errorPara);
        }
        return false;
    }
}