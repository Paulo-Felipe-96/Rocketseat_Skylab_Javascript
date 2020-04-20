function temHabilidades(s) {
    var r = s.indexOf("Javascript") === -1 ? false : true;
    return r;
}

var skills = ["React Native", "Javascript", "ReactJS"];
console.log(temHabilidades(skills));
