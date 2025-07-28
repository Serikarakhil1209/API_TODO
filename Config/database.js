const mongoose = require("mongoose")

 async function create_data_base(){
    try {
        await mongoose.connect("mongodb://localhost:27017",{
            dbName: "mydb"
        });
        console.log("db is created")
    } catch (error) {
           console.log("db is not  created " , error)
    }
}

module.exports = {create_data_base}