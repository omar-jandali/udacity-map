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

// the following is a single location that the inital map load up will be centered arround
initialLocation = {
  center:{
    lat: 34.04129,
    lng: -118.263667
  },
  zoom: 14
}

// the following is a list of the locations that are going to be turned into markers later in the file
locations = [
  {
    name: "Maccheroni Republic",
    street:"332 South Broadway. ",
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
    street:"408 South Main Street. ",
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
    street:"414 E 12th St. ",
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
    street:"714 Traction Ave. ",
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
    street:"06 S Santa Fe Ave. ",
    city:"Los Angeles, ",
    state:"CA ",
    zip:"90021",
    food:"Coffee Bar",
    lat: 34.033292,
    lng: -118.229707,
    map: map
  }
]

// This is the template for all of the location information to transmitted to the view model.
function Location(data){
  var self = this;

  this.street = ko.observable(data.street);
  this.city = ko.observable(data.city);
  this.state = ko.observable(data.state);
  this.zip = ko.observable(data.zip);

  this.lat = ko.observable(data.lat);
  this.lng = ko.observable(data.lng);

  this.name = ko.observable(data.name);
  this.food = ko.observable(data.food);

  this.map = ko.observable(data.map);

  this.fullAddress = ko.computed(function(){
    return self.street + self.city + self.state + self.zip;
  });

  this.formattedAddress = ko.computed(function(){
    return self.street + "+" + self.city + "+" + self.state + "+" + self.zip;
  });

  this.position = ko.computed(function(){
    return "Lat:" + this.lat + ",Lng:" + this.lng;
  });
}

function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), initialLocation);
}

/*=====The following is the view model=====*/
function viewModel(){
  var self = this;

  var markerList = ko.observableArray([]);

  locations.forEach(function(location){
    self.locations.push( new marker(location));
  });

  this.currentMakrer = ko.observable(this.locations()[0]);

}

ko.applyBinding(viewModel);
