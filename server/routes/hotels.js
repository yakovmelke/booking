const express =require("express")
const router =express.Router()

const HotelSchema = require("../models/Hotels")

router.get("/",async (req,res)=>{
   try {
    const hotels = await HotelSchema.find()
     res.status(200).json(hotels)
   } catch (error) {
    res.status(500).json(error)
   }
}
)
router.get("/:id",async (req,res)=>{
   try {
    const {id} = req.params
    const hotel = await HotelSchema.findById(id)
     res.status(200).json(hotel)
   } catch (error) {
    res.status(500).json(error)
   }
})

router.post("/",async (req,res)=>{
   try {
    const obj = req.body
     const hotel = new HotelSchema(obj) 
     await hotel.save()
     res.status(200).json(hotel)
   } catch (error) {
    res.status(500).json(error)
   }
}
)
router.put("/:id",async (req,res)=>{
   try {
    const {id} = req.params
    const obj = req.body
     await HotelSchema.findByIdAndUpdate(id,obj)
     res.status(200).json("updated")
   } catch (error) {
    res.status(500).json(error)
   }
})
router.delete("/:id",async (req,res)=>{
   try {
    const {id} = req.params
     await HotelSchema.findByIdAndDelete(id)
     res.status(200).json("deleted")
   } catch (error) {
    res.status(500).json(error)
   }
})


module.exports = router