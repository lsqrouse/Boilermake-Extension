function getReliability(url) {
		return Math.round(Math.random() * 100);  	
}
  
function doStuff(){
    //do stuff

}

let button = document.getElementById('button');
button.onclick = function (element) {
	var url = document.getElementById("urlText").value;
	if(url == "" || url == null) {
		alert("Please input a URL");
	}	else {
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
 		document.getElementById('percent').innerHTML = "We are " + percent + "% sure that this text is " + result
 		
 		/* redefine these vars to be info from the server */
 		var author = "Daniel B Lawson";
 		var authorCred = getReliability(url);
 		var site = "Buzzfeed";
 		var siteCred = getReliability(url);
 		var title = "Why I should rule the world";
 		
 		//clears old text
 		 		 		document.getElementById('form').innerHTML = "";
 		//adds new info from the server
 		document.getElementById('table').style.visibility = "visible";
 		document.getElementById('author').innerHTML = author
 		document.getElementById('authorCred').innerHTML = authorCred + "%"
 		document.getElementById('site').innerHTML = site
 		document.getElementById('siteCred').innerHTML = authorCred + "%"
 		document.getElementById('title').innerHTML = title
 		document.getElementById('urlDisplay').innerHTML = "<p><b>Page URL: </b></p>" + url + "<br>"
 	}
}