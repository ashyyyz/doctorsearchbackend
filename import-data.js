const mongoose = require('mongoose');
const fs = require('fs');
const doctor = require('./doctorModel');
const dotenv = require('dotenv')
dotenv.config({path :'./.env'});

const uri = process.env.DATABASE;

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }).then((con)=>{
        console.log(con.connections);
        console.log("DB connected");
    }).catch((e)=>{
        console.log(e);
    })

const doctors = JSON.parse(fs.readFileSync(`${__dirname}/doctorData.json`,'utf-8'));


const importData = async () =>{
    try{
        await doctor.create(doctors);
        console.log('Data inserted successfully');
    }catch(err){
        console.log(err);
    }
}

const deleteData = async () =>{
    try{
        await doctor.deleteMany();
        console.log('Data deleted successfully');
    }catch(err){
        console.log(err);
    }
}





console.log(process.argv);

if(process.argv[2] === '--import')
    importData();
else if(process.argv[2] === '--delete')
    deleteData();
