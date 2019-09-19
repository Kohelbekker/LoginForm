function validateEmail(email) {
    var re = /[\w._%+-]+@[\w.-]+\.[a-zA-z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

let result = validateEmail(document.getElementById("email").value());

if (!result) {

}
