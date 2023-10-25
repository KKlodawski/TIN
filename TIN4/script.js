/*
todo
change functions to validate every argument like length, regex etc. not whole element
and change error logic
*/
function validate() {
    let name = document.forms["form"]["name"];
    let email = document.forms["form"]["email"];
    //if(!nameValidation(name) || !emailValidation(email)) return false;
    //return true;

    let errors="";
    errors += `${validateLength(2,60,name)} ${validateSpaceOnly(name)} ` + validateRegex("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",email)
    console.log(errors);
    if(errors.trim() === "") return true;
    else return false;
}


function nameValidation(name) {
    console.log(name.value.length);
    const errorExists = document.getElementById("nameError");
    if (name.value.length >= 2 && name.value.length <= 60 && name.value.trim() !== "") {
        if(errorExists != null) errorExists.remove();
        return true;
    }
    else {
        if(errorExists == null) {
            let errorPara = document.createElement("label");
            errorPara.textContent = "Name must be in range 2..60 and cannot contain only white spaces";
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

function validateLength(from, to, element) {
    if(element.value.length >= from && element.value.length <= to) return "";
    else return `${element.name} length is not between ${from}..${to}`;
}

function validateSpaceOnly(element)  {
    if(element.value.trim() !== "") return "";
    else return `${element.name} contains only spaces`;
}

function validateRegex(regex, element) {
    if(element.value.match(regex) != null) return "";
    else return `${element.name} doesn't match criteria`;
}