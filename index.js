const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt(questions).then(responseObj => {
