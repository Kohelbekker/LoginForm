window.input_focus = (container_id) => {
    document.getElementById(container_id).style.border = "1px solid #E84A5F";
}

window.loginInput_blur = (input_id, container_id) => {
    if (input_id === 'email') {
        loginEmail();
    } else {
        loginPass();
    }
    document.getElementById(container_id).style.border = "1px solid hsla(0,0%,93.3%,.2)";
}

function validateEmail(email) {
    let re = /[\w._%+-]+@[\w.-]+\.[a-zA-z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(pass) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(String(pass));
}
/*
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
*/


function loginEmail () {
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let result = validateEmail(email.value);

    if (result === false && email.value.length > 0) {
        document.getElementById('Error').style.visibility = "visible";
    } else if (validatePassword(pass.value) === true || pass.value.length == 0) {
        document.getElementById('Error').style.visibility = "hidden";
    }
}

function loginPass () {
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let result = validatePassword(pass.value);

    if (result === false && pass.value.length > 0) {
        document.getElementById('Error').style.visibility = "visible";
    } else if (validateEmail(email.value) === true || email.value.length == 0) {
        document.getElementById('Error').style.visibility = "hidden";
    }
}

function loginEmail () {
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let result = validateEmail(email.value);

    if (result === false && email.value.length > 0) {
        document.getElementById('Error').style.visibility = "visible";
    } else if (validatePassword(pass.value) === true || pass.value.length == 0) {
        document.getElementById('Error').style.visibility = "hidden";
    }
}

function loginPass () {
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let result = validatePassword(pass.value);

    if (result === false && pass.value.length > 0) {
        document.getElementById('Error').style.visibility = "visible";
    } else if (validateEmail(email.value) === true || email.value.length == 0) {
        document.getElementById('Error').style.visibility = "hidden";
    }
}
