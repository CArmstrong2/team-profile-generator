const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const Manager = require('./Model/Manager')
const Engineer = require('./Model/Engineer')
const Intern = require('./Model/Intern')

const team = []

const start = () =>{
    const addManager = () => {
        inquirer
        .prompt([
            {
            type:'input',
            name:'mgrName',
            message:`Enter the Manager's name:`
        },
        {
            type:'input',
            name:'mgrID',
            message:`Enter the Manager's ID:`
        },
        {
            type:'input',
            name:'mgrEmail',
            message:`Enter the Manager's email address:`
        },
        {
            type:'input',
            name:'mgrOffice',
            message:`Enter the Manager's office number:`
        }
    ])
    .then((userInput) => {
        const newManager = new Manager(
            userInput.mgrName,
            userInput.mgrID,
            userInput.mgrEmail,
            userInput.mgrOffice
        )
        team.push(newManager)
    })
    }
}

