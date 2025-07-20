function changeTheme(){
    let colorset = ['main-purple', 'blue'];
    let bodyname = document.body.className;
    if(bodyname.includes(colorset[0])){
        bodyname = bodyname.replace(colorset[0], colorset[1]);
    }
    else {
        bodyname = bodyname.replace(colorset[1], colorset[0]);
    }

    document.body.className = bodyname;
}