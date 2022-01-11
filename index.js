//Declaration
let person = {
    name: 'Mosh',
    age: 30
};

//Dot notation
person.age = 23;
person.name = 'John';
//Bracket notation
let select = 'name';
person[select] = 'Mary';

console.log(person.name);

//Array
let selectedColors = ['red', 'blue'];  
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

//Function
function greet(name, lastname) {
    console.log('Hey '+ name + ' ' + lastname);
}

//Calculates a value
function sqaure(number){
    return number * number;
}

console.log(sqaure(9));
greet('Pranav', 'Deshmukh');