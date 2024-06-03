// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `![Static Badge](https://img.shields.io/badge/${license}-license-blue)` : "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(data) {

  // Placeholder variables, year for copyright 
  const year = new Date();
  let licenseLink;
  let licenseDesc;

  // Use data.license as a basis of choice and assing licenseDesc with the corresponding description and link
  switch(data.license){

    case `Apache_License_2.0`:
      licenseLink = `https://choosealicense.com/licenses/apache-2.0/`;
      licenseDesc = 
      `
      Apache License
      Version 2.0, January 2004
      http://www.apache.org/licenses/
      
      Copyright ${year.getFullYear} ${data.github}
      
      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      
      http://www.apache.org/licenses/LICENSE-2.0
      
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      `
      break;

    case `GNU_GPLv3`:
      licenseLink = `https://choosealicense.com/licenses/gpl-3.0/`;
      licenseDesc = 
      `
      GNU GENERAL PUBLIC LICENSE
      Version 3, 29 June 2007
      
      Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
      
      Copyright (C) ${year.getFullYear}  ${data.github}
      
      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
      
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
      `;
      break;

    case `MIT`:
      licenseLink = `https://choosealicense.com/licenses/mit/`;
      licenseDesc = 
      `
      MIT License

      Copyright (c) ${year.getFullYear} ${data.github}
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
      `;
      break;

    case `ISC`:
      licenseLink = `https://choosealicense.com/licenses/isc/`;
      licenseDesc = 
      `
      ISC License

      Copyright (c) ${year.getFullYear} ${data.github}
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted, provided that the above
      copyright notice and this permission notice appear in all copies.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      `;
      break;

    case `GNU_GPLv2`:
      licenseLink = `https://choosealicense.com/licenses/gpl-2.0/`;
      licenseDesc = 
      `
      GNU GENERAL PUBLIC LICENSE
      Version 2, June 1991
      
      Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
      51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
      Everyone is permitted to copy and distribute verbatim copies
      of this license document, but changing it is not allowed.
      
      Copyright (C) ${year.getFullYear} ${data.github}
      
      This program is free software; you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation; either version 2 of the License, or
      (at your option) any later version.
      
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
      `
      break;

    default:
      licenseLink = "";
      licenseDesc = "";
  }

  // Returns an empty string if data is empty
  return data ? `${licenseDesc}

  ${licenseLink}
  ` : "";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `${renderLicenseLink(license)}` : "";
}

// TODO: Create a function to generate markdown for README

// The README constructor function that takes in input data then inserts them into appropriate sections
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

    ${renderLicenseSection(data)}

  ## Contributing

    ${data.contributing}
  
  ## Tests

    ${data.tests}
  
  ## Questions

    Have a questions? Reach out to me at https://github.com/${data.github} or ${data.email}
  `;
}

// Export to be used in the index.js file at the root directory
module.exports = generateMarkdown;
