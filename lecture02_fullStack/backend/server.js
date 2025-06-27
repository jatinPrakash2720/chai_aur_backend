import dotenv from "dotenv"
dotenv.config()
// require("dotenv").config()
import express from "express"
const app = express()

app.use(express.static("dist"))

// app.get("/", (req, res) => {
//   res.send("Server is ready")
// })

// generate 5 jokes, with title, and id, and content
app.get("/api/jokes", (req, res) => {
  // /api like standization
  const jokes = [
    {
      id: 1,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 2,
      title: "I told my wife she was drawing her eyebrows too high.",
      content: "She looked surprised.",
    },
    {
      id: 3,
      title: "Why don’t skeletons fight each other?",
      content: "They don’t have the guts.",
    },
    {
      id: 4,
      title: "What do you call cheese that isn't yours?",
      content: "Nacho cheese.",
    },
    {
      id: 5,
      title: "Why did the bicycle fall over?",
      content: "Because it was two-tired!",
    },
  ]
  res.json(jokes)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server started at ${port}`)
})
