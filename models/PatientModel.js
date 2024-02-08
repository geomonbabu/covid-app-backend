const mongoose=require("mongoose")

const PatientSchema = new mongoose.Schema(
    {
        patientname:String,
        phoneno:String,
        address:String,
        status:String,
        symptoms:String,
    }
)
module.exports=mongoose.model("patient",PatientSchema)