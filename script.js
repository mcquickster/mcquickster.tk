function GreetFunction() {
    var Name1 = document.getElementById("Name");
    var Name2 = Name1.value;
    if(Name1.value == ""){
        alert("Enter your name, you bum!");
    }
    else {
        alert("Hi " + Name2 + "! Welcome to mcquickster.tk");
    }
    }
    function likeWebsite() {
        alert("Thanks, we hope you come back soon!")
    }
    function hateWebsite() {
        alert("Judge not, lest you be judged")
    }
        var d = new Date();
        document.getElementById("date").innerHTML = d;
    function checkPassword(){
        var password = document.getElementById("passwordBox");
        var passwordText = password.value;
    if(passwordText == "rent"){
        return true;
    }
        alert("Access Denied!!!  (>_<)");
        return false;
    } 