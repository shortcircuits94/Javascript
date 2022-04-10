/*
    Assignment 4
    Rebecca
*/

$(document).ready(function(){
if ("geolocation" in navigator){ //check geolocation available
        //try to get user current location using getCurrentPosition() method
        navigator.geolocation.getCurrentPosition(function(position){
                $("#youarehere").html("Found your location <br />Lat : "+position.coords.latitude+" </br>Lang :"+ position.coords.longitude);
            });
    }else{
        console.log("Browser doesn't support geolocation!");
    }
});

localStorage.setItem(key,value)
localStorage.getItem(key)



    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
  /*  function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});*/


