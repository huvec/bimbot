'use strict';
console.log('what is happening.');
const Restify = require('restify');
const Restifyplugins= require('restify').plugins
const server = Restify.createServer({
  name: "BIMhelper"
});
const request = require('request');
const PORT = process.env.PORT || 3000

server.use(Restify.plugins.acceptParser(server.acceptable));
server.use(Restify.plugins.queryParser());
server.use(Restify.plugins.bodyParser());

const custSearch = JSON.stringify(result.parameters.RefManObject)
module.exports = custSearch
const cseResult = require('./search_cse.js')

//POST route handler
server.post('/', function (req, res, next) => {
  let {
    status,
    result
  } = req.body;
  // Reference Manual Search
  if(status.code === 200 && result.action === 'REFMANUAL') {
    // const {
    //   RefManAction,
    //   RefManAction1,
    //   RefManObject,
    //   RefManObject1
    // } = result.parameters;

// test results.
    let responseText1 = searchRefManual;
      res.json({
        speech: responseText1,
        displayText: responseText1,
        source: "BIMhelper-webhook"
      });

  }

// download revit skillsets
  if(status.code === 200 && result.action === 'RevitSkills') {
// test results.
      let responseText4 = 'I am downloaidng it for you now' ;
        res.json({
          speech: responseText4,
          displayText: responseText4,
          source: "BIMhelper-webhook"
        });

  }


//const custSearch = JSON.stringify(result.resolvedQuery)
  if(status.code === 200 && result.action === 'modelhelp') {
  // test results.
    let responseText2 = 'custSearch';
      res.json({
        speech: responseText2,
        displayText: responseText2,
        source: "BIMhelper-webhook"
      });

    }

//const webSearch = JSON.stringify(result.resolvedQuery)
  if(status.code === 200 && result.action === 'input.unknown') {
  // test results.
    let responseText3 = webSearch;
      res.json({
        speech: responseText3,
        displayText: responseText3,
        source: "BIMhelper-webhook"
      });

    }

  return next();
});

server.listen(PORT, () => console.log('BIMhelper running on ${PORT}'));

// const search_drive = require('./search_drive.js');
// const SEARCH = "name contains 'consultants' AND ('0B5-L0MANx3-qM0loNGlmdC1HVVE' in parents or '0B5-L0MANx3-qVWNiWnBhTi1VM3c' in parents or '0B5-L0MANx3-qQ3lvRkJZRHNtUGM' in parents or '0B5-L0MANx3-qdE4wNHFydXVFV2c' in parents or '0B5-L0MANx3-qOWVlZFZwU0RsTm8' in parents or '0B5-L0MANx3-qOWVlZFZwU0RsTm8' in parents or '0B5-L0MANx3-qX2dSZWtKY25ROXM' in parents or '0B5-L0MANx3-qWElxZjMxNWlmMGc' in parents)";
// var listFiles = search_drive.listFiles;
// var test = require('./search_drive.js').newfiles;
//var search_drive_result = search_drive.files
//const search_cse = require('./search_cse.js');


// module.exports = SEARCH
// console.log(listFiles);
// console.log(test + 'why is it not working');
// console.log('made to the end.');
// console.log(module)
