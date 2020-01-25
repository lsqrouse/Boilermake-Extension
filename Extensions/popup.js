let changeColor = document.getElementById('changeColor');
let div = document.getElementById("div");
  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

  changeColor.onclick = function(element) {
    fetch('http://10.184.17.40:5000/',
    { 
      //mode: 'no-cors',
    }
  )
    .then(response => response)
    .then(response  => 
      div.textContent = JSON.stringify(response)
    )
    .catch(error => div.textContent = error);
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };