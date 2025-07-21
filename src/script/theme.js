function changeTheme(){
    let colorset = ['from-main-purple-700', 'from-blue-700','from-slate-600']; //this thing does not changed in colored
    let bodyname = document.body.className;
    for (let i = 0; i < colorset.length; i++){
        if(bodyname.includes(colorset[i])){
            if (i >= colorset.length - 1){
                bodyname = bodyname.replace(colorset[i], colorset[0]);
            }
            else {
                bodyname = bodyname.replace(colorset[i], colorset[i+1]);
            }
            document.body.className = bodyname;
            break;
        }
    }

}