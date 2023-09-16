const countriesAPI = 'https://restcountries.com/v2/all?fields=name,capital,flag,population,region';

export const fetchCountries = async () => {

    try {
        const request = await fetch(countriesAPI, {
            crossDomain: true,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });
        const countries = await request.json();
        return countries;
    } catch (error) {
        console.error(error)
        window.alert('Failed to load data...sorry:(')
    }
};


    

