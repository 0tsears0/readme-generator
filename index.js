const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generate-markdown");
const questions = require("./questions");

inquirer.prompt(questions).then(responseObj => {
  axios
    .get(`https://api.github.com/users/${responseObj.username}`)

    // destructure data sub object out of axios response
    .then(({ data }) => {
      // make new object of inquirer response data and take OMDB response data and spread it into a property called movieData

   
      const markdownData = { ...responseObj, avatar: data.avatar_url };

      console.log(markdownData)

      // generate markdown to write to file
      const finishedMarkdown = generateMarkdown(markdownData);

      // write generated markdown to file
      fs.writeFile('./profile.md', finishedMarkdown, err => {
        if (err) {
          return console.log(err);
        }
        console.log('success!');
      });
    });
});
