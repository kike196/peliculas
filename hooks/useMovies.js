import results from '../mocks/with-results.json'
import noResults from '../mocks/no-results.json'

export function useMovies() {
  const movies = results.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
  }))

  return {movies: mappedMovies}
}