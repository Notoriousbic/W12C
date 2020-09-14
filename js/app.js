function login(){
    let emailInput = document.getElementById("email-input").value;
    let passwordInput = document.getElementById("password-input").value;

    let dataObject = {
        email: emailInput,
        password: passwordInput,
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            let tokenObject = JSON.parse(this.responseText);
            console.log(tokenObject);
            document.getElementById("login-status").innerHTML = "LOGIN SUCCESS";
            window.open("home.html", "_self");
            Cookies.set("username", emailInput, {expires:1});
            Cookies.set("token", tokenObject.token, {expires: 1});
        } else if (this.readyState != 4) {
            document.getElementById("login-status").innerHTML = "LOADING";
        }
        else {
            document.getElementById("login-status").innerHTML = "LOGIN ERROR";
        }
    };
    ajax.open("POST", "https://reqres.in/api/login", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(dataObject));
}

document.getElementById("login-submit").addEventListener("click", login);