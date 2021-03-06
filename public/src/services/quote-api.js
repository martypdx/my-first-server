
const URL = 'https://futuramaapi.herokuapp.com/api/quotes';

export function getQuotes(options) {  

    const page = options.page || 1;
    const search = options.search;

    const url = `${URL}?page=${page || 1}&search=${search || ''}`;

    return fetch(url)
        .then(response => response.json())
        // need to fake getting a total page count,
        // pokedex api already gives this back
        .then(results => {
            return {
                count: 100 * page,
                results: results
            };
        });
}
