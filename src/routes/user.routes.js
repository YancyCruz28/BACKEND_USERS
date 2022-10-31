const express = require("express")
const { model } = require("mongoose")

//enrutador

const router = express.Router()

// importar modelo

const User = require("../models/user.models")

//router.get("ruta", () => {})
 router.get("/get-users", (req, res) => {
    res.status(200).json({data: []})
}) 

// crear producto
router.post("/create-user", async (req, res) =>{
    // variable para encotrar el email en la base de datos
    let {email} = req.body
    // let email = req.body.email
    // se usa para que el email quede escrito en minuscula 
    email = email.toLowerCase()
    req.body.email = email

    // Obtener los ususrios que tienen ese email
    let userExists = await User.find({email: email})
    console.log(userExists)

    // Validar si el email existe
    if (userExists.length !== 0){
        return res.status(400).json({msg: "El ususario ya existe"})
    }
    
    // funcion para que la consola imprima lo que se coloca en el body de insomnia
    const newUser = new User(req.body)
    await newUser.save()
    console.log(newUser)
    return res.status(201).json({msg:"Usuario guardado"})
})

// Listar productos
router.get("/get-user", async (req, res)=>{
    const users = await User.find(/*query - consulta - filtros */ )
    return res.status(200).json({data: users})
})

// Eliminar un producto
router.delete("/delete-user", async (req, res)=>{
    await User.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg:"Usuario eliminado", id: req.query.id})
})

// actualizar un producto

router.put("/update-user", async(req, res) =>{
    await User.findByIdAndUpdate(req.query.id, {$set: req.body})
    return res.status(200).json({msg: "Usuario actualizado"})
})
//exportar rutas

module.exports = router
