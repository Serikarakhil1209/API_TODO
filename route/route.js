const express = require("express")
const router = express.Router()
const {getdata,postdata,putdata,deletedata,getdatabyid} = require('../Controller/Controller.js')

router.get('/getdata',getdata)
router.post('/postdata',postdata)
router.put('/putdata/:id',putdata)
router.delete('/deletedata/:id',deletedata)
router.get('/getdataid/:id',getdatabyid)

module.exports = router