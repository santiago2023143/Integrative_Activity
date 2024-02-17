var xttp = new XMLHttpRequest();

xttp.onload = function(){
  var response = JSON.parse(this.responseText);
  console.log(response);
  
  var tableBody = document.getElementById('tableBody');
  
  response.forEach(function(item) {
    var row = document.createElement('tr');
    var idCell = document.createElement('td');
    var titleCell = document.createElement('td');
    var bodyCell = document.createElement('td');
    
    idCell.textContent = item.id;
    titleCell.textContent = item.title;
    bodyCell.textContent = item.body;
    
    row.appendChild(idCell);
    row.appendChild(titleCell);
    row.appendChild(bodyCell);
    
    tableBody.appendChild(row);
  });
}
xttp.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xttp.send();
// jsonplaceholder.typicode.com
