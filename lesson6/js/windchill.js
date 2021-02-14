
function calculateWindChill(){
    var temp = parseFloat(document.getElementById('temperature').innerHTML);
    var windSpeed = parseFloat(document.getElementById('wind-Speed').innerHTML);
    if (temp <= 10 && windSpeed >= 3) {
        let r = windChill(temp, windSpeed);
        document.getElementById('windChill').innerHTML = r; 
    } else {
        document.getElementById('windChill').innerHTML = "N/A"; 
    }
}
function windChill(tempF, speed){
    let t = tempF;
    let s = speed;
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
    return f;
}