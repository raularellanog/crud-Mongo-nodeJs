const express=require('express')
const router=express.Router();

const Mascota=require('../models/mascota')

router.get('/',async (req, res) => {
    try{
        const arrayMascotasdb=await Mascota.find();
        
        res.render("mascotas",{arraymascotas: arrayMascotasdb})
    }
    catch(error){
        console.log(error)
    }
    // res.render("mascotas",{arraymascotas: [
    //     {id:"jdhfh",nombre:"rex",descripcion:"rex descripcion"},
    //     {id:"jdsdfh",nombre:"Rag",descripcion:"Rag descripcion"},
    //     {id:"jdhsdf",nombre:"QW",descripcion:"qw descripcion"}
    // ]})
})

router.get('/servicio', (req, res) => {
    res.render('servicio',{
        tituloServicios:"Pagina de servicios"
    })
})

module.exports=router;