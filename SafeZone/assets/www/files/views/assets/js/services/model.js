/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "markerLng": new $a.LocalStorage("markerLng", "String"),

    "markerLat": new $a.LocalStorage("markerLat", "String"),

    "currentLng": new $a.LocalStorage("currentLng", "String"),

    "currentLat": new $a.LocalStorage("currentLat", "String")
};