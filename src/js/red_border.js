var inp1 = document.getElementsByClassName("login-input-field")[0];
var inp2 = document.getElementsByClassName("login-input-field")[1];
var email = document.getElementById('email');
var pass = document.getElementById('pass');

function Test() {
    let re="KEK LOL";
    console.log(re);
    console.log("WASAP?");
}

function validateEmail(email) {
    let re = /[\w._%+-]+@[\w.-]+\.[a-zA-z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(pass) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(String(pass));
}

email.onkeyup = () => {
    let Log_btt = document.getElementById('Login');

    if(validatePassword(pass) === false || validateEmail(email) === false) {
        Log_btt.disabled = true;
        Log_btt.style.backgroundColor = "rgba(232, 74, 95, 0.5)";
        Log_btt.style.color = "hsla(0,0%,100%,.5)";
    } else {
        Log_btt.disabled = false;
        Log_btt.style.backgroundColor = "#E84A5F";
        Log_btt.style.color = "hsla(0,0%,100%,1)";
    }
}

pass.onkeyup = () => {
    let Log_btt = document.getElementById('Login');

    if(validatePassword(pass.value) === false || validateEmail(email.value) === false) {
        Log_btt.disabled = true;
        Log_btt.style.backgroundColor = "rgba(232, 74, 95, 0.5)";
        Log_btt.style.color = "hsla(0,0%,100%,.5)";
    } else {
        Log_btt.disabled = false;
        Log_btt.style.backgroundColor = "#E84A5F";
        Log_btt.style.color = "hsla(0,0%,100%,1)";
    }
}

inp1.onfocus = () => {
    document.getElementById("input1").style.border = "1px solid #E84A5F";
}

inp1.onblur = () => {
    let result = validateEmail(email.value);

    if (result === false && email.value.length > 0) {
        document.getElementById('Error').style.visibility = "visible";
    } else if (validatePassword(pass.value) === true || pass.value.length == 0){
        document.getElementById('Error').style.visibility = "hidden";
    }
    document.getElementById("input1").style.border = "1px solid hsla(0,0%,93.3%,.2)";
}

inp2.onfocus = () => {
    document.getElementById("input2").style.border = "1px solid #E84A5F";
}

inp2.onblur = () => {
    let result = validatePassword(pass.value);

    if (result === false && pass.value.length > 0) {
        document.getElementById('Error').style.visibility = "visible";
    } else if (validateEmail(email.value) === true || email.value.length == 0) {
        document.getElementById('Error').style.visibility = "hidden";
    }
    document.getElementById("input2").style.border = "1px solid hsla(0,0%,93.3%,.2)";
}
