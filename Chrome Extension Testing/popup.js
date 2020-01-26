  function getReliability(url) {
		return Math.round(Math.random() * 100);  	
  }
  
  chrome.storage.sync.get('color', function(data) {
  	//theirs 
  	let getInfo = document.getElementById('getInfo');
   //mine 
  });
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
 		/* Needs to be defined from server */
 		var percent = getReliability(url);
 		
 		var result = " ";
 		document.getElementById('percentage').innerHTML = percent + "%"
 		//changes color and real/fakeness depending upon percentage
 		if (percent > 75) {
 			document.getElementById('percentage').style.color = "red";
 			result = "fake";
 		} else if (percent < 25) {
 			document.getElementById('percentage').style.color = "green";	
 			result = "real";
 		} else {
 			document.getElementById('percentage').style.color = "#ffc72e";
 			result = "fake";	
 		}
 		document.getElementById('percent').innerHTML = "<p> We are " + percent + "% sure that this text is " + result
 		
 		/* redefine these vars to be info from the server */
 		var author = "Daniel B Lawson";
 		var authorCred = getReliability(url);
 		var site = "Buzzfeed";
 		var siteCred = getReliability(url);
 		var title = "Why I should rule the world";
 		var url = tabs[0].url;
 		
 		//clears old text
 		document.getElementById('info').innerHTML = "";
 		
 		//adds new info from the server
 		document.getElementById('table').style.visibility = "visible";
 		document.getElementById('author').innerHTML = author
 		document.getElementById('authorCred').innerHTML = authorCred + "%"
 		document.getElementById('site').innerHTML = site
 		document.getElementById('siteCred').innerHTML = authorCred + "%"
 		document.getElementById('title').innerHTML = title
 		document.getElementById('urlDisplay').innerHTML = "<p><b>Page URL: </b></p>" + url + "<br>"
	});
		
var logged_in_user

chrome.extension.sendMessage({}, function(response) {
  logged_in_user = response.email
});

console.log("Got user:", logged_in_user);
  