const express = require('express')
const router = express.Router();
const entityController = require('../Controller/ControllerMenu')
const authMiddleware = require('../Middleware/authMiddleware');


//GET, example below

/*

put this is req.query

{
    "menu":"Contacts"
}
    
*/
router.get('/', authMiddleware.authMiddleware, entityController.getMenu);

//POST, example below
/* 

    req.query:


    {
        "menu": "Contacts"
    }

    req.body:


    {
            "id": 3,
            "First_Name": "svenelina",
            "Last_Name": "svensson",
            "Email": "svenelina@svensson.se",
            "Company": "Svenelina co",
            "Phone_Number": "0703958239",
            "Job_Title": "Bänkvärmare",
            "Category": "Client",
            "userId": 16 <-- automatically retrieved from jsonwebtoken
        
        },
       
    */
router.post('/', authMiddleware.authMiddleware, entityController.createEntity);

//not implemented
router.delete('/', authMiddleware.authMiddleware, entityController.deleteEntity);

module.exports = router;
