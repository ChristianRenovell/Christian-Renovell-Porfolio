function mode() {

    let elemento = document.getElementById("fullpage");
    let elemento2 = document.getElementById("switch");
    let face = document.getElementById("face");
    
    if (elemento.className === "night") {
       
        //face.src="images/facebook-darck.png";   
        elemento.className = "";
        elemento2.className = "";
       
    } else {
        
        //face.src="images/facebook-pink.png";
        elemento.className += "night";
        elemento2.className += "switched";
       
    }

   

}
export default  mode;