
getLocation = function() {
var state;


  if (navigator.geolocation) {

    console.log('geolocation is available');

    navigator.geolocation.getCurrentPosition(function(position) {

  fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude).then( function(response){

  response.json().then(function(obj){
 console.log(obj);

 state = obj.results[0].address_components.filter(function(item){

if ( item.types.indexOf("administrative_area_level_1") > -1 ) {

  return true;

}

 })[0].long_name;

 console.log(state);


  });


  }).catch(function(err){

    console.log(err)
  });

});

  }

  else {

    alert("geolocation not available");

  }
}

getLocation();
