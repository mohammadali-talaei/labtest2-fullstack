const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    creator: {
        type: mongoose.Schema.Types.ObjectId, // References User model
        required: true,
        ref: 'User' // Make sure this matches the name you used in mongoose.model for your User model
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
