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

// The following is going to include all of the different variables that are going to be used in this project (some may be stored in objects)

// The following object is going to contain all of the different objects that are going to be used in the project
var Locations = {
  initialLocation:{
    center:{
      lat: 34.04129,
      lng: -118.263667
    },
    zoom: 14
  },
  Restaurants:[
    {
      name:"Maccheroni Republic",
      address:{
        street:"332 South Broadway",
        city:"Los Angeles",
        state:"CA",
        zip:"90013"
      },
      food:"Italian",
      location:{
        lat: 34.050076,
        lng: -118.248646
      }
    },
    {
      name:"Baco Mercat",
      address:{
        street:"408 South Main Street",
        city:"Los Angeles",
        state:"CA",
        zip:"90013"
      },
      food:"Spanish-Fusion",
      location:{
        lat: 34.047847,
        lng: -118.247222
      }
    },
    {
      name:"Revolutionario North African Tacos",
      address:{
        street:"1436 West Jefferson Boulevard",
        city:"Los Angeles",
        state:"CA",
        zip:"90007"
      },
      food:"North African Tacos",
      location:{
        lat: 34.025333,
        lng: -118.298615
      }
    },
    {
      name:"Mex Peru Gipsy",
      address:{
        street:"414 E 12th St",
        city:"Los Angeles",
        state:"CA",
        zip:"90015"
      },
      food:"Mexican",
      location:{
        lat: 34.035217,
        lng: -118.255887
      }
    },
    {
      name:"Pie Hole",
      address:{
        street:"714 Traction Ave",
        city:"Los Angeles",
        state:"CA",
        zip:"90013"
      },
      food:"Pie & Bakery",
      location:{
        lat: 34.045429,
        lng: -118.236258
      }
    },
    {
      name:"Stumptown Coffee",
      address:{
        street:"06 S Santa Fe Ave",
        city:"Los Angeles",
        state:"CA",
        zip:"90021"
      },
      food:"Coffee Bar",
      location:{
        lat: 34.033292,
        lng: -118.229707
      }
    },
  ]
}
