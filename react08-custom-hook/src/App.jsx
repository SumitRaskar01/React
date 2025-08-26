import useJoke from './hooks/useJoke'

function App() {
  const {joke, success, error, loading, getJoke} = useJoke()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!success) return <p>Failed to fetch joke</p>

  function handleClick(){
    getJoke()
  }

  return (
    <div> 
      <h1>Random Joke 1</h1>
      <p>{joke}</p>
      <button onClick={handleClick}>Get Joke</button>
    </div>
  )
}

export default App
