var map;

const ColorCorrect = "#00FF00";
const ColorWrong = "#FF0000";

//Locations
//North South East West -- Boundaries
const OviattLibrary = [34.240408, 34.239488, -118.528616, -118.530045];

function initMap() {
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

  //FOR DEBUGGING PURPOSES -- DELETE LATER
  // colorRectangle(
  //   OviattLibrary,
  //   map.addListener("click", function (e) {
  //     if (isInside(OviattLibrary, e)) console.log("broooo");
  //     else if (!isInside(OviattLibrary, e)) console.log("wtfff");
  //     else console.log("errorr brooo");
  //   })
  // );

  let lat;
  let lng;
  map.addListener("click", function (point) {
    // console.log(e.latLng.lat());
    
    lat = point.latLng.lat();
    lng = point.latLng.lng();
    let Point = [lat, lng];

    if (isInside(OviattLibrary, Point)) console.log("brooo");
    else if (!isInside(OviattLibrary, Point)) console.log("wtfff");
    else console.log("erorrsrsr");
  });

}

// function isInside(box, point) {
//   if (
//     point.latLng.lat() <= box[0] &&
//     point.latLng.lat() >= box[1] &&
//     point.latLng.lng() <= box[2] &&
//     point.latLng.lng() >= box[3]
//   )
//     return true;
//   else return false;
// }


function isInside(box, point) {
  if (
    point[0] <= box[0] &&
    point[0] >= box[1] &&
    point[1] <= box[2] &&
    point[1] >= box[3]
  )
    return true;
  else return false;
}
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
  } else if (!isCorrect) {
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

window.onload = initMap;
