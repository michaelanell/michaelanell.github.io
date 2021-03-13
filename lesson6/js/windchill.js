
 /*function calculateWindChill(){ 

    if (temp <= 50 && windSpeed >= 3) {
        let r = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(speed,0.16);
        document.getElementById('displayWindChill').innerHTML = Math.round(r).toFixed(0) + "℉";
        } else {
         r = "n/a";
                        document.getElementById('WindChill').innerHTML = r;
         }
 } 
 */

document.getElementById("calculateWindChill").innerHTML = calculateWindChill(document.getElementById("wind-Speed").innerHTML, document.getElementById("current-temp").innerHTML);

 function calculateWindChill(temp, speed){
    let r;
    if ( temp <=50 && speed >3) {
        r = 35.74 + (0.6215 * temp)-(35.75 * Math.pow(speed,0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

    }
    else {
        r = "N/A";  
    }
    return r.toFixed(2);

    /* The toFixed() method converts a number into a string, rounding to a specified number of decimals. */
}

 