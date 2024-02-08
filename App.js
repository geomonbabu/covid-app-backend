const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const patientrouter = require("./controllers/PatientRouter")

//aliasname
const patient=express()


//middleware
patient.use(express.json())
patient.use(cors())
mongoose.connect("mongodb+srv://megeomonbabu:geo12345@cluster0.i1dx7ax.mongodb.net/coviddb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})

//routing or api
patient.use("/api/patient",patientrouter)

patient.listen(3001,()=>{
    console.log("server is running")
})