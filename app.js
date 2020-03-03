const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];

// console.log(new Manager("Lou", 1, "brent@u.com", 214));
// console.log(new Engineer("Bob", 2, "Bob@2.com", "bobgit"));
// console.log(new Intern("Ted", 3, "Ted@a.com", "UofA"));

(async function init(){
    try {
        const userManager = await inquirer.prompt([...questions.base, ...questions.manager]);
        employees.push(userManager);
        console.log(employees);

        promptUser();
    } catch (err){
        console.log(err);
    }
})()

async function promptUser(){
    try{
        const employeeType = await inquirer.prompt({
            type: "list",
            name: "role",
            message: "What type of employee would you like to add?",
            choices: ["Engineer", "Intern", "Done"]
        });

        if(employeeType.role === "Engineer"){
            const typeEngineer = await inquirer.prompt([...questions.base, ...questions.engineer]);
            employees.push(typeEngineer);

            console.log(employees);
            promptUser();
        }else if (employeeType.role === "Intern"){
            const typeIntern = await inquirer.prompt([...questions.base, ...questions.intern]);
            employees.push(typeIntern);

            console.log(employees);
            promptUser();
        }else{
            const html = render(employees);
            console.log(html);
        }
    } catch (err){
        console.log(err);
    }
};

// const html = render([
//     new Manager();
//     new Engineer();
//     new Intern();
// ])
// fs.writeFile(outputPath, html, ()=>{});

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
