function ListOfMovies ({ movies }) {
  return  (
    <ul>
        {
          movies.map(movie => (
            <li className='movie' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.image} alt={movie.title} />
            </li>
          ))
        }
    </ul>
  )
}

function NoMoviesResults () {
  return (
      <p>no se encontró la película</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}