import { useState, useEffect, useRef } from 'react'
import './App.css'
import { useMovies } from '../hooks/useMovies.js'
import { Movies } from '../components/Movies.jsx'

//const API_KEY = '4287ad07'

//const API = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`


function App() {

  const { movies: mappedMovies} = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    // const field = new window.FormData(event.target)
    // const query = field.get('query')
    // console.log(query)
    const field = Object.fromEntries(new window.FormData(event.target))
    console.log(field)
  }

  return (
    <div  className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, Star Wars, The Matrix...'
          />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

export default App
