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

    const addEngineer = () => {
        inquirer
        .prompt([
            {
            type:'input',
            name:'engName',
            message:`Enter the Engineer's name:`
        },
        {
            type:'input',
            name:'engID',
            message:`Enter the Engineer's ID:`
        },
        {
            type:'input',
            name:'engEmail',
            message:`Enter the Engineer's email address:`
        },
        {
            type:'input',
            name:'engOffice',
            message:`Enter the Engineer's office number:`
        }
    ])
    .then((userInput) => {
        const newEngineer = new Engineer(
            userInput.engName,
            userInput.engID,
            userInput.engEmail,
            userInput.engOffice
        )
        team.push(newEngineer)
    })
    }

    const addIntern = () => {
        inquirer
        .prompt([
            {
            type:'input',
            name:'internName',
            message:`Enter the Intern's name:`
        },
        {
            type:'input',
            name:'internID',
            message:`Enter the Intern's ID:`
        },
        {
            type:'input',
            name:'internEmail',
            message:`Enter the Intern's email address:`
        },
        {
            type:'input',
            name:'internOffice',
            message:`Enter the Intern's office number:`
        }
    ])
    .then((userInput) => {
        const newIntern = new Intern(
            userInput.internName,
            userInput.internID,
            userInput.internEmail,
            userInput.internOffice
        )
        team.push(newIntern)
    })
    }
}

