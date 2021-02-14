const express = require('express')
const app = express()

//variables de entormno
require('dotenv').config()

const port = process.env.PORT || 3000;

// conexion a base de datos
const mongoose = require('mongoose');

//estas  variables se encuentran en el archivo .env
//  const usuario = "raularellano"
//  const password = "diIV5HVxr9PQgAl8"
//  const dbName = "veterinaria"

const uri = `mongodb+srv://raularellano:${process.env.PASS}@cluster0.6r8ja.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('conectado a mongodb')) 
    .catch(e => console.log('error de conexión', e))


//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname+"/public"));

//router web
app.use('/', require('./router/rutasweb.js'))
app.use('/mascotas', require('./router/mascotas.js'))

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo404:"Página 404",
        descripcion:"este es un error"
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port port!`)
})


