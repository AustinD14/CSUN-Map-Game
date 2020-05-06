var map;
window.onload = function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.239171, lng: -118.527593 },
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    clickableIcons: false,
    gestureHandling: "none",

    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      }
      ,
    ],
  });
};
