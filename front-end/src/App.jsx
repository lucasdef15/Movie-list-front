import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  const movie = {
    title: "Hotel Transylvania",
    url: "",
    release_date: "2022"
  }

  return (
    <>
      <MovieCard movie={movie} />
    </>
  )
}

export default App
