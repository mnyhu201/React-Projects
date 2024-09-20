import axios from 'axios'

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/"

const getCountries = () => {
    const request = axios.get(`${baseUrl}/api/all`)
    return request.then((response) => response.data);
}

const getCountryInfo = (country) => {
    const request = axios.get(`${baseUrl}/api/name/${country}`);
    return request.then((response) => response.data);
}

export default { getCountries, getCountryInfo };