import lookup from 'country-code-lookup';
import mapboxgl from 'mapbox-gl';
import { mapLayer } from 'config/mapLayer';
import { MapSingleton } from 'Map/map';


export const mapConfig = (data, ref) => {
  var map = MapSingleton.getInstance(ref)
  map.addControl(new mapboxgl.NavigationControl());

  map.once('load', function () {
    map.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: data,
      },
    });

    map.addLayer({ ...mapLayer });

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    let lastId;

    map.on('mousemove', 'circles', (e) => {
      const id = e.features[0].properties.id;

      if (id !== lastId) {
        lastId = id;
        const { cases, deaths, country, province } = e.features[0].properties;

        map.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();

        const countryISO =
          lookup.byCountry(country)?.iso2 || lookup.byInternet(country)?.iso2;
        const provinceHTML =
          province !== 'null' ? `<p>Province: <b>${province}</b></p>` : '';
        const mortalityRate = ((deaths / cases) * 100).toFixed(2);
        const countryFlagHTML = Boolean(countryISO)
          ? `<img src="https://www.countryflags.io/${countryISO}/flat/64.png"></img>`
          : '';

        const HTML = `<p>Country: <b>${country}</b></p>
            ${provinceHTML}
            <p>Cases: <b>${cases}</b></p>
            <p>Deaths: <b>${deaths}</b></p>
            <p>Mortality Rate: <b>${mortalityRate}%</b></p>
            ${countryFlagHTML}`;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(HTML).addTo(map);
      }
    });

    map.on('mouseleave', 'circles', function () {
      lastId = undefined;
      map.getCanvas().style.cursor = '';
      popup.remove();
    });
  });
  return map;
};

export const setMap = (data) => (
  data.map((point, index) => ({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [
        point.coordinates.longitude,
        point.coordinates.latitude,
      ],
    },
    properties: {
      id: index,
      country: point.country,
      province: point.province,
      cases: point.stats.confirmed,
      deaths: point.stats.deaths,
    },
  }))
);
