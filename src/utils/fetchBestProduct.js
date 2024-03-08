export const bestProductOptions ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '17ea8cec81mshe8cd2ae686773b3p14fabdjsn2b53945427a9',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
}

export const fetchBestProductsData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}