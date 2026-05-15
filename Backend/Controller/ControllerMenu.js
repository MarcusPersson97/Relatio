const entityModel = require('../Model/ModelMenu')


// returns all menu entities ( contacts, comapnies,)
async function getMenu(req, res){

    try {

        const entities = await entityModel.getEntities();

        return res.status(200).json({message: 'successfully retrieved all entities', entities });
        
    } catch(error){
        console.error(error);
        res.status(500).json({message: 'could not retrieve menu entities', error: error.message})
    }
   
} 

async function createEntity(req, res){


    // valid name .lnegth && !null -> 400
    // check if not conflöit existing -> 409
    // valid -> 201

    

}

async function deleteEntity(req, res){
    // valid name .lnegth && !null -> 400
    // not exisitng -> 404
    // 200

}

module.exports = {getMenu, createEntity, deleteEntity};