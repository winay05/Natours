/* eslint-disable */
// console.log('Hello form the client side');

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoid2luYXkwNSIsImEiOiJja2plN3Q4ZW4zOHh1MnFudmZzY2Q3cnVpIn0.uH_Z62Jbs-irMft3a65OMA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/winay05/ckjec2bm10n9c19testvyg51d',
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    //create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //add popup

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: { top: 200, bottom: 150, left: 100, right: 100 }
  });
};
