
const mongoose = require('./db');

const ottdetailSchema = new mongoose.Schema({
    title: String,
    year: Number,
    description: String,
    language: String,
    platform: String,
}, {
    versionKey: false,
}
);

const OTTDetail = mongoose.model('posts', ottdetailSchema);

module.exports = OTTDetail;
