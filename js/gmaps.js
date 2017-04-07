
var myCenter=new google.maps.LatLng(-20.3035016,-40.3015194);
var mapCenter=new google.maps.LatLng(-20.303190, -40.301458);

function initialize()
{
var mapProp = {
  center:mapCenter,
  zoom:17,
  scrollwheel: false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"<b>MINDTEC</b><br/>Rua Constante Sodré, nº 335<br/>Santa Lúcia - Vitória - ES"
  });

infowindow.open(map,marker);
marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

