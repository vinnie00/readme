function generateMarkdown(data) {
  return `
# ${data.title}
## description 
  
  ${data.description}

## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)

## installation
${data.installation}

## usage
${data.usage}

## license
${data.license}

## contributing
${data.contributing}

## tests
${data.tests}


`;
}

module.exports = generateMarkdown;
