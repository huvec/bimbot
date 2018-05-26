console.log("starting google search")
const request = require('request');
const PORT = process.env.PORT || 3000;
const google = require('googleapis');
const customsearch = google.customsearch('v1');
const SEARCH = ('./webhook.js')

// You can get a custom search engine id at
// https://www.google.com/cse/create/new
const CX = '014878142412498792090:x4uq_1z2auc';
const API_KEY = 'AIzaSyBH8gMWqTsolhVL7s5NlDkbVDY0Dbozq4g';
const SEARCHTERM = 'webhook.SEARCSE';

customsearch.cse.list({ cx: CX, q: SEARCH, auth: API_KEY }, function (err, resp) {
  if (err) {
    return console.log('An error occured', err);
  }
  // Got the response from custom search
  console.log('Result: ' + resp.searchInformation.formattedTotalResults);
  if (resp.items && resp.items.length > 0) {
    //console.log('First result name is ' + resp.items[0].title +
    //' ' + resp.items[0].link + ' '+ resp.items[0].snippet);
    console.log(Object.entries(resp.items[0]))
    console.log('Files:');
    for (var i = 0; i < 10; i++) {
      var file = resp.items[i];
      //console.log('%s (%s)', i, resp.items[i].title, resp.items[i].link);
      //('%s (%s)', i, file.name, file.webViewLink);
      //exports.newfiles = JSON.stringify(file);
    }
  }
  //export resp.items
    var searchResults = resp.items;
    module.exports = searchResults;
    console.log(searchResults);
    console.log('assume search results is taken out');

});
