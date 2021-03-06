document.getElementById("mainBody").addEventListener("load", GenerateTable());
    
function GenerateTable() {
        //Build an array containing Customer records.
        console.log("here");
        var jsonArray = new Array();
        jsonArray.push(["Website", "Title","Author", "URL", "Rating"])
        var json1 = '{"website": "BBC", "title": "Dan doing bad things", "author": "Dan", "url": "www.com", "percent": 95.7}';
        var obj = JSON.parse(json1);
				jsonArray.push([obj.website, obj.title, obj.author, obj.url, obj.percent]);
				jsonArray.push([obj.website, obj.title, obj.author, obj.url, obj.percent]);
				jsonArray.push([obj.website, obj.title, obj.author, obj.url, obj.percent]);

        //Create a HTML Table element.
        var table = document.createElement("TABLE");
        table.border = "1";
 
        //Get the count of columns.
        var columnCount = jsonArray[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = jsonArray[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < jsonArray.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = jsonArray[i][j];
            }
        }
 
        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }