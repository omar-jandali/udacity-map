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

//This is going to be the initial map craetion

var map;
var infowindow;


function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: initialLocation.center,
    zoom: initialLocation.zoom
  });

  ko.applyBindings(viewModel());

  infowindow = new google.maps.InfoWindow();
}

var point = function(obj){
  var self = this;

  this.name = ko.observable(obj.name);
  this.street = obj.street;
  this.city = obj.city;
  this.state = obj.stat;
  this.zip = obj.zip;
  this.food = ko.observable(obj.food);
  this.lat = ko.observable(obj.lat);
  this.lng = ko.observable(obj.lng);
  this.map = map;

  this.fullAddress = function(){
    return self.street + self.city + "</br>" + self.state + self.zip;
  };

  this.formattedAddress = function(){
    var currentStreet = self.street + self.city + self.state + self.zip;
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
      animation: google.maps.Animation.DROP
    });

    var streetViewRequest = streetViewMain + streetViewSize + streetViewLocation +
                            pointItem.formattedAddress() + streetViewPitch +
                            streetViewKey;

    console.log(streetViewRequest);

    var instafeedRequest = function(){
      var feed = new Instafeed({
        get: "tagged",
        tagName: pointItem.formattedName(),
        clientId: "bdcd7f0bf8ec454b94f78f4453e93aa8"
      });
      feed.run();
    };

    google.maps.event.addListener(marker, 'click', function(){
      if(infowindow.marker != marker){
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png'),
        infowindow.open(map, this);
        infowindow.setContent('<div><h1>' + pointItem.name() +
        '</h1><h2>' + pointItem.fullAddress() +
        '</h2><img src=' + streetViewRequest +
        '><div id="instafeed">' + '</div</div>');
      }
    });


  });

  self.pointsList().forEach(function(pointItem){
    document.getElementById('hide-places').addEventListener('click', function(){
      pointItem.marker.setMap(null);
    });
    document.getElementById('show-places').addEventListener('click', function(){
      pointItem.marker.setMap(map);
    });
  })

  self.pointsList().forEach(function(pointItem){
    self.pointAddress = pointItem.fullAddress();
    self.pointFormattedAddress = pointItem.formattedAddress();
  });

  //document.getElementById('show-places').addEventListener();


}
