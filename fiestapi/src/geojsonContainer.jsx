import React from "react";
import { GeoJSON, useMap } from "react-leaflet";

export const GeoJSONContainer = (props) => {
  const { stationsCollection, sectionsCollection } = props;

  const map = useMap();

  const stationsRef = React.useRef(null);
  const sectionsRef = React.useRef(null);

  React.useEffect(() => {
    if (stationsRef.current) {
      stationsRef.current.clearLayers().addData(stationsCollection);
    }
  }, [stationsCollection]);

  React.useEffect(() => {
    if (sectionsRef.current) {
      sectionsRef.current.clearLayers().addData(sectionsCollection);
    }
  }, [sectionsCollection]);

  React.useEffect(() => {
    if (stationsCollection.features && stationsRef.current) {
      const layer = stationsRef.current;
      map.flyToBounds(layer.getBounds());
    }
  }, [stationsCollection]);

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.NOM_ESTACIO) {
      layer.bindPopup(feature.properties.NOM_ESTACIO);
    }
  };

  return (
    <>
      {stationsCollection.features && (
        <GeoJSON
          ref={stationsRef}
          data={stationsCollection.features}
          onEachFeature={onEachFeature}
        />
      )}

      {sectionsCollection.features && (
        <GeoJSON ref={sectionsRef} data={sectionsCollection.features} />
      )}
    </>
  );
};
