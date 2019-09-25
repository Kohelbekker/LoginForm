window.onload = function() {
    let login = document.getElementById("myModal");
    let forgot = document.getElementById("myForgot");
    let createAcc = document.getElementById("myReg");
    let btn = document.getElementById("myBtn");

    btn.onclick = function() {
        login.style.display = "block";
    }

    window.span = (modal_name) => {
        let close_item = document.getElementById(modal_name);
        close_item.style.display = "none";
    }

    window.go_to_forgot = () => {
        login.style.display = "none";
        forgot.style.display = "block";
    }

    window.go_to_createAcc = () => {
        login.style.display = "none";
        createAcc.style.display = "block";
    }

    window.go_to_login = () => {
        createAcc.style.display = "none";
        forgot.style.display = "none";
        login.style.display = "block";
    }

    window.onmousedown = function(event) {
      if (event.target == login) {
        login.style.display = "none";
      } else if (event.target == forgot) {
        forgot.style.display = "none";
      } else if (event.target == createAcc) {
        createAcc.style.display = "none";
      }
    }
}
