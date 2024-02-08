const express=require("express")
const router=express.Router()
const patientmodel=require("../models/PatientModel")

router.get("/",(req,res)=>{
    res.send("hello")
})
router.post("/addpatient",async(req,res)=>{
    let data = req.body //value read
    let patient = new patientmodel(data)
    let result = await patient.save()
    res.json({
        status:"success"
    })
})
router.post("/patientsearch",async(req,res)=>{
    let data = req.body //value read
    let output = await patientmodel.find(data)
    res.json(
        output
    )
})
router.get("/view",async(req,res)=>{
    let output = await patientmodel.find()
    res.json({
        output
    })
})

module.exports=router