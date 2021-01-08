const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

//motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname+"/public"));


app.get('/', (req, res) => {
    res.render("index",{
        titulo:"titulo de forma dinámica index"
    })
})

app.get('/servicio', (req, res) => {
    res.render('servicio',{
        tituloServicios:"Pagina de servicios"
    })
})

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo404:"Página 404",
        descripcion:"este es un error"
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port port!`)
})


