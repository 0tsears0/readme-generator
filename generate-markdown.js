const generateMarkdown = profileData => {
  return `
  
  # ${profileData.username}

  ## Info
  ### Email Address: [${profileData.email}](mailto:${profileData.email})

  Phone ${profileData.phone}

  ### Tech
  ${profileData.tech.map(techName => `- ${techName}`).join("\n")}

  ### Avatar
  
  
  `;
};

module.exports = generateMarkdown;
