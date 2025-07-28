const { user_model } = require("../Model/database_logic.js");

const getdata = async (req, res) => {
    try {
        const data = await user_model.find();
        res.status(200).send(data);
    } catch (error) {
        console.log("Error at getdata:", error);
        res.status(500).send("Error retrieving data");
    }
};

const postdata = async (req, res) => {
    try {
        const { title, subject } = req.body;

        const user_data = new user_model({
            title:title,
            subject:subject
        });

        const user = await user_data.save();
        res.status(201).send(user);
    } catch (error) {
        console.log("Error at postdata:", error);
        res.status(500).send("Error saving data");
    }
};

const deletedata = async(req, res) => {
    const   id = req.params.id
       try {
        await user_model.findByIdAndDelete(id)
              res.send(`Document with id ${id} is deleted`);

       } catch (error) {
         console.log("error to delete the data" , error)
       }
};

const putdata = async (req, res) => {
    const id = req.params.id
 try {
   
    await user_model.findByIdAndUpdate(id , req.body ,{
        new:true
    })
    res.send("updated")
 } catch (error) {
    console.log("failed to update " , error)
 }
};

const getdatabyid = async(req, res) => {
  try {
      const id = req.params.id
   const data = await user_model.findById(id)
   res.send(`data is found ${data}`)
  } catch (error) {
    console.log("error to find the data ")
  }
};

module.exports = {
    getdata,
    postdata,
    deletedata,
    putdata,
    getdatabyid
};
