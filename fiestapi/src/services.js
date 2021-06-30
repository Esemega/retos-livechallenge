const baseUrl = `https://api.tmb.cat/v1/transit/linies`
const urlEnd = `?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`


const getData = (url) =>{
    return fetch(url)
    .then(response => {
        if(response.ok){
            return response.json()
        } else {
            throw Error(response.statusText);
        }
    })
}

const getUrlMetro = () => `${baseUrl}/metro/${urlEnd}`;
const getUrlMetroStations = (route) => `${baseUrl}/metro/${route}/estacions/${urlEnd}`;
const getUrlMetroSections = (route) => `${baseUrl}/metro/${route}/trams/${urlEnd}`;

export const getMetroRoutes = () => getData(getUrlMetro());
export const getRouteStations = (route) => getData(getUrlMetroStations(route));
export const getRouteSections = (route) => getData(getUrlMetroSections(route));