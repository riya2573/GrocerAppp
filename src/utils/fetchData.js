export const groceryOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43fae579e1msh62915c78e72c370p1d3ec1jsn460e1e46f508',
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    }
  };
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}