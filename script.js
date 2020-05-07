var map;

const ColorCorrect = "#00FF00";
const ColorWrong = "#FF0000";

//Locations
//North South East West -- Boundaries
const OviattLibrary = [34.240408, 34.239488, -118.528616, -118.530045];

window.onload = function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.239171, lng: -118.527593 },
    zoom: 17,
    // mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDoubleClickZoom: true,
    scrollwheel: false,
    draggable: false,
    clickableIcons: false,
    disableDefaultUI: true,
    gestureHandling: "none",
    styles: [
      //PLACES OF INTEREST LABELS
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      // ROAD LABELS
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  });

  colorRectangle(OviattLibrary,true);
};

//rectangle is the 2 points coordinate of the location, point is the user's answer
function findPoint() {}

function colorRectangle(location, isCorrect) {
  if (isCorrect) {
    var library = new google.maps.Rectangle({
      strokeColor: ColorCorrect,
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: ColorCorrect,
      fillOpacity: 0.3,
      map: map,
      bounds: {
        north: location[0],
        south: location[1],
        east: location[2],
        west: location[3],
      },
    });
  }
  else if (!isCorrect) {
    var library = new google.maps.Rectangle({
      strokeColor: ColorWrong,
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: ColorWrong,
      fillOpacity: 0.3,
      map: map,
      bounds: {
        north: location[0],
        south: location[1],
        east: location[2],
        west: location[3],
      },
    });
  }
}
