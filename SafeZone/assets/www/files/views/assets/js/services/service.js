/*
 * Service settings
 */
var location_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": ""
}

/*
 * Services
 */
var GeolocationService = new Apperyio.GeolocationService({});

var ConvertAddress = new Apperyio.RestService({
    'url': 'https://maps.googleapis.com/maps/api/geocode/json',
    'dataType': 'json',
    'type': 'get',
});

var location_locations_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/locations/{object_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': location_settings
});