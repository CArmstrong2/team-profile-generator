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