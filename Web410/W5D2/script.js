var pizza = {
    Name: 'Pizza',
    Price: 14,
    Popularity: 'high'
}

var hamburger = {
    Name: 'Hamburger',
    Price: 8,
    Popularity: 'high'
}

var sushi = {
    Name: 'Sushi',
    Price: 5,
    Popularity: 'high'
}

var donair = {
    Name: 'Donair',
    Price: 7,
    Popularity: 'medium'
}

var friedChicken = {
    Name: 'Fried chicken',
    Price: 20,
    Popularity: 'high'
}

var cereal = {
    Name: 'Cereal',
    Price: 3,
    Popularity: 'high'
}


var meals = [pizza, hamburger, sushi, donair, friedChicken, cereal];



function fromDatatoTable(dataBase) {
    var tableCell = document.createElement('table');
    tableCell.setAttribute('id', 'myTable');
    document.getElementById('main-table').appendChild(tableCell);

    var keys = Object.keys(dataBase[0]);
    var row = document.createElement('tr');

    for (key in keys) {
            var headingCell = document.createElement('th');
                var keyValue = document.createTextNode(keys[key]);
                headingCell.appendChild(keyValue);
        row.appendChild(headingCell);
        document.getElementById('myTable').appendChild(row);
    }

    for (i in dataBase) {
        var row = document.createElement('tr');
        var line = dataBase[i];
        Object.keys(line).map(e => {
            var dataBaseNode = document.createElement('td');
            var value = document.createTextNode(line[e]);
            dataBaseNode.appendChild(value);
            row.appendChild(dataBaseNode);
            
        })
        document.getElementById('myTable').appendChild(row);
    }

}

fromDatatoTable(meals);


// event listener





var td = document.getElementById('td');
var myTable = document.getElementById('myTable');

myTable.addEventListener("mouseover", function( event ) {   

event.target.style.borderColor = 'blue';
    
    
  
  }, false);