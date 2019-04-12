var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
        var lyr_StamenTerrain_1 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });
        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_university_3 = new ol.format.GeoJSON();
var features_university_3 = format_university_3.readFeatures(json_university_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_university_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_university_3.addFeatures(features_university_3);var lyr_university_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_university_3, 
                style: style_university_3,
                title: '<img src="styles/legend/university_3.png" /> university'
            });var format_schools_4 = new ol.format.GeoJSON();
var features_schools_4 = format_schools_4.readFeatures(json_schools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_schools_4.addFeatures(features_schools_4);var lyr_schools_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_schools_4, 
                style: style_schools_4,
                title: '<img src="styles/legend/schools_4.png" /> schools'
            });var format_pharmacy_5 = new ol.format.GeoJSON();
var features_pharmacy_5 = format_pharmacy_5.readFeatures(json_pharmacy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pharmacy_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_pharmacy_5.addFeatures(features_pharmacy_5);var lyr_pharmacy_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pharmacy_5, 
                style: style_pharmacy_5,
                title: '<img src="styles/legend/pharmacy_5.png" /> pharmacy'
            });var format_hospital_6 = new ol.format.GeoJSON();
var features_hospital_6 = format_hospital_6.readFeatures(json_hospital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_hospital_6.addFeatures(features_hospital_6);var lyr_hospital_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospital_6, 
                style: style_hospital_6,
                title: '<img src="styles/legend/hospital_6.png" /> hospital'
            });var format_buss_stations_7 = new ol.format.GeoJSON();
var features_buss_stations_7 = format_buss_stations_7.readFeatures(json_buss_stations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buss_stations_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_buss_stations_7.addFeatures(features_buss_stations_7);var lyr_buss_stations_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buss_stations_7, 
                style: style_buss_stations_7,
                title: '<img src="styles/legend/buss_stations_7.png" /> buss_stations'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_StamenTerrain_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_university_3.setVisible(true);lyr_schools_4.setVisible(true);lyr_pharmacy_5.setVisible(true);lyr_hospital_6.setVisible(true);lyr_buss_stations_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_StamenTerrain_1,lyr_GoogleMaps_2,lyr_university_3,lyr_schools_4,lyr_pharmacy_5,lyr_hospital_6,lyr_buss_stations_7];
lyr_university_3.set('fieldAliases', {'nume': 'nume', 'adresa': 'adresa', 'latitude': 'latitude', 'longitude': 'longitude', 'tel': 'tel', 'url': 'url', 'descriptio': 'descriptio', 'code': 'code', });
lyr_schools_4.set('fieldAliases', {'nume': 'nume', 'adresa': 'adresa', 'latitude': 'latitude', 'longitude': 'longitude', 'tel': 'tel', 'url': 'url', 'descriptio': 'descriptio', 'code': 'code', });
lyr_pharmacy_5.set('fieldAliases', {'nume': 'nume', 'adresa': 'adresa', 'latitude': 'latitude', 'longitude': 'longitude', 'tel': 'tel', 'url': 'url', 'descriptio': 'descriptio', 'code': 'code', });
lyr_hospital_6.set('fieldAliases', {'nume': 'nume', 'adresa': 'adresa', 'latitude': 'latitude', 'longitude': 'longitude', 'tel': 'tel', 'url': 'url', 'descriptio': 'descriptio', 'code': 'code', });
lyr_buss_stations_7.set('fieldAliases', {'nume': 'nume', 'adresa': 'adresa', 'latitude': 'latitude', 'longitude': 'longitude', 'tel': 'tel', 'url': 'url', 'descriptio': 'descriptio', 'code': 'code', });
lyr_university_3.set('fieldImages', {'nume': 'TextEdit', 'adresa': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'tel': 'TextEdit', 'url': 'TextEdit', 'descriptio': 'TextEdit', 'code': 'TextEdit', });
lyr_schools_4.set('fieldImages', {'nume': 'TextEdit', 'adresa': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'tel': 'TextEdit', 'url': 'TextEdit', 'descriptio': 'TextEdit', 'code': 'TextEdit', });
lyr_pharmacy_5.set('fieldImages', {'nume': 'TextEdit', 'adresa': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'tel': 'TextEdit', 'url': 'TextEdit', 'descriptio': 'TextEdit', 'code': 'TextEdit', });
lyr_hospital_6.set('fieldImages', {'nume': 'TextEdit', 'adresa': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'tel': 'TextEdit', 'url': 'TextEdit', 'descriptio': 'TextEdit', 'code': 'TextEdit', });
lyr_buss_stations_7.set('fieldImages', {'nume': 'TextEdit', 'adresa': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'tel': 'TextEdit', 'url': 'TextEdit', 'descriptio': 'TextEdit', 'code': 'TextEdit', });
lyr_university_3.set('fieldLabels', {'nume': 'no label', 'adresa': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'tel': 'no label', 'url': 'no label', 'descriptio': 'no label', 'code': 'no label', });
lyr_schools_4.set('fieldLabels', {'nume': 'no label', 'adresa': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'tel': 'no label', 'url': 'no label', 'descriptio': 'no label', 'code': 'no label', });
lyr_pharmacy_5.set('fieldLabels', {'nume': 'no label', 'adresa': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'tel': 'no label', 'url': 'no label', 'descriptio': 'no label', 'code': 'no label', });
lyr_hospital_6.set('fieldLabels', {'nume': 'no label', 'adresa': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'tel': 'no label', 'url': 'no label', 'descriptio': 'no label', 'code': 'no label', });
lyr_buss_stations_7.set('fieldLabels', {'nume': 'no label', 'adresa': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'tel': 'no label', 'url': 'no label', 'descriptio': 'no label', 'code': 'no label', });
lyr_buss_stations_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});