//southEast Markers
var southEast = [
[31.485345, -83.799047],
[33.481182, -85.824178],
[34.125345, -81.172047],
[36.876182, -87.823178],
[38.480145, -88.192047],
[32.487682, -89.541178],
[33.125345, -92.761047],
[31.016182, -84.817178],
[35.871345, -89.162047],
[37.486182, -80.213178]
];

//southWest Markers
var southWest = [
[30.485345, -113.231047],
[35.486182, -115.134178],
[32.123670, -110.464431],
[33.819370, -107.768231],
[31.123345, -113.799237],
[39.981182, -115.123458],
[28.491670, -110.268341],
[33.123470, -107.723431],
[30.612345, -113.123047],
[35.123482, -115.513178],
[32.479130, -110.732131],
[33.129670, -107.721411]
];

//northEast Markers
var northEast = [
[48.464457, -83.797605],
[41.476969, -87.781929],
[44.534052, -90.788041],
[49.494457, -84.127605],
[40.476969, -89.781229],
[44.234052, -88.312341],
[49.494457, -84.412605],
[40.446969, -81.411929],
[42.464052, -92.782041]
];

//northEast Markers
var northWest = [
[41.494457, -110.797605],
[45.476969, -105.781929],
[44.464052, -120.788042],
[47.445457, -113.124605],
[49.236969, -109.123129],
[43.412352, -119.541242],
];

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 4,
center: new google.maps.LatLng(40, -90),
mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;
var markers = new Array();

//Create and Place SouthEast Markers
for (i = 0; i < southEast.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(southEast[i][0], southEast[i][1]),
map: map,
icon: 'http://maps.google.com/mapfiles/ms/icons/red.png'
});

markers.push(marker);

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(southEast[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
$('#map-canvas').attr("data-markers",southEast.length);
$('.marker-count span').html(southEast.length);
}

//Create and Place SouthWest Markers
for (i = 0; i < southWest.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(southWest[i][0], southWest[i][1]),
map: map,
icon: 'https://image.ibb.co/jtTfaT/152957498839501195.png'
});

markers.push(marker);

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(southWest[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
$('#map-canvas2').attr("data-markers",southWest.length);
$('.marker-count2 span').html(southWest.length);
}

//Create and Place northEast Markers
for (i = 0; i < northEast.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(northEast[i][0], northEast[i][1]),
map: map,
icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
});

markers.push(marker);

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(northEast[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
$('#map-canvas3').attr("data-markers",southWest.length);
$('.marker-count3 span').html(northEast.length);
}

//Create and Place northWest Markers
for (i = 0; i < northWest.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(northWest[i][0], northWest[i][1]),
map: map,
icon: 'http://maps.google.com/mapfiles/ms/icons/green.png'
});

markers.push(marker);

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infowindow.setContent(northWest[i][0]);
infowindow.open(map, marker);
}
})(marker, i));
$('#map-canvas4').attr("data-markers",northWest.length);
$('.marker-count4 span').html(northWest.length);
}

// Sets the map on all markers in the array.
function setAllMap(map) {
for (var i = 0; i < markers.length; i++) {
markers[i].setMap(map);
}
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
setAllMap(null);
}
// Shows any markers currently in the array.
function showsouthEast() {
setAllMap(map);
}
