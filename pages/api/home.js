function filterArrayByName(name, array) {
    return array.filter(element => {
        const elementName = element.name.common.toLowerCase();
        return elementName.startsWith(name);
    })
}

async function ApiHome(request, response) {
    const urlBase = "https://restcountries.com/v3.1/";
    const url = request.query.region ? urlBase + `region/${request.query.region}` : urlBase + "all";
    const responseCountries = await fetch(url);
    const arrayCountries = await responseCountries.json(); 

    if (request.query.name) response.json(filterArrayByName(request.query.name, arrayCountries));
    else response.json(arrayCountries);
}

export default ApiHome