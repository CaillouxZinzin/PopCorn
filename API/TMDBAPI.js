const API_TOKEN = "c8cbc871ef0c120721e63c6930d1c77e"

export function getFilmsFromApiWithSearchedText(text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi(name) {
  return "http://image.tmdb.org/t/p/w300" + name
}

export function getFilmDetailFromApi(id) {
  const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr'
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
