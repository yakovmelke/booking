const express = require("express");
const {
  getAllHotels,
  getOneHotel,
  createHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotels");
const router = express.Router();

router.get("/", getAllHotels);

router.get("/:id", getOneHotel);

router.post("/", createHotel);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

module.exports = router;
