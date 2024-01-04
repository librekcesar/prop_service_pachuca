var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PCH1_1 = new ol.format.GeoJSON();
var features_PCH1_1 = format_PCH1_1.readFeatures(json_PCH1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCH1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCH1_1.addFeatures(features_PCH1_1);
var lyr_PCH1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PCH1_1, 
                style: style_PCH1_1,
                interactive: false,
    title: 'PCH1<br />\
    <img src="styles/legend/PCH1_1_0.png" /> SPPCH1<br />\
    <img src="styles/legend/PCH1_1_1.png" /> SPPCH2<br />\
    <img src="styles/legend/PCH1_1_2.png" /> SPPCH3<br />\
    <img src="styles/legend/PCH1_1_3.png" /> <br />'
        });
var format_PCH1_station_code_2 = new ol.format.GeoJSON();
var features_PCH1_station_code_2 = format_PCH1_station_code_2.readFeatures(json_PCH1_station_code_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCH1_station_code_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCH1_station_code_2.addFeatures(features_PCH1_station_code_2);
var lyr_PCH1_station_code_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PCH1_station_code_2, 
                style: style_PCH1_station_code_2,
                interactive: false,
                title: '<img src="styles/legend/PCH1_station_code_2.png" /> PCH1_station_code'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PCH1_1.setVisible(true);lyr_PCH1_station_code_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PCH1_1,lyr_PCH1_station_code_2];
lyr_PCH1_1.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', });
lyr_PCH1_station_code_2.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', });
lyr_PCH1_1.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', });
lyr_PCH1_station_code_2.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', });
lyr_PCH1_1.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', });
lyr_PCH1_station_code_2.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', });
lyr_PCH1_station_code_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});