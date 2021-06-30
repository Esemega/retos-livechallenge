import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import './map.css';
import { GeoJSONContainer } from './geojsonContainer';

export const MyMap = (props) => {
    const { stationsCollection, sectionsCollection } = props;

    return(
        <MapContainer className='map' center={[41.3879, 2.16992]} zoom={13} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSONContainer 
            stationsCollection = { stationsCollection } 
            sectionsCollection = { sectionsCollection }
            />
        </MapContainer>
    )
}