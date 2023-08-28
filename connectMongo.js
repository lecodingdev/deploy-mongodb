const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tanadicoding:Always06@mymongodb.edzslzi.mongodb.net/node_mongodb')
        console.log("Connect successfull");
    } catch (error) {
        console.log("Connect failed");
    }
}

module.exports = connectDB