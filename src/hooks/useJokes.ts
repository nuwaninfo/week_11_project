import { useState } from "react"
interface IJoke {
  id: number
  type: string
  setup: string
  punchline: string
}

function useJokes() {
  const [savedJokes, setSavedJokes] = useState<IJoke[]>([])

  const addJoke = (joke: IJoke) => {
    setSavedJokes((prevJokes) => [...prevJokes, joke])
    return true
  }
  return { savedJokes, addJoke }
}

export default useJokes
