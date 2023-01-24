const express =require("express");
const { getAllRooms, getOneRoom, createRoom, updateRoom, deleteRoom } = require("../controllers/rooms");
const { verifyAdmin } = require("../utils/verifyToken");

const router =express.Router()


router.get("/", getAllRooms);

router.get("/:id", getOneRoom);

router.post("/:hotelId",verifyAdmin, createRoom);

router.put("/:id",verifyAdmin, updateRoom);

router.delete("/:id/:hotelId",verifyAdmin, deleteRoom);

module.exports = router;


module.exports = router