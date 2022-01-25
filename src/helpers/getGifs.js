export const getGifs = async category => {
  const API_KEY = 'pAMT8XfHx5gBC4C9LroEUPW03mlYShpe';
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${API_KEY}`;
  const response = await fetch(URL);
  const { data } = await response.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    };
  });
  return gifs;
};
