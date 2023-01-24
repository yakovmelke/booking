const hotelModel = require("../models/Hotels");

const getAllHotels = async (req, res,next) => {
  try {
    const hotels = await hotelModel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

const getOneHotel = async (req, res,next) => {
  try {
    const { id } = req.params;
    const hotel = await hotelModel.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

const createHotel = async (req, res,next) => {
  try {
    const obj = req.body;
    const hotel = new hotelModel(obj);
    await hotel.save();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

const updateHotel = async (req, res,next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    await hotelModel.findByIdAndUpdate(id, obj);
    res.status(200).json("updated");
  } catch (error) {
    next(error);
  }
};

const deleteHotel = async (req, res,next) => {
  try {
    const { id } = req.params;
    await hotelModel.findByIdAndDelete(id);
    res.status(200).json("deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllHotels,
  getOneHotel,
  createHotel,
  updateHotel,
  deleteHotel,
};
