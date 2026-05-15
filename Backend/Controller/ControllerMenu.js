const entityModel = require('../Model/ModelMenu')

const currentMenus = ['Contacts', 'Companies', 'Calendar']

// returns all menu entities ( contacts, comapnies,)
async function getMenu(req, res){

    try {


        const menuChosen = req.query.menu;//.params.menu;
        
        let userId = await req.user;
        userId = userId.userId; 


        if (!verifyMenu(menuChosen))
            return res.status(400).json({message: `Invalid menu chosen. Please choose one of:  ${currentMenus.join()}`});

        const content = await entityModel.getMenu(menuChosen, userId);

        return res.status(200).json({message: 'Successfully retrieved all entities', content });
        
    } catch(error){
        console.error(error);
        res.status(500).json({message: 'Could not retrieve menu entities', error: error.message})
    }
   
} 

// avoid sql injections
function verifyMenu(menu){

    if (!menu)
        return false;

    for (const m of currentMenus){
        if (m.toLowerCase() === menu.toLowerCase())
            return true;
    }

    return false;
}

async function createEntityRow(req, res){

    
    const menuChosen = req.query.menu;
    const data = req.body;

    data.userId = await req.user;
    data.userId = data.userId.userId;


    
    if (!verifyMenu(menuChosen))
        return res.status(400).json({message: `Invalid menu chosen. Please choose one of:  ${currentMenus.join()}`});

    let result;
    try {
        

        if (menuChosen.toUpperCase() === 'CONTACTS'){
            
            if (!data.firstName || !data.lastName || !data.email || !data.company || !data.phoneNumber || !data.jobTitle || !data.category || !data.userId)
                return res.status(400).json({message: `Please enter 'firstName', 'lastName', 'email', 'company', 'phoneNumber', 'jobTitle', 'category' as part of request body`});
            

            result = await entityModel.addContact(data);

        } else if (menuChosen.toUpperCase() === 'COMPANIES'){
    
            if (!data.name || !data.orgNumber || !data.phone || !data.email || !data.employeeAmount || !data.contactPerson, !data.userId)
                return res.status(400).json({message: `Please enter 'name', 'orgNumber', 'phone', 'email', 'employeeAmount', 'contactPerson' as part of request body`});
        
            if (isNaN(data.employeeAmount))
                return res.status(400).json({message: 'Please enter a number as employee amount'});

            result = await entityModel.addCompany(data);

        } else if (menuChosen.toUpperCase() === 'CALENDAR'){
            console.log(`not implemented`)

        }
    } catch(error){
        return res.status(500).json({message: 'error creating entity row', error: error.message});
    }
 

    // valid name .lnegth && !null -> 400
    // check if not conflöit existing -> 409
    // valid -> 201

    res.status(201).json({message: `successfully created an entry in ${menuChosen}.`,result });

}

async function deleteEntityRow(req, res){
    console.log('not implemented')
    // valid name .lnegth && !null -> 400
    // not exisitng -> 404
    // 200

}

module.exports = {getMenu, createEntity: createEntityRow, deleteEntity: deleteEntityRow};


    /*START OF DEBUG */
/*
    let debug_string = '';
    for (const [key, val] of Object.entries(data)){
        debug_string += `${key} : ${val}\n`;
    }


    console.log(`data.userId: ${debug_string}`);
    */
    /*END OF DEBUG */