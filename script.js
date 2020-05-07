var map;
var questionNumber = 1;
const ColorCorrect = "#00FF00";
const ColorWrong = "#FF0000";
const MAXQUESTIONS = 5;

const locations = [
  null,
  (OviattLibrary = [34.240408, 34.239488, -118.528616, -118.530045]),
  (MatadorSquare = [34.239715, 34.239194, -118.527433, -118.528149]),
  (OrangeGrove = [34.237302, 34.235545, -118.524704, -118.527302]),
  (UniversityStudentUnion = [34.240909, 34.239189, -118.524686, -118.527266]),
  (Matadome = [34.24261, 34.241226, -118.525333, -118.527033]),
];

function initMap() {
  showQuestion(questionNumber);
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

  map.addListener("click", function (answer) {
    if (questionNumber < locations.length) {
      let Point = getUserAnswer(answer);
      processAnswer(locations[questionNumber], Point);
      questionNumber++;
      showQuestion(questionNumber);
    }
  });
}

function processAnswer(location, point) {
  if (isInside(location, point)) {
    colorRectangle(location, true);
    colorWord(questionNumber, true);
  } else if (!isInside(location, point)) {
    colorRectangle(location, false);
    colorWord(questionNumber, false);
  } else console.log("erorrsrsr");
}
function getUserAnswer(answer) {
  return [answer.latLng.lat(), answer.latLng.lng()];
}
function showQuestion(i) {
  if (i < locations.length) {
    var q = document.getElementById("q" + i);
    q.style.display = "block";
  }
}
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

function colorWord(i, isCorrect) {
  if (i < locations.length) {
    var w = document.getElementById("q" + i);
    if (isCorrect) {
      w.style.background = ColorCorrect;
    } else if (!isCorrect) {
      w.style.background = ColorWrong;
    } else console.log("errorrss");
  }
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
