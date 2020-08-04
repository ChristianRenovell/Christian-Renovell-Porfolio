function mode() {
    var elemento = document.getElementById("fullpage");
    var elemento2 = document.getElementById("switch");
    
    if (elemento.className === "night") {
        elemento.className = "";
        elemento2.className = "";
    } else {
        elemento.className += "night";
        elemento2.className += "switched";
    }

}
export default  mode;