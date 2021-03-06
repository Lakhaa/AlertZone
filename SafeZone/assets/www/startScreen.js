/*
 * JS for startScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '28962323-b88f-4d24-b3f2-1ab2bd973d5c';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}];

function startScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'google_map': 'startScreen_google_map',
        'marker_3': 'startScreen_marker_3',
        'from': 'startScreen_from',
        'to': 'startScreen_to',
        'show_directions': 'startScreen_show_directions',
        'get_markers': 'startScreen_get_markers',
        'show_my_location': 'startScreen_show_my_location'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["startScreen_convert_address_onsuccess_mapping_0"] = {
        "homeScreen": "startScreen",
        "directions": [

        {
            "from_name": "convert_address",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "markerLat",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['results'][0]['geometry']['location']['lat']",
                "target": "$"

            }

            ]
        },

        {
            "from_name": "convert_address",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "markerLng",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']['results'][0]['geometry']['location']['lng']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["startScreen_convert_address_onbeforesend_mapping_0"] = {
        "homeScreen": "startScreen",
        "directions": [

        {

            "to_name": "convert_address",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
                "parameters": {
                    "address": "Chicago",
                    "sensor": "false"
                },
                "body": null
            },

            "mappings": []
        }

        ]
    };

    Apperyio.mappings["startScreen_get_db_locations_onbeforesend_mapping_0"] = {
        "homeScreen": "startScreen",
        "directions": [

        {

            "to_name": "get_db_locations",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": []
        }

        ]
    };

    Apperyio.mappings["startScreen_geolocation1_onbeforesend_mapping_0"] = {
        "homeScreen": "startScreen",
        "directions": [

        {

            "to_name": "geolocation1",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "data": {
                    "options": {
                        "maximumAge": 3000,
                        "timeout": 5000,
                        "enableHighAccuracy": true,
                        "watchPosition": false
                    }
                }
            },

            "mappings": []
        }

        ]
    };

    Apperyio.mappings["startScreen_geolocation1_onsuccess_mapping_0"] = {
        "homeScreen": "startScreen",
        "directions": [

        {
            "from_name": "geolocation1",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "currentLat",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['data']['coords']['latitude']",
                "target": "$"

            }

            ]
        },

        {
            "from_name": "geolocation1",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "currentLng",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['data']['coords']['longitude']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.convert_address = Apperyio.datasources.convert_address = new Apperyio.DataSource(ConvertAddress, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["startScreen_convert_address_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("startScreen");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["startScreen_convert_address_onsuccess_mapping_0"]);
            var markerLatLng = new google.maps.LatLng(localStorage.getItem('markerLat'), localStorage.getItem('markerLng'));

            var marker = new google.maps.Marker({
                position: markerLatLng,
                map: map,
                title: data.results[0].address_components[0].long_name,
                animation: google.maps.Animation.DROP
            });

            bounds.extend(markerLatLng);
            map.fitBounds(bounds);;
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.get_db_locations = Apperyio.datasources.get_db_locations = new Apperyio.DataSource(location_locations_read_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["startScreen_get_db_locations_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("startScreen");
        },
        "onSuccess": function(data) {
            for (var i = 0; i < data.length; i++) {
                convert_address.execute({
                    'data': {
                        'address': data[i].location,
                        'sensor': false
                    }
                });
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.geolocation1 = Apperyio.datasources.geolocation1 = new Apperyio.DataSource(GeolocationService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["startScreen_geolocation1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("startScreen");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["startScreen_geolocation1_onsuccess_mapping_0"]);
            var markerLatLng = new google.maps.LatLng(Apperyio.storage.currentLat.get(), Apperyio.storage.currentLng.get());

            var marker = new google.maps.Marker({
                position: markerLatLng,
                map: map,
                icon: 'http://i.imgur.com/fDUI8bZ.png'
            });

            map.setCenter(markerLatLng);
            map.setZoom(15);;
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'startScreen';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            initialize();

            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events


    function startScreen_windowEvents() {

        $('#startScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function startScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function startScreen_elementsExtraJS() {
        // screen (startScreen) extra code

        /* google_map */

        $("[name = 'google_map']").wrap("<div/>");
        $("[name = 'google_map']").parent().css("margin-left", $("[name = 'google_map']").css("margin-left"));
        $("[name = 'google_map']").parent().css("margin-right", $("[name = 'google_map']").css("margin-right"));
        $("[name = 'google_map']").css("margin-left", '0');
        $("[name = 'google_map']").css("margin-right", '0');

        var google_map_options = {
            markerSourceName: "google_map_markers",
            latitude: "",
            longitude: "",
            address: "",
            zoom: 2,
            showLocationMarker: false
        }

        Apperyio.__registerComponent('google_map', new Apperyio.ApperyMapComponent("google_map", google_map_options));
        $("[name='google_map_markers'] [apperytype='marker']").attr("reRender", "google_map");
        $(":mobile-pagecontainer").off("pagecontainershow.startScreen_mobilecontainer1").on("pagecontainershow.startScreen_mobilecontainer1", function(event, ui) {
            if (($('#startScreen_google_map', ui.toPage).length > 0) && (Apperyio('google_map') != undefined)) {
                Apperyio('google_map').refresh();
            }
        });

    };

    // screen elements handler


    function startScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#startScreen_mobilecontainer1 [name="show_directions"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var sourceAddress = Apperyio("from").val();
                    var destinationAddress = Apperyio("to").val();
                    displayDirections(sourceAddress, destinationAddress, map);;

                }
            },
        }, '#startScreen_mobilecontainer1 [name="show_directions"]');
        $(document).off("click", '#startScreen_mobilecontainer1 [name="get_markers"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        get_db_locations.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#startScreen_mobilecontainer1 [name="get_markers"]');
        $(document).off("click", '#startScreen_mobilecontainer1 [name="show_my_location"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        geolocation1.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#startScreen_mobilecontainer1 [name="show_my_location"]');

    };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        Apperyio.CurrentScreen = "startScreen";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    startScreen_onLoad();
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});