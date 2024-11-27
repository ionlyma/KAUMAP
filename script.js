// script.js

// Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoib25seW1hIiwiYSI6ImNtM295MTJ2YTA5M2sybXNlejE3MTQwYnEifQ.VhUCYdGBUwNqIT0NPcaSuw';

// Accurate coordinates for King Abdulaziz University in Rabigh, Saudi Arabia
const initialCoordinates = [38.960482, 22.78925]; // Longitude, Latitude

// Initialize Mapbox GL JS map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: initialCoordinates,
    zoom: 17,
    // maxBounds: [
    //     [38.94676, 22.773618], // Southwest coordinates
    //     [38.978211, 22.80485]  // Northeast coordinates
    // ]
});

// Add navigation control (the +/- zoom buttons)
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Add GeolocateControl to locate the user
const geolocateControl = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 6000
    },
    trackUserLocation: true,
    showUserLocation: true,
    showAccuracyCircle: true,
    fitBoundsOptions: {
        maxZoom: 17
    }
});

map.addControl(geolocateControl, 'top-right');

// Start tracking the user's location after the map loads
map.on('load', () => {
    geolocateControl.trigger();
});

// Define place types and their associated colors
const placeTypes = {
    "Academic Building": "#1f77b4", // Blue
    "Library": "#ff7f0e",            // Orange
    "Cafeteria": "#2ca02c",          // Green
    "Recreational Area": "#d62728",  // Red
    "Administration": "#9467bd",     // Purple
    // Add more types as needed
};

// Define multiple places with their polygon coordinates, names, and types
const places = [
    {
        "name": "RB01",
        "type": "Academic Building",
        "coordinates": [
            [
                38.96254064151566,
                22.788887775777937
            ],
            [
                38.962393255370614,
                22.78851932891068
            ],
            [
                38.96277305812893,
                22.788380834441313
            ],
            [
                38.962824076408964,
                22.788540233724206
            ],
            [
                38.96273904594065,
                22.788571590938574
            ],
            [
                38.962758886384734,
                22.788644757743157
            ],
            [
                38.96285241989895,
                22.788610787446146
            ],
            [
                38.962914775575626,
                22.78877018646027
            ],
            [
                38.96254064151566,
                22.788887775777937
            ]
        ]
    },
    {
        "name": "RB02",
        "type": "Academic Building",
        "coordinates": [
            [
                38.96348276633137,
                22.787015557368306
            ],
            [
                38.963386398468,
                22.786764696591263
            ],
            [
                38.96365282726799,
                22.78667584995526
            ],
            [
                38.96374069208548,
                22.786929324028264
            ],
            [
                38.96348276633137,
                22.787015557368306
            ]
        ]
    },

    {
        "name": "R01",
        "type": "Academic Building",
        "coordinates": [
            [
                38.96228355542192,
                22.78788588249975
            ],
            [
                38.96219002190773,
                22.787642862679604
            ],
            [
                38.962459285056866,
                22.78754879037521
            ],
            [
                38.96255281857114,
                22.7877944234789
            ],
            [
                38.96228355542192,
                22.78788588249975
            ]
        ]
    },
    {
        "name": "R02",
        "type": "Academic Building",
        "coordinates": [
            [
                38.961683415629665,
                22.78808456152396
            ],
            [
                38.96159555081215,
                22.787836315827676
            ],
            [
                38.96186481396134,
                22.787744856773614
            ],
            [
                38.9619526787788,
                22.78799571574777
            ],
            [
                38.961683415629665,
                22.78808456152396
            ]
        ]
    },
    {
        "name": "R03",
        "type": "Academic Building",
        "coordinates": [
            [
                38.961530360786384,
                22.787656010776132
            ],
            [
                38.961445330318014,
                22.787405151177126
            ],
            [
                38.96171459346718,
                22.787321531208462
            ],
            [
                38.961796789586344,
                22.787569777841014
            ],
            [
                38.961530360786384,
                22.787656010776132
            ]
        ]
    },
   
      {
        "name": "R04",
        "type": "Academic Building",
        "coordinates": [
            [
                38.96168561734714,
                22.787128598102683
            ],
            [
                38.96157975282716,
                22.78688110756279
            ],
            [
                38.96184441412879,
                22.786800934474655
            ],
            [
                38.96193704558462,
                22.787043196488284
            ],
            [
                38.96168561734714,
                22.787128598102683
            ]
        ]
    },
    {
        "name": "R05",
        "type": "Academic Building",
        "coordinates": [
            [
                38.962127947537965,
                22.787459788861582
            ],
            [
                38.962045751418856,
                22.787216768282946
            ],
            [
                38.96231218021887,
                22.78712008255576
            ],
            [
                38.962394376337954,
                22.78737094267835
            ],
            [
                38.962127947537965,
                22.787459788861582
            ]
        ]
    },{
        "name": "R07",
        "type": "Academic Building",
        "coordinates": [
            [
                38.961289731363394,
                22.78668352246062
            ],
            [
                38.96157033190755,
                22.786592062632764
            ],
            [
                38.96152781667337,
                22.786508442165626
            ],
            [
                38.961632687584256,
                22.78647185819517
            ],
            [
                38.96166386542336,
                22.786555478684733
            ],
            [
                38.961933128572525,
                22.78647185819517
            ],
            [
                38.961839595056716,
                22.786223609564203
            ],
            [
                38.961567497558406,
                22.786304617061518
            ],
            [
                38.96159300669919,
                22.786385624511396
            ],
            [
                38.96149663883591,
                22.786416982221112
            ],
            [
                38.96147112969507,
                22.7863385879337
            ],
            [
                38.96119336349841,
                22.786435274214895
            ],
            [
                38.961289731363394,
                22.78668352246062
            ]
        ]
    },
    {
        "name": "R09",
        "type": "Academic Building",
        "coordinates": [
            [
                38.962715217751764,
                22.78698312876034
            ],
            [
                38.96297356049584,
                22.786893249714822
            ],
            [
                38.963075922714296,
                22.787142663922324
            ],
            [
                38.96280295679614,
                22.78723703674602
            ],
            [
                38.962715217751764,
                22.78698312876034
            ]
        ]
    } ,

    {
        "name": "Engineering Workshop",
        "type": "Academic Building",
        "coordinates": [
            [
                38.96218147189276,
                22.786965152955972
            ],
            [
                38.962081546869996,
                22.786708997484254
            ],
            [
                38.962561674421835,
                22.786535979920103
            ],
            [
                38.96265916225008,
                22.786805617587362
            ],
            [
                38.96218147189276,
                22.786965152955972
            ]
        ]
    },
    {
        "name": "Library",
        "type": "Library",
        "coordinates": [
            [
                38.96292596968149,
                22.787322473382304
            ],
            [
                38.96289438379392,
                22.78724239178237
            ],
            [
                38.96303257205176,
                22.787195070814263
            ],
            [
                38.96306415793933,
                22.78728607266116
            ],
            [
                38.96292596968149,
                22.787322473382304
            ]
        ]
    },
    {
        "name": "Cafeteria",
        "type": "Cafeteria",
        "coordinates": [
            [
                38.96156424673211,
                22.78776531928787
            ],
            [
                38.9615445055521,
                22.78769251807124
            ],
            [
                38.961686642045066,
                22.787648837322607
            ],
            [
                38.961706383225106,
                22.78773255874495
            ],
            [
                38.96156424673211,
                22.78776531928787
            ]
        ]
    },
    {
        "name": "Deanship of Admission and Registration",
        "type": "Administration",
        "coordinates": [
            [
                38.962981086568846,
                22.787660999120845
            ],
            [
                38.96287338130884,
                22.787412752654305
            ],
            [
                38.963148313156324,
                22.787323906440477
            ],
            [
                38.963239012323044,
                22.78757737930907
            ],
            [
                38.962981086568846,
                22.787660999120845
            ]
        ]
    },
    {
        "name": "General Adminstration",
        "type": "Administration",
        "coordinates": [
            [
                38.96018318422239,
                22.788100451322194
            ],
            [
                38.960076581852064,
                22.787856567694178
            ],
            [
                38.96034506189423,
                22.78776192616877
            ],
            [
                38.96044376779318,
                22.788013090072297
            ],
            [
                38.96018318422239,
                22.788100451322194
            ]
        ]
    },
    {
        "name": "Services Building",
        "type": "Administration",
        "coordinates": [
            [
                38.96083464314938,
                22.78787840803642
            ],
            [
                38.96073198901533,
                22.78763088394865
            ],
            [
                38.961012313765025,
                22.787536242266654
            ],
            [
                38.961095226720204,
                22.787794686704657
            ],
            [
                38.96083464314938,
                22.78787840803642
            ]
        ]
    }
    // Add other places as needed...
];

// Function to add a place to the map and sidebar
function addPlaceToMap(place, index) {
    const { name, type, coordinates } = place;
    const color = placeTypes[type] || "#3388ff"; // Default color if type not found
    // Add the polygon to the map
    map.addSource(`place-${index}`, {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {
                'name': name,
                'type': type
            },
            'geometry': {
                'type': 'Polygon',
                'coordinates': [coordinates]
            }
        }
    });

    map.addLayer({
        'id': `place-${index}`,
        'type': 'fill',
        'source': `place-${index}`,
        'layout': {},
        'paint': {
            'fill-color': color,
            'fill-opacity': 0.5
        }
    });

    // Add a label for the polygon
    const centroid = turf.centroid({
        'type': 'Feature',
        'geometry': {
            'type': 'Polygon',
            'coordinates': [coordinates]
        }
    });

    map.addLayer({
        'id': `place-label-${index}`,
        'type': 'symbol',
        'source': {
            'type': 'geojson',
            'data': centroid
        },
        'layout': {
            'text-field': name,
            'text-size': 12,
            'text-anchor': 'top'
        },
        'paint': {
            'text-color': '#000000'
        }
    });

    // Add place to the sidebar list
    const listItem = document.createElement('li');
    listItem.textContent = `${name} (${type})`;
    listItem.dataset.index = index;
    document.getElementById('places-list').appendChild(listItem);

    // Add click event to list item
    listItem.addEventListener('click', () => {
        // Fly to the polygon
        const bbox = turf.bbox({
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [coordinates]
            }
        });
        map.fitBounds(bbox, { padding: 50 });
        // Highlight the polygon
        map.setPaintProperty(`place-${index}`, 'fill-color', 'yellow');
        setTimeout(() => {
            map.setPaintProperty(`place-${index}`, 'fill-color', color);
        }, 2000);
    });

    // Add click event to the polygon
    map.on('click', `place-${index}`, (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`<b>${name}</b><br>Type: ${type}`)
            .addTo(map);
    });

    // Change the cursor to pointer when hovering over the polygon
    map.on('mouseenter', `place-${index}`, () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', `place-${index}`, () => {
        map.getCanvas().style.cursor = '';
    });
}

// Add existing places to the map and sidebar
map.on('load', () => {
    places.forEach((place, index) => {
        addPlaceToMap(place, index);
    });
});

// Initialize Mapbox GL Draw
const draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        polygon: true,
        trash: true
    }
});
map.addControl(draw);

// Modal Elements
const modal = document.getElementById("type-modal");
const span = document.getElementsByClassName("close")[0];
const confirmTypeBtn = document.getElementById("confirm-type-btn");
const placeTypeSelect = document.getElementById("place-type-select");
const placeNameInput = document.getElementById("place-name");

// Populate the select dropdown with place types
Object.keys(placeTypes).forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    placeTypeSelect.appendChild(option);
});

// Handle modal close
span.onclick = function() {
    modal.style.display = "none";
    // Delete the drawn feature
    if (currentFeatureId !== null) {
        draw.delete(currentFeatureId);
        currentFeatureId = null;
    }
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Delete the drawn feature
        if (currentFeatureId !== null) {
            draw.delete(currentFeatureId);
            currentFeatureId = null;
        }
    }
};

// Store the current feature ID
let currentFeatureId = null;

// Handle the creation of new polygons
map.on('draw.create', function (event) {
    const feature = event.features[0];
    currentFeatureId = feature.id;

    // Show the modal to select place type
    modal.style.display = "block";
});

// Handle the confirmation of place type
confirmTypeBtn.addEventListener('click', () => {
    const placeType = placeTypeSelect.value;
    const placeName = placeNameInput.value;

    if (!placeType || !placeName) {
        alert("Please select a place type and enter a name.");
        return;
    }
    // Hide the modal
    modal.style.display = "none";

    // Get the feature
    const feature = draw.get(currentFeatureId);

    // Assign properties
    feature.properties = {
        name: placeName,
        type: placeType
    };

    // Remove the feature from Draw
    draw.delete(currentFeatureId);

    // Add the feature as a layer
    const index = places.length;
    const coordinates = feature.geometry.coordinates[0];
    const color = placeTypes[placeType] || "#3388ff"; // Default color if type not found

    // Add the polygon to the map
    map.addSource(`place-${index}`, {
        'type': 'geojson',
        'data': feature
    });

    map.addLayer({
        'id': `place-${index}`,
        'type': 'fill',
        'source': `place-${index}`,
        'layout': {},
        'paint': {
            'fill-color': color,
            'fill-opacity': 0.5
        }
    });

    // Add a label for the polygon
    const centroid = turf.centroid(feature);

    map.addLayer({
        'id': `place-label-${index}`,
        'type': 'symbol',
        'source': {
            'type': 'geojson',
            'data': centroid
        },
        'layout': {
            'text-field': placeName,
            'text-size': 12,
            'text-anchor': 'top'
        },
        'paint': {
            'text-color': '#000000'
        }
    });
    console.log({
        name: placeName,
        type: placeType,
        coordinates: coordinates
    })
    // Add place to the sidebar list
    places.push({
        name: placeName,
        type: placeType,
        coordinates: coordinates
    });

    const listItem = document.createElement('li');
    listItem.textContent = `${placeName} (${placeType})`;
    listItem.dataset.index = index;
    document.getElementById('places-list').appendChild(listItem);

    // Add click event to list item
    listItem.addEventListener('click', () => {
        // Fly to the polygon
        const bbox = turf.bbox(feature);
        map.fitBounds(bbox, { padding: 50 });
        // Highlight the polygon
        map.setPaintProperty(`place-${index}`, 'fill-color', 'yellow');
        setTimeout(() => {
            map.setPaintProperty(`place-${index}`, 'fill-color', color);
        }, 2000);
    });

    // Add click event to the polygon
    map.on('click', `place-${index}`, (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`<b>${placeName}</b><br>Type: ${placeType}`)
            .addTo(map);
    });

    // Change the cursor to pointer when hovering over the polygon
    map.on('mouseenter', `place-${index}`, () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', `place-${index}`, () => {
        map.getCanvas().style.cursor = '';
    });

    // Reset currentFeatureId
    currentFeatureId = null;
});

// Toggle Sidebar Functionality
const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});