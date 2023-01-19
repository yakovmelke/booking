const express = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const { verifyToken, verifyUser, verifyAdmin } = require("../utils/verifyToken");
const router = express.Router();

router.get("/",verifyAdmin, getAllUsers);

router.get("/:id",verifyUser, getOneUser);

router.post("/",verifyAdmin, createUser);

router.put("/:id",verifyUser, updateUser);

router.delete("/:id",verifyUser, deleteUser);

module.exports = router;
