/*
 This document was create soley by Omar Jandali for the porpose of Udacity Front End Web Developer Project.
  API's and framworks used in this document include jQuery, knockout.js, google maps APIi, and ticketmaster API
*/

/*
This file will contain most of the javascript that will be the foundation of this project. It is going to be set up using the MVVM:
  Model: contain all of the object and varialbes that will be included in the project

Different frameworks, libraries, and apis that will be used:
  firameoworks and libraries = backbone.js, jquery, and underscore
  api = Google Maps Javascript API, Google Street View API, Yelp

There will be more comments specific to different things going on in the app
*/

/*
  this is the first thing that i was thinking about when i was going to go to the store.

  addContact = function(){
}

*/


initialLocation = {
  center:{
    lat: 34.043118,
    lng: -118.246436
  },
  zoom: 14
}

points = [
  {
    name: "Maccheroni Republic",
    street:"332 South Broadway ",
    city:"Los Angeles, ",
    state:"CA ",
    zip:"90013",
    food:"Italian",
    lat: 34.050076,
    lng: -118.248646,
    map: map
  },
  {
    name:"Baco Mercat",
    street:"408 South Main Street ",
    city:"Los Angeles, ",
    state:"CA ",
    zip:"90013",
    food:"Spanish-Fusion",
    lat: 34.047847,
    lng: -118.247222,
    map: map
  },
  {
    name:"Mex Peru Gipsy",
    street:"414 E 12th St ",
    city:"Los Angeles, ",
    state:"CA ",
    zip:"90015",
    food:"Mexican",
    lat: 34.035217,
    lng: -118.255887,
    map: map
  },
  {
    name:"Pie Hole",
    street:"714 Traction Ave ",
    city:"Los Angeles, ",
    state:"CA ",
    zip:"90013",
    food:"Pie & Bakery",
    lat: 34.045429,
    lng: -118.236258,
    map: map
  },
  {
    name:"Stumptown Coffee",
    street:"806 S Santa Fe Ave ",
    city:"Los Angeles, ",
    state:"CA ",
    zip:"90021",
    food:"Coffee Bar",
    lat: 34.033292,
    lng: -118.229707,
    map: map
  }
]

//This is going to be the initial map craetion

var map;

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: initialLocation.center,
    zoom: initialLocation.zoom
  });

  ko.applyBindings(viewModel());
}

var point = function(obj){
  var self = this;

  this.name = ko.observable(obj.name);
  this.street = ko.observable(obj.street);
  this.city = ko.observable(obj.city);
  this.state = ko.observable(obj.state);
  this.zip = ko.observable(obj.zip);
  this.food = ko.observable(obj.food);
  this.lat = ko.observable(obj.lat);
  this.lng = ko.observable(obj.lng);
  this.map = ko.observable(map);

  this.fullAddress = function(){
    return self.street() + self.city() + "</br>" + self.state() + self.zip();
  };

  this.formattedAddress = function(){
    var currentStreet = self.street() + self.city() + self.state() + self.zip();
    var newAddress = currentStreet.replace(/ /g, '+');
    return newAddress;
  };

  this.formattedName = function(){
    var newName = self.name().replace(/ /g, '');
    return newName;
  }

}

viewModel = function(){
  var self = this;
  var marker;

  var streetViewMain = 'https://maps.googleapis.com/maps/api/streetview?';
  var streetViewSize = 'size=250x150&';
  var streetViewLocation = 'location=';
  var streetViewFOV = '&fov=80&';
  var streetViewPitch = 'pitch=20&';
  var streetViewKey = 'AIzaSyA2j3jv3YpXS5y8NOOY7Usz5bmDzW6vr7M';

  this.pointsList = ko.observableArray([]);

  points.forEach(function(pointItem){
    self.pointsList.push(new point(pointItem));
  });

  self.pointsList().forEach(function(pointItem){

    console.log(pointItem.formattedName());
    console.log(pointItem.formattedAddress());

    pointItem.marker = marker;

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(pointItem.lat(), pointItem.lng()),
      map: map,
      animation: google.maps.Animation.BOUNCE
    });

    var streetViewRequest = streetViewMain + streetViewSize + streetViewLocation +
                            pointItem.formattedAddress() + streetViewPitch +
                            streetViewKey;

    console.log(streetViewRequest);

    var infowindow = new google.maps.InfoWindow();

    instafeedRequest = $(document).ready(function(){
      var feed = new Instafeed({
        get: "location",
        locationId: "",
        clientID: "53766a0bc22d40868283d39f92fdfd7b"
      });
      feed.run();
    });

    google.maps.event.addListener(marker, 'click', function(){
      infowindow.open(map, this);
      infowindow.setContent('<div><h1>' + pointItem.name() +
                            '</h1><h2>' + pointItem.fullAddress() +
                            '</h2><img src=' + streetViewRequest +
                            '><div id="instafeed">' + instafeedRequest +
                            '</div</div>')
    });

  });

  self.pointsList().forEach(function(pointItem){
    self.pointAddress = pointItem.fullAddress();
    self.pointFormattedAddress = pointItem.formattedAddress();
  });
}
