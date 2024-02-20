
const express= require("express");
const cors = require("cors");

// import from files
const reportRouter = require('./routes/index.js') 
const mongoDB = require('./database/index.js')


//setting up config.env file so that we can use content of it
require('dotenv').config()

//creates a new instance of an Express application
const app = express();



//connecting server and database, just call this func^
mongoDB.connect();



//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());



//set 'credentials: true' to pass --> headers, cookies, etc to browser/frontend
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))


// route splitting
app.use("/api/data", reportRouter)


// Port variable
const PORT = process.env.PORT || 8000



//function is used to bind and listen to the connections on the specified host and port
app.listen(PORT, (req, res) => {
    console.log(`Server is active on Port ${PORT}`)
})