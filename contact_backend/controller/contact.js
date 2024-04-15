const Contact = require("../model/contact.js");

const contactController = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const data = new Contact({ name, email, phone, message });
    await data.save();
    res.status(201).json(data); // Changed send to json for consistency
  } catch (error) {
    console.error(error); // Added for debugging
    res
      .status(400)
      .json({ message: "Error saving contact", error: error.message });
  }
};

const getController = async (req, res) => {
  try {
    const data = await Contact.find({});
    res.status(200).json(data); // Changed send to json for consistency
  } catch (error) {
    console.error(error); // Added for debugging
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: error.message });
  }
};

module.exports = { contactController, getController };
