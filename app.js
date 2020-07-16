const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = require("./lib/questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

// empty array to push user input
const employees = [];

// prompt user input to create new manager and push into employees array
(async function init() {
  try {
    const userManager = await inquirer.prompt([
      ...questions.base,
      ...questions.manager,
    ]);
    const manager = new Manager(
      userManager.name,
      userManager.id,
      userManager.email,
      userManager.officeNumber
    );
    employees.push(manager);

    promptUser();
  } catch (err) {
    console.log(err);
  }
})();

// prompt user Input for which employee type to create
async function promptUser() {
  try {
    const employeeType = await inquirer.prompt({
      type: "list",
      name: "role",
      message: "What type of employee would you like to add?",
      choices: ["Engineer", "Intern", "Done"],
    });
    // if role chosen was engineer prompt user input to create engineer and push into employees array
    if (employeeType.role === "Engineer") {
      const typeEngineer = await inquirer.prompt([
        ...questions.base,
        ...questions.engineer,
      ]);
      const engineer = new Engineer(
        typeEngineer.name,
        typeEngineer.id,
        typeEngineer.email,
        typeEngineer.github
      );
      employees.push(engineer);

      promptUser();
      // if role chosen was intern prompt user input to create intern and push into employees array
    } else if (employeeType.role === "Intern") {
      const typeIntern = await inquirer.prompt([
        ...questions.base,
        ...questions.intern,
      ]);
      const intern = new Intern(
        typeIntern.name,
        typeIntern.id,
        typeIntern.email,
        typeIntern.school
      );
      employees.push(intern);

      promptUser();
      // if done was selected render employees and write html file
    } else {
      const html = render(employees);

      fs.writeFile(outputPath, html, () => {});
    }
  } catch (err) {
    console.log(err);
  }
}
