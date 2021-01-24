function date(){
    let daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    
    let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    let d = new Date();
    let dayName = daynames[d.getDay()];
    let monthName = month[d.getMonth()];
    let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();
    document.getElementById("currentdate").textContent = fulldate; 
    }
    var currentdate = setInterval(date, onload);
    
    function lastUpdate(){
        let update = document.lastModified;
        document.getElementById("lastModified").innerHTML = " " + update;
    }
    
    var modified = setInterval(lastUpdate, onload);