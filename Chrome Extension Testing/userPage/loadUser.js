function GenerateTable() {
        //Build an array containing Customer records.
        var sites = new Array();
        var jsonArray = new Array();
        //testing json array
        var json1 = '{"website": "BBC", "Title": "Dan doing bad things", "URL": "www.com", "Percent": 95.7}';
			for(int i = 0; i < 7; i++) {
				var obj = JSON.parse(json1);
				jsonArray.push([obj.website, obj.title, obj.url, obj.percent]);
			}

        sites.push(["Website", "Title", "Url", "Percent"]);
        sites.push(["Buzzfeed", "Why Dan should rule the world", "buzzfeed.com", 98.5]);
        for(var i = 0 i < jsonArray.length; i++) {
        		var obj = JSON.parse(jsonArray[i]);
        		sites.push([obj.website, obj.title, obj.url, obj.percent]);
        }

 
        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
 
        //Get the count of columns.
        var columnCount = sites[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = sites[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < sites.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = sites[i][j];
            }
        }
 
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }