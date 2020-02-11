module.exports = [
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
    validate: function(nameInput) {
      if (nameInput) {
        return true;
      }

      return false;
    }
  },
  

  
];