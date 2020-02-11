const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');

const generateMarkdown = require('./lib/generate-markdown');
const questions = require('./lib/questions');

inquirer.prompt(questions).then(responseObj => {
