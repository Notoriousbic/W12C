let tokenValue = Cookies.get("token");
if (tokenValue == undefined) {
    document.getElementById("colors").innerHTML = "ERROR";
}
else {
    var userName=Cookies.get("username");
document.getElementById("user-hello").innerHTML= "hello user " + userName;

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let colors =JSON.parse(this.responseText);
        
        for (i=0; i < colors.data.length; i++){
            document.getElementById("colors").innerHTML +="<h2>" + colors.data[i].name + "</h2>";
            document.getElementById("colors").innerHTML +="<h2>" + colors.data[i].year + "</h2>";
            let div = document.createElement("div");
            div.style.width = "300px";
            div.style.height ="300px";
            div.style.background = colors.data[i].color;
            document.getElementById("colors").append(div);
        }
    } else if (this.readyState != 4) {
        document.getElementById("login-status").innerHTML = "LOADING";
        document.getElementById("login-status").style.color = "yellow";
    }
    else {
        document.getElementById("login-status").innerHTML = "LOGIN ERROR";
        document.getElementById("login-status").style.color = "red";
    }

}
ajax.open("GET", "https://reqres.in/api/unknown", true);
ajax.send();}

