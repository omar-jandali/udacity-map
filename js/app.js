/*
 This document was create soley by Omar Jandali for the porpose of Udacity Front End Web Developer Project.
  API's and framworks used in this document include jQuery, knockout.js, google maps APIi, and ticketmaster API
*/

/*
This file will contain most of the javascript that will be the foundation of this project. It is going to be set up using the MVVM:
  ViewModel: will contain most of the functionaliy of the site including calling the object and neccessary information to display
  View: this is the initial function call as well as the part that will be display the informaiton in the project

Different frameworks, libraries, and apis that will be used:
  firameoworks and libraries = backbone.js, jquery, and underscore
  api = Google Maps Javascript API, Google Street View API, Yelp

There will be more comments specific to different things going on in the app
 */

// The following are going to be a list of all the variables that are going to be used inthei project
var map;
var markerInfo;

var defaultAddress;
var formattedAddress;

// THe following function is going to be the initial function that is going to be called in order to get the map to appear on the screen
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), Locations.initialLocation);
  currentMarker();
}

// THe following function(s) are going to be used to display the content to the map
/*
function setMarkers(){
  for(var i = 0; i < Locations.Restaurants.length; i++){
    marker = new google.maps.Marker({
      position: Locations.Restaurants[i].location,
      animation: google.maps.Animation.BOUNCE,
      id: i,
      map: map,
      content:{
        name: ko.observable(Locations.Restaurants[i].name)
      },
      streetview:{
        defaultAddress: Locations.Restaurants[i].address.street +
                        Locations.Restaurants[i].address.city +
                        Locations.Restaurants[i].address.state +
                        Locations.Restaurants[i].address.zip,
        formattedAddress: Locations.Restaurants[i].address.street + "+" +
                        Locations.Restaurants[i].address.city + "+" +
                        Locations.Restaurants[i].address.state + "+" +
                        Locations.Restaurants[i].address.zip
      }
    });
    // the following are going to be all of the console testing code
    console.log(Locations.Restaurants[i].name);
    console.log(marker.streetview.defaultAddress);

    // THe following listener will display marker information once the marker is clicked
    markerInfo = new google.maps.InfoWindow();
    marker.addListener("click", function(){
      setMarkerInfo(this);
    })

  }
}
*/
