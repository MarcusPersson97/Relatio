const mysql = require('mysql2/promise');
const db = require('../database');



async function getMenu(menu, userId){

    const connection = await db.Connect();

    //`SELECT * FROM railway.${menu} JOIN ON railway.Users WHERE railway.${menu}.${userId} = railway.Users.userId`
    const [entities] = await connection.query(`SELECT * FROM railway.${menu} WHERE userId = ?`, [userId]);

    return entities;
}


async function addContact(info){

    const connection = await db.Connect();
    const [result] = await connection.query(
        'INSERT INTO railway.Contacts (First_Name, Last_Name, Email, Company, Phone_Number, Job_Title, Category, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ',
        [info.firstName, info.lastName, info.email, info.company, info.phoneNumber, info.jobTitle, info.category, info.userId]
    );

    return result[0];
}

async function addCompany(info){

    const connection = await db.Connect();
    const [result] = await connection.query(
        'INSERT INTO railway.Companies (Name, Org_Number, Phone, Email, Employee_Amount, Contact_Person, userId) VALUES (?, ?, ?, ?, ?, ?, ?) ',
        [info.name, info.orgNumber, info.phone, info.email, ParseInt(info.employeeAmount), info.contactPerson, info.userId]
    );

    return result[0];
}

async function deleteContact(){
    console.log('not implemented')
}

async function deleteCompany(){
    console.log('not implemented')
}

module.exports = {getMenu, addContact, addCompany, deleteContact, deleteCompany};