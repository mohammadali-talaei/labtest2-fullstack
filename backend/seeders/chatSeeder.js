const seedMessages = async () => {
    const mongoose = require('mongoose');
    const Message = require('../src/models/Message'); // Adjust path as necessary

    const chats = [
        { message: "Hello Team", room: '65c4282cd2da7d98014e622b', user: '65c410d7de4ac432d47046dc', created_at: new Date() },
        { message: "Hello to you, too", room: '65c4282cd2da7d98014e622b', user: '65c410d7de4ac432d47046dd', created_at: new Date() },
    ];
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => console.error('MongoDB connection error:', err));
    try {
        await Message.insertMany(chats);
        console.log('All users have been successfully seeded');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
    mongoose.connection.close();
};

exports.seedMessages = seedMessages;
