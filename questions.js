module.exports = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
    validate: function(nameInput) {
      if (nameInput) {
        return true;
      }

      return false;
    }
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: function(emailInput) {
      return /^.+@.+\..+$/gi.test(emailInput) ? true : false;
    }
  },
  {
    type: "input",
    message: "What is your phone number?",
    name: "phone",
    default: "555.555.5555"
  },
  {
    type: "checkbox",
    message: "What technologies do you know?",
    name: "tech",
    choices: [
      "HTML",
      "CSS",
      "JS",
      "NodeJS",
      "Bootstrap",
      "jQuery",
      "SQL",
      "Mongo",
      "Express",
      "React"
    ]
  }
];
