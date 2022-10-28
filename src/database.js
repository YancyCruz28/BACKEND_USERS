const mongoose = require("mongoose")

const dbName = "Users"
const uri = `mongodb+srv://Yancy-Cruz:Yancy123@myfirstcluster.ggw0awl.mongodb.net/${dbName}?retryWrites=true&w=majority`

// conexion con mongo
// La conexion con mongo recibe una promesa con .then 
mongoose.connect(uri)
    .then((db) => console.log("Conexion a base exitosa"))
    .catch((err)=> console.log(err))
// Exportar Mongo
module.exports = mongoose