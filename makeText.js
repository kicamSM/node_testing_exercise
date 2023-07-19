/** Command-line tool to generate Markov text. */

const fs = require('fs');
const process = require('process');
const axios = require('axios');
const markov = require("./markov");

// ****************************************

function generateText(text) {
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText())
  }
  
async function readURLText(url) {
    try {
        let response = await axios.get(url);
            // console.log(response.data)
            generateText(response.data)
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
  }


function readFileText(file) {
    console.log('readFileText is running')
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) {
        console.error(`Error reading ${file}: ${err}`);
        process.exit(1);
      } else {
       generateText(data)
      }
    });
  }


  let file = process.argv[3]; 
  console.log('file:', file)


  if (file.slice(0, 4) === 'http') {
    console.log('if statement is running')
    readURLText(file)
  } else {
    console.log('else statement is running')
    readFileText(file)
  }