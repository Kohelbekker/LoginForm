let inp1 = document.getElementsByClassName("login-input-field")[0];
let inp2 = document.getElementsByClassName("login-input-field")[1];


inp1.onfocus = () => {
    document.getElementById("input1").style.border = "1px solid #E84A5F";
}

inp1.onblur = () => {
    document.getElementById("input1").style.border = "1px solid hsla(0,0%,93.3%,.2)";
}

inp2.onfocus = () => {
    document.getElementById("input2").style.border = "1px solid #E84A5F";
}

inp2.onblur = () => {
     document.getElementById("input2").style.border = "1px solid hsla(0,0%,93.3%,.2)";
}
