import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"

function App() {
  // const [count, setCount] = useState(0)
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data)
      })
      .catch(console.log("ERROR"))
    // fetch("/api/jokes", { method: "GET" })
    //   .then(
    //     (response) => response.json()
    //     // setJokes(response.data)
    //     // Error : has been blocked by CORS policy
    //   )
    //   .then((jsonifiedResponse) => setJokes(jsonifiedResponse))
    //   .catch((error) => {
    //     console.log(error)
    //   })
  })

  return (
    <>
      <h1>Chai aur Fullstack | Youtube</h1>
      <p>JOKES : {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App

//Bad practice-->
// Step - 1: run build command: npm run build
// Step - 2: take the "dist" folder to backend folder
// Step - 3: use middleware-- > app.use(express.static("dist"))
// Observation: Now your react app will run on backend hosted port: localhost: 3000
// Problem: it only reflects changes that happen in Backend, but when you do any change in the frontend,
//          it will not be reflected, you have to go through step1 to step5 again,
//          to get reflect changes made in the frontend
