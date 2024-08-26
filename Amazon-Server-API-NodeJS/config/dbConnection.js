// for connecting to our database

const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose
        .connect(
            process.env.MONGODB_URI,
        )
        .then(() => {
            console.log("connected to Amazon_Data_Base successfully");
        })
        .catch((err) => {
            console.log(err, "could not connect to Amazon db");
        });
};

module.exports = { dbConnect };
