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
