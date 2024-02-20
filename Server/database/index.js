const mongoose =require("mongoose");

require('dotenv').config()


// database connection
exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log("DB connection error: ",error);
    });
}