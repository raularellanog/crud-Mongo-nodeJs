const express=require('express')
const router=express.Router();

router.get('/', (req, res) => {
    res.render("index",{
        titulo:"titulo de forma dinámica index"
    })
})

router.get('/servicio', (req, res) => {
    res.render('servicio',{
        tituloServicios:"Pagina de servicios"
    })
})

module.exports=router;