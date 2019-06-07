function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username == "" || password == "") {
        alert("NO BLANKS ALLOWED");
        return false
    }
    if (username.trim() == "" || password.trim() == "") {
        alert("NOT VALID");
        return false
    }
    if (username.length < 5) {
        document.getElementById("wumsg").innerHTML = "**username too short";
        return false
    } else {
        document.getElementById("wumsg").innerHTML = "";
    }
    if (password.length < 6) {
        document.getElementById("wpmsg").innerHTML = "**password must be of length 6";
        return false
    } else {
        document.getElementById("wpmsg").innerHTML = "";

        return true;
    }
}