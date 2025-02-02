import { Button } from "@mui/material"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"

import CardContent from "@mui/material/CardContent"

import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"

interface IJoke {
  id: number
  type: string
  setup: string
  punchline: string
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
)

function FrontPage() {
  const [triggerFetch, setTriggerFetch] = useState(false)
  const [counter, setCounter] = useState(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [joke, setJoke] = useState<IJoke | null>(null)

  useEffect(() => {
    if (counter === 1) return
    const abortCtrl: AbortController = new AbortController()
    const getJokes = async (): Promise<void> => {
      const response: Response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
        { signal: abortCtrl.signal }
      )
      const data: IJoke = await response.json()
      setJoke(data)
      setLoading(false)
      console.log("ddddd")
    }
    getJokes()
  }, [triggerFetch, counter])

  const runTrigger = () => {
    setLoading(true)
    if (triggerFetch === true) {
      setTriggerFetch(false)
    } else {
      setTriggerFetch(true)
    }
    setCounter((counter) => counter + 1)
  }

  return (
    <>
      <div>
        <Button variant="contained" onClick={runTrigger}>
          Get jokes
        </Button>
        {loading && <p>Loading a joke...</p>}
      </div>

      {joke && !loading && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {joke?.setup}
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default FrontPage
