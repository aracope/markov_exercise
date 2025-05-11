/** Command-line tool to generate Markov text. */

const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov");

// Read command line arguments
let [method, path] = process.argv.slice(2);

// Function to generate text from file
function makeTextFromFile(filePath) {
  try {
    const text = fs.readFileSync(filePath, "utf8");
    generateMarkovText(text);
  } catch (err) {
    console.error(`Error reading file at ${filePath}:\n  ${err}`);
    process.exit(1);
  }
}

// Function to generate text from URL
async function makeTextFromURL(url) {
  try {
    const response = await axios.get(url);
    generateMarkovText(response.data);
  } catch (err) {
    console.error(`Error fetching URL at ${url}:\n  ${err}`);
    process.exit(1);
  }
}

// Function to generate and print Markov text
function generateMarkovText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

// Main logic: check if input is file or URL
if (method === "file") {
  makeTextFromFile(path);
} else if (method === "url") {
  makeTextFromURL(path);
} else {
  console.error("Invalid input. Use 'file <filepath>' or 'url <URL>'.");
  process.exit(1);
}



