function mode() {
    var elemento = document.getElementById("fullpage");
    var elementoname = document.getElementById("fullpage2");
    var elemento2 = document.getElementById("switch");
    
    if (elemento.className === "night") {
        elemento.className = "";
        elemento2.className = "";
        elementoname.className = "";
    } else {
        elemento.className += "night";
        elementoname.className+="night";
        elemento2.className += "switched";
    }

}
export default  mode;