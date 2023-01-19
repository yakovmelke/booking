const userModel = require("../models/Users");

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res) => {
  try {
    const obj = req.body;
    const user = new userModel(obj);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    await userModel.findByIdAndUpdate(id, obj);
    res.status(200).json("updated");
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.status(200).json("deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
