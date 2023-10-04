const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const db = require("./db/index.js")
const routes = require("./routes/index.js")

const app = express()

app.use(
  cors({
    //URL FROM DEPLOY SERVER
    origin: "https://tmdb-v2-frontend.vercel.app",
    //LOCALHOST URL
    //origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))
app.use(express.json())
app.use(morgan("dev"));

app.use("/api", routes)

db.sync({force:false}).then(function () {
  const listener = app.listen(5432, () => {
    console.log("App listening on port " + listener.address().port)
  })
}).catch(console.error);
