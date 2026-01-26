function checkForPassword(){
    let pwcheck = document.getElementById("secretcode");
    if (pwcheck.value == "Mstxz_EXE3980"){
        window.location.href = '/secretpage.html';
    }
    else {
        alert("Invalid Password");
    }
    pwcheck.value = "";
}

window.checkForPassword = checkForPassword;