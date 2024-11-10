function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:12.9941732, lng: 77.5943163};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}