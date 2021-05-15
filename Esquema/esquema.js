var mongoose = require('mongoose')
var esquema =  mongoose.Schema 

var Squema_Tabla = new esquema({
    Nombre_Disp : String,
    Porcentaje : Number,
    Presencia: Number ,
    exp: {
        type: Date, 
        default: Date.now
    }

})
var Squema_Tabla = mongoose.model('tabla', Squema_Tabla)
module.exports = Squema_Tabla