function checkForPassword(){
    let pwcheck = document.getElementById("secretcode");
    if (pwcheck.value == "Mstxz_EXE3980"){
        alert("Hi");
    }
    else {
        alert("Invalid Password");
    }
    pwcheck.value = "";
}

window.checkForPassword = checkForPassword;