const express = require ("express")
const cors = require ("cors")

const app = express()
const port= 5000

// middelwares
require("./database")
app.use(cors())
// para que acepte la petición en .json que se escribe en el body de insomnia
app.use(express.json())

//Rutas
app.get("/api", (req, res) => {
    res.status(200).json({msg: "User API v1.0.0"})

    
})
///products /get / post / delete /put
///user /login / signup

// app.use(/activador de rutas, importacion de las rutas que se pueden usar con esta ruta)
app.use("/user", require("./routes/user.routes"))
app.listen(port, () => {console.log("Api corriendo en el pueto", port)})
