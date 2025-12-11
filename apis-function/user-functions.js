const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const { firstName, email } = req.body;
    const creatUser = await User.insertOne({
      firstName: firstName,
      email: email,
    });
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;
    const createUser = await User.insertMany(details);
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const getDetails = await User.find();
    // console.log("The users details:", getDetails);
    return res.status(200).json({
      success: true,
      data: getDetails,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
exports.updateEmail = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatethings = await User.updateOne(
      { firstName: name },
      { $set: { email: email } }
    );
    return res.status(200).json({
      success: true,
      message: "email is updated",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.getDetails = async (req, res) => {
  try {
    const { id, mainDetails } = req.query;
    const { data } = req.params;
    console.log("the params:", data);

    // console.log("The id details:", id, mainDetails);
    // console.log("=>(The data:)<=", data);
    // console.log("The main details:", mainDetails);
    return res.status(200).json({
      success: true,
      message: "The data got filled",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
exports.userRegister = async (req, res) => {
  try {
    const { email, firstName, secondName, mobileNumber, password } = req.body;

    const findUser = await User.findOne({
      email: email,
      mobileNumber: mobileNumber,
    });
    //console.log("The find user:", findUser);

    if (findUser) {
      return res.status(400).json({
        success: false,
        message: "User is already resigtered",
      });
    }
    await User.create({
      email,
      firstName,
      secondName,
      mobileNumber,
      password,
    });
    return res.status(200).json({
      success: true,
      message: "User is registed successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.getAllUserDetails = async (req, res) => {
  try {
    console.log("HEllo world");

    const { email, mobile } = req.params;
    console.log("The request query:", req.query);

    console.log("The email query:", email);
    console.log("Mobile:", mobile);

    const getDetails = await User.find({ email, mobileNumber: mobile });
    if (!getDetails) {
      return res.status(404).json({
        success: false,
        message: "User not existing",
      });
    }
    return res.status(200).json({
      success: true,
      data: getDetails,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
