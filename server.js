const express = require('express');
const app = express();
require('dotenv').config({path:'./.env'});
const mongoose = require('mongoose');
const doctorRouter = require('./doctorRouter');


const uri = process.env.DATABASE;

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }).then((con)=>{
        // console.log(con.connections);
        console.log("DB connected");
    }).catch((e)=>{
        console.log(e);
    })

app.get('/', (req, res) => {
    res.send('Hey, I am the home Page!');
})

app.use('/api/doctors',doctorRouter);

// app.get('/doctors', (req, res) => {
//     res.status(200).json({
//         status:"success"
//     })
// })

const server = app.listen(process.env.PORT, () => {
    console.log(`App is listening now at ${process.env.PORT}`);
})


process.on('unhandledRejection', err=>{
    console.log(err.name, err.message);
    console.log('UnHandled Rejection, Shutting Down....');
    server.close(() => {
        process.exit(1);
    })
})