alert("hello");
function calculateWindChill(){
    var temp = parseInt(document.getElementById('temperature').value);
    var windSpeed = parseInt(document.getElementById('Wind-Speed').value);
    if (temp <= 10 && windSpeed >= 3) {
        let r = windChill(temp, windSpeed);
        document.getElementById('WindChill').innerHTML = r; 
    } else {
        document.getElementById('WindChill').innerHTML = "N/A"; 
    }
}
function windChill(tempF, speed){
    let t = tempF;
    let s = speed;
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
    return f;
}