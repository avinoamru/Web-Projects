var pizza = {
    name: 'Pizza',
    price: 14,
    popularity: 'high'
}

var hamburger = {
    name: 'Hamburger',
    price: 8,
    popularity: 'high'
}

var sushi = {
    name: 'Sushi',
    price: 5,
    popularity: 'high'
}

var donair = {
    name: 'Donair',
    price: 7,
    popularity: 'medium'
}

var friedChicken = {
    name: 'Fried chicken',
    price: 20,
    popularity: 'high'
}

var cereal = {
    name: 'Cereal',
    price: 3,
    popularity: 'high'
}


var meals = [pizza, hamburger, sushi, donair, friedChicken, cereal];

var values = [];

for (var i = 0; i < meals.length; i++){

    values = values + Object.values(meals[i]);

}



console.log(values)