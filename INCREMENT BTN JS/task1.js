let clickCount = 0
function incrementbtn() {
    var element = document.getElementById("increment");
    ++clickCount
   document.getElementById("increment").textContent= clickCount;
}

function checkusernamelength() {

    var usernamefield = document.getElementById("username");
  var messageElement = document.getElementById("userlong");
    if (usernamefield.value.length > 10) 
   {messageElement.textContent= "username too long";
} else {messageElement.textContent= "";
}

};
