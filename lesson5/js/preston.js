function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }


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
    
    window.onload = function displayBanner() {
        let day = new Date();
        let dayOfWeek = day.getDay();
        if (dayOfWeek != 5 ) {
            document.getElementsByClassName("pancakes-banner")[0].classList.toggle("hide-banner");
        }
    }