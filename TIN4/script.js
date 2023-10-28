function validate() {
    let name = document.forms["form"]["name"];
    let email = document.forms["form"]["email"];

    let errors = [
        validateLength(2,60,name),
        validateSpaceOnly(name),
        validateSpaceOnly(email),
        validateRegex('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',email)
    ];
    errors = errors.filter(e => e !== "");
    let errorElement = document.getElementById("ErrorMessage");

    if(errors.length === 0) {
        if(errorElement) errorElement.remove();
        return true;
    }
    else {
        if(!errorElement){
            let marker = document.getElementById("formsubmit");
            let errorElement = document.createElement("p");
            errorElement.innerHTML = errors.join("<br>");
            errorElement.id = "ErrorMessage";
            marker.insertAdjacentElement("afterend",errorElement);
        } else {
            errorElement.innerHTML = errors.join("<br>");
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