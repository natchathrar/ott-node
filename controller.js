// controller.js
const OTTDetail = require('./model');
const axios = require('axios');

exports.getRapidApidetails = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',

        headers: {
            'X-RapidAPI-Key': '92856ad465mshdf45ccef91486bap1ccf0fjsn5341a376b04f',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
// Create
exports.createOTTDetail = async (req, res) => {
    try {
        const newOTTDetail = new OTTDetail(req.body);
        const savedOTTDetail = await newOTTDetail.save();
        res.json({ message: 'Create Successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read
exports.getAllOTTDetails = async (req, res) => {
    try {
        const ottdetails = await OTTDetail.find();
        res.json({ ottdetails, message: 'Get all successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOTTDetailById = async (req, res) => {
    try {
        const ottdetail = await OTTDetail.findById(req.params.id);
        res.json(ottdetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update
exports.updateOTTDetail = async (req, res) => {
    try {
        const updatedOTTDetail = await OTTDetail.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedOTTDetail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete
exports.deleteOTTDetail = async (req, res) => {
    try {
        const deletedOTTDetail = await OTTDetail.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
