const express = require("express")
const cors = require("cors")
const morgan = require("morgan");
const routes = require("./routes/index.js")

const app = express()

app.use(
  cors({
    //origin: URL FROM DEPLOY SERVER
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))
app.use(express.json())
app.use(morgan("dev"));

app.use("/api", routes)

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("App listening on port " + listener.address().port)
})