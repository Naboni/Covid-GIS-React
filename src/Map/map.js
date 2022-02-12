import mapboxgl from 'mapbox-gl';
export var MapSingleton = (function () {
    var instance;

    function createInstance(ref) {
        var mapInstance = new mapboxgl.Map({
            container: ref.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [16, 27],
            zoom: 2,
        });
        return mapInstance;
    }

    return {
        getInstance: function (ref) {
            if (!instance) {
                instance = createInstance(ref);
            }
            return instance;
        }
    };
})();