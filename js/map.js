function initialize(){
  var mapOptions = {
    zoom: 15,
    center: {lat: 41.760141, lng: -72.702519}
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var locations = [
    {name: 'CORE FILTRATION LLC', address: '30 ARBOR STREET, HARTFORD, CT 06106', lat: 41.760141, lng: -72.702519}
  ];

  locations.forEach(function(element, index, array){
    var marker, content;

    marker = createMarker(element);
    content = createInfoWindow(element, marker);
  });

  function createMarker(element){
    var coordinates = new google.maps.LatLng(element.lat, element.lng); 

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: element.name
    });

    return marker;
  }

  function createInfoWindow(element, marker){
    var contentString;

    contentString = "<div><span>" + element.name + "</span></div><div>" + element.address + "</div>";

    var infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 150
    });

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(map, marker);
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
