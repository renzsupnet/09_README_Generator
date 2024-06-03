// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `![Static Badge](https://img.shields.io/badge/${license}-license-blue)` : "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch(license){

    case `Apache_License_2.0`:
      licenseLink = `https://choosealicense.com/licenses/apache-2.0/`;
      break;

    case `GNU_GPLv3`:
      licenseLink = `https://choosealicense.com/licenses/gpl-3.0/`;
      break;

    case `MIT`:
      licenseLink = `https://choosealicense.com/licenses/mit/`;
      break;

    case `ISC`:
      licenseLink = `https://choosealicense.com/licenses/isc/`;
      break;

    case `GNU_GPLv2`:
      licenseLink = `https://choosealicense.com/licenses/gpl-2.0/`;
      break;

    default:
      licenseLink = ""
  }
  return license ? `${licenseLink}` : "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `${renderLicenseLink(license)}` : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

    ${data.description}

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

    ${data.installation}

  ## Usage

    ${data.usage}
  
  ## License 
  ### Badge 
  ${renderLicenseBadge(data.license)}

    ${renderLicenseSection(data.license)}

  ## Contributing

    ${data.contributing}
  
  ## Tests

    ${data.tests}
  
  ## Questions

    Have a questions? Reach out to me at https://github.com/${data.github} or ${data.email}
  `;
}

module.exports = generateMarkdown;
