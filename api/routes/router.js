const express = require("express"); 
const router = express.Router();

router.use(express.json()); 

router
    .route('/clothing')
    .get(async (req, res) =>{
        let cloth ={shirt:'hello', color:'black', brand:'bruh moment'}; 
        res.send(cloth).json
    })
module.exports=router