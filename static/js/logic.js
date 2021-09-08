var myMap = L.map("map", {
    center: [39.83, -98.58],
    zoom: 4
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

const usgs_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson'

d3.json(usgs_url).then(function(data) {
    console.log(data)
    let features = data.features;
    for(let i = 0; i<features.length; i++){
        var Earthquake = features[i]
        // L.marker(Earthquake.geometry.coordinates.slice(0,2))
        // .bindPopup(`<h1>${Earthquake.properties.mag}</h1> <hr> <h3>Place ${Earthquake.properties.place}</h3>`)
        // .addTo(myMap);
        console.log(Earthquake.geometry.coordinates.slice(0,2))

        L.circle(Earthquake.geometry.coordinates.slice(0,2), {
            color: "red",
            fillColor: "red",
            fillOpacity: 0.75,
            radius: 10000
          }).bindPopup(`<h1>${Earthquake.properties.mag}</h1> <hr> <h3>Place ${Earthquake.properties.place}</h3>`).addTo(myMap);

    }

});

//data keys: bbox, features, metadata: api, count, generated, status, title, url 