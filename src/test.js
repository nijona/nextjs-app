const fs = require('fs');

function createJsonFile() {
  // Define the data to be written to the JSON file
  const jsonData = {
    hello: 'world'
  };

  // Convert the JavaScript object to a JSON string
  const jsonString = JSON.stringify(jsonData, null, 2);

  // Specify the file name and path
  const fileName = 'output.json';

  // Write the JSON string to the file
  fs.writeFileSync(fileName, jsonString);

  console.log(`JSON file "${fileName}" created successfully.`);
}

// Call the function to create the JSON file
createJsonFile();
