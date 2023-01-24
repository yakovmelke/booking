const Hotels = require("../models/Hotels");
const roomModel = require("../models/Rooms");

const getAllRooms = async (req, res,next) => {
  try {
    const rooms = await roomModel.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

const getOneRoom = async (req, res,next) => {
  try {
    const { id } = req.params;
    const room = await roomModel.findById(id);
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

const createRoom = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const newRoom = new roomModel(req.body);
    const savedRoom = await newRoom.save();
    await Hotels.findByIdAndUpdate(hotelId, {
      $push: { rooms: savedRoom._id },
    });
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

const updateRoom = async (req, res,next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    await roomModel.findByIdAndUpdate(id, obj);
    res.status(200).json("updated");
  } catch (error) {
    next(error);
  }
};

const deleteRoom = async (req, res,next) => {
  try {
    const { id, hotelId } = req.params;
    await roomModel.findByIdAndDelete(id);
    await Hotels.findByIdAndUpdate(hotelId, {
      $pull: { rooms: id },
    });
    res.status(200).json("deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllRooms,
  getOneRoom,
  createRoom,
  updateRoom,
  deleteRoom,
};
