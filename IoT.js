const mongoose = require('mongoose');
const user = "Rex_T"
const bd = "IoT"
const password = "lcJi9HK1kMemWbb0"

const uri = `mongodb+srv://${user}:${password}@cluster0.wfe5d.mongodb.net/${bd}?retryWrites=true&w=majority`;
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Conexion exitosa'))
.catch(e=> console.log('error de conexion',e))