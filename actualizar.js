const mongoose = require ('mongoose')
const tabla = require ('./Esquema/esquema')
const user = "Rex_T"
const bd = "IoT"
const password = "lcJi9HK1kMemWbb0"

const uri = `mongodb+srv://${user}:${password}@cluster0.wfe5d.mongodb.net/${bd}?retryWrites=true&w=majority`;
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Conexion exitosa'))
.catch(e=> console.log('error de conexion',e))

tabla.updateOne({
    _id:'60a01ca652bff806f4d7bf51'
},{
    Porcentaje : 94,
    Presencia: 0
}, ()=>{
    console.log('Dato Actulizado');
    mongoose.disconnect(console.log('descnectado'));
})