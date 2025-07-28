const mongoose = require("mongoose")

url = "mongodb+srv://serikarakhil5:yOvAwausiS7FXLyp@newtodo.r1k3nrx.mongodb.net/"
// url ="mongodb://localhost:27017"

 async function create_data_base(){
    try {
        await mongoose.connect(url,{
            dbName: "mydb"
        });
        console.log("db is created")
    } catch (error) {
           console.log("db is not  created " , error)
    }
}

module.exports = {create_data_base}