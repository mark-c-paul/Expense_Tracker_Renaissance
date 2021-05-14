const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://dbUser:7xZjo3CWo3B0GsEa@expensetracker.lojxz.mongodb.net/expenses?retryWrites=true&w=majority"

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (e) {
        console.log(`Error: ${e.message}`);
        process.exit(1);
    } 
}
module.exports = connectDB;