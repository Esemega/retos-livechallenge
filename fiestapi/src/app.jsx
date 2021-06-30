import React from "react";
import "./app.css";
import { getMetroRoutes, getRouteStations, getRouteSections } from "./services";
import { MyMap } from "./map";

const useDidMountEffect = (func, deps) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export const App = () => {
  const [metroRoutesCollection, setMetroRoutesCollection] = React.useState([]);
  const [selectedMetroRoute, setSelectedMetroRoute] = React.useState("");
  const [metroStations, setMetroStations] = React.useState([]);
  const [metroSections, setMetroSections] = React.useState([]);

  React.useEffect(() => {
    getMetroRoutes().then((routes) => setMetroRoutesCollection(routes));
  }, []);

  useDidMountEffect(() => {
    getRouteStations(selectedMetroRoute).then((route) =>
      setMetroStations(route)
    );

    getRouteSections(selectedMetroRoute).then((sections) =>
      setMetroSections(sections)
    );
  }, [selectedMetroRoute]);

  const handleSelection = (e) => {
    setSelectedMetroRoute(e.target.value);
  };

  return (
    <>
      <header>
        <h1>Bienvenidos a la FestAPI!</h1>
      </header>

      <main>
        <div className="inputData">
          <h2>Línea de metro</h2>
          <select id="route" onChange={handleSelection}>
            <option>Elige una línea</option>
            {metroRoutesCollection.features &&
              metroRoutesCollection.features.map((route) => {
                return (
                  <option key={route.id} value={route.properties.CODI_LINIA}>
                    {route.properties.NOM_LINIA}
                  </option>
                );
              })}
          </select>

          {selectedMetroRoute && metroStations.features && (
            <>
              <h2>Estaciones</h2>
              <ol>
                {metroStations.features.map((station) => {
                  return (
                    <li key={station.id}>{station.properties.NOM_ESTACIO}</li>
                  );
                })}
              </ol>
            </>
          )}
        </div>

        <MyMap
          stationsCollection={metroStations}
          sectionsCollection={metroSections}
        />
      </main>
    </>
  );
};
