window.input_focus = (container_id) => {
    document.getElementById(container_id).style.border = "1px solid #E84A5F";
}

window.loginInput_blur = (container_id) => {
    checkLogin();
    document.getElementById(container_id).style.border = "1px solid hsla(0,0%,93.3%,.2)";
}

window.regInput_blur = (container_id) => {
    checkReg();
    document.getElementById(container_id).style.border = "1px solid hsla(0,0%,93.3%,.2)";
}


window.forgotInput_blur = (container_id) => {
    checkForgot();
    document.getElementById(container_id).style.border = "1px solid hsla(0,0%,93.3%,.2)";
}

function validateEmail(email) {
    let re = /[\w._%+-]+@[\w.-]+\.[a-zA-z]{2,4}$/;
    return (email.length > 0) ? (re.test(String(email).toLowerCase())) : true;
}

function validatePassword(pass) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return (pass.length > 0) ? (re.test(String(pass))) : true;
}

function checkLogin() {
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    let result_email = validateEmail(email.value);
    let result_pass = validatePassword(pass.value);

    if (result_email === false || result_pass === false) {
        document.getElementById('Error').style.visibility = "visible";
    } else {
        document.getElementById('Error').style.visibility = "hidden";
    }
}

function checkReg() {
    let email = document.getElementById('signup_email');
    let pass = document.getElementById('signup_pass');
    let rePass = document.getElementById('signup_confpass');
    let result_email = validateEmail(email.value);
    let result_pass = validatePassword(pass.value);
    let result_rePass = validatePassword(rePass.value);

    if (result_email === false || result_pass === false || result_rePass === false ||
        (pass.value !== rePass.value && rePass.value.length > 0 && pass.value.length > 0)) {
        if (rePass.value != pass.value && rePass.value.length > 0 && pass.value.length > 0) {
            document.getElementById('noMatch').style.visibility = "visible";
            document.getElementById('regError').style.visibility = "hidden";
        } else {
            document.getElementById('regError').style.visibility = "visible";
            document.getElementById('noMatch').style.visibility = "hidden";
        }
    } else {
        document.getElementById('regError').style.visibility = "hidden";
        document.getElementById('noMatch').style.visibility = "hidden";
    }
}

function checkForgot() {
    let email = document.getElementById('forgot_email');
    let result_email = validateEmail(email.value);

    if (result_email === false) {
        document.getElementById('noForgot').style.visibility = "visible";
    } else {
        document.getElementById('noForgot').style.visibility = "hidden";
    }
}

window.LoginBttn = () => {
    let bttn = document.getElementById('Login');
    let pass = document.getElementById('pass');
    let email = document.getElementById('email');

    if (validatePassword(pass.value) === false || validateEmail(email.value) === false || pass.value.length === 0 || email.value.length === 0) {
        bttn.disabled = true;
        bttn.style.backgroundColor = "rgba(232, 74, 95, 0.5)";
        bttn.style.color = "hsla(0,0%,100%,.5)";
    } else {
        bttn.disabled = false;
        bttn.style.backgroundColor = "#E84A5F";
        bttn.style.color = "hsla(0,0%,100%,1)";
    }
}

window.RegBttn = () => {
    let email = document.getElementById('signup_email');
    let pass = document.getElementById('signup_pass');
    let rePass = document.getElementById('signup_confpass');
    let bttn = document.getElementById('CreateAccount');

    if (validatePassword(pass.value) === false || validateEmail(email.value) === false || pass.value.length === 0 || email.value.length === 0 || pass.value !== rePass.value) {
        bttn.disabled = true;
        bttn.style.backgroundColor = "rgba(232, 74, 95, 0.5)";
        bttn.style.color = "hsla(0,0%,100%,.5)";
    } else {
        bttn.disabled = false;
        bttn.style.backgroundColor = "#E84A5F";
        bttn.style.color = "hsla(0,0%,100%,1)";
    }
}

window.createBttn = () => {
    let email = document.getElementById('forgot_email');
    let bttn = document.getElementById('ResetPassword');

    if (validateEmail(email.value) === false || email.value.length === 0) {
        bttn.disabled = true;
        bttn.style.backgroundColor = "rgba(232, 74, 95, 0.5)";
        bttn.style.color = "hsla(0,0%,100%,.5)";
    } else {
        bttn.disabled = false;
        bttn.style.backgroundColor = "#E84A5F";
        bttn.style.color = "hsla(0,0%,100%,1)";
    }
}

