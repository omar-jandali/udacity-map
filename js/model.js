
/*
var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: initialLocation.center,
    zoom: initialLocation.zoom
  });

  ko.applyBindings(viewModel);
}


function point(data){
  var self = this;

  self.name = data.name;

  self.street = data.street;
  self.city = data.city;
  self.state = data.state;
  self.zip = data.sip;

  self.lat = data.lat;
  self.lng = data.lng;

  self.map = map;

  self.food = data.food;

  self.pointMarker = new google.maps.Marker({
    position: {
      lat: self.lat,
      lng: self.lng
    },
    map: map,
    animation: google.maps.Animation.BOUNCE
  })
}

function viewModel(){
  var self = this;

  self.pointsList = ko.observableArray([]);

  points.forEach(function(point){
    self.points.push(new pointMarker(point));
  });

}

ko.applyBindings(viewModel);

var marker = function(data){
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
};

var markers = new google.maps.Map({
  map: map,
  title: marker.name,
  position: {marker.lat, marker.lng}
})

var viewModel = function(){
  var self = this;

  self.myObservableLocations = ko.observableArray([]);

  locations.forEach(function(marker){
    self.locations.push( new markers(marker));
  });

  this.currentMakrer = ko.observable(this.location);
}



ko.applyBindings(viewModel());

*/
