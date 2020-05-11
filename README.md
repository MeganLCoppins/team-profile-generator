 <!-- your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass. -->
# team-profile-generator

## Description

I built a Node CLI that gathers employee information from user input and generates an HTML file displaying summaries for the engineering team created. 

The engineering team consists of a:
* Manager

* Engineer(s)

* Intern(s)

Each team member displays their:
* Name

* Role

* ID

* Role-specific property:
    * Intern: School
    * Engineer: GitHub username
    * Manager: Office number

First the user is prompted for information about the team manager and then for information about the rest of the team. The user is able to enter in however many engineers and interns they would like. 
Once the user is done building the team an HTML file is created that displays the employees information. 

## Table of Contents
* [Usage](#Usage)
* [Demonstration](#Demonstration)
* [Technologies](#Technologies)
* [Developer](#Developer)

## Usage

To run the application the user must have Node.js installed on your machine.

* Clone this repository and download to your machine
* From your terminal install the applications npm packages by running 'npm install'
* To begin the application run 'node app.js' in your terminal

## Demonstration

Example of HTML generated with the command line application.

<img src="images/teamgenerator.png" alt="photo of HTML page">

## Technologies

* Bootstrap
* Javascript
* Node.js
* Jest Testing Package

## Developer

Megan Coppins

https://meganlcoppins.github.io/team-profile-generator/