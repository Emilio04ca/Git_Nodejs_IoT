const mongoose = require ('mongoose')
const tabla = require ('./Esquema/esquema')
const user = "Rex_T"
const bd = "IoT"
const password = "lcJi9HK1kMemWbb0"

const uri = `mongodb+srv://${user}:${password}@cluster0.wfe5d.mongodb.net/${bd}?retryWrites=true&w=majority`;
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Conexion exitosa'))
.catch(e=> console.log('error de conexion',e))

new tabla({
    Nombre_Disp: 'CLOMN',
    Porcentaje:50,
    Presencia: 0,
    exp: Date().now
})
.save().then(()=>{console.log('Regitro Insertado'); mongoose.disconnect();}).catch((e)=>console.log('Error al insertar',e))

