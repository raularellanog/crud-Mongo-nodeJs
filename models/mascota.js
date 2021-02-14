const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const mascotaSquema=new Schema({
    nombre:String,
    descripcion:String
})

// creacion de modelos
const Mascota=mongoose.model('Mascota',mascotaSquema);

module.exports=Mascota;