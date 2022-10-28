// 1- importar mongoose
const mongoose = require("mongoose")
// schema es la coleccion de mongo db

// 2- Llamar a la clase schema

const {Schema} = mongoose

// 3- crear el schema de lo que necesite - instanciarlo

const userSchema = new Schema(
    {
        firstName:{type: String, required:true},
        lastName:{type: String, required:true},
        email:{type: String, required:true},
        password:{type: String, required:true},
        isAdmin:{type: Boolean, required:true },
    },// las llaves de la coleccion
    {
        versionKey: false,
        timestamps: true,
    } // que deseamos capturar para que se inserte un dato
)

// 4 - exportar como un modelo
//module.exports = mongoose.model("nombre de la coleccion", el esquema de la coleccion)
module.exports = mongoose.model("user", userSchema)