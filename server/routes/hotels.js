const express = require("express");
const {
  getAllHotels,
  getOneHotel,
  createHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotels");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

router.get("/", getAllHotels);

router.get("/:id", getOneHotel);

router.post("/",verifyAdmin, createHotel);

router.put("/:id",verifyAdmin, updateHotel);

router.delete("/:id",verifyAdmin, deleteHotel);

module.exports = router;
