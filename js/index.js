// let productName = 'iPhone X';
// alert(productName);

// productName = 'Nokia 3200';
// alert(productName);

// const userName = prompt('Enter your name');
// const greetings = userName + ', hello!';

// alert(greetings);

// const userAge = parseFloat(prompt('Enter your age'));
// alert(userAge);
// // const nextAge = userAge + 1;
// const nextAge = addOne(userAge);
// alert(nextAge);

// function addOne(val) {
//     const result = val + 1;
//     return result;
// }

// Should increase price by 10%
/*function calPrice(price) {
    const result = price * 1.1;
    return result;
    
}*/

//const oldPrice = parseFloat(prompt('Enter price'));
//const newPrice = calPrice(oldPrice);
//alert(newPrice);

/*function checkAge(age) {
    if (age >= 18 && age < 100) {
        return 'You are adult';
    } else if (age > 100) {
        return 'You are middle age';
    } else {
        return 'You are kid';
    }
}*/

/*const userAge = parseInt(prompt('Enter your age'));
const message = checkAge(userAge);
alert(message);*/


function quadraticEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return 'No solution';
    } else if (discriminant == 0) {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        return 'Only one solution: X = ' + x1;
    } else {
        var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        return 'X1 = ' + x1 + ', X2 = ' + x2;
    }

}
const userName = prompt('Enter your name');
const greetings = userName + ', hello! Do you want to solve the quadratic equation? Of course, you have no choice, but it will be kind if you press "OK" button :)';
alert(greetings);
const quadraticEquationDefinition = 'Ok, let\'s define what is Quadratic Equation. \nIn algebra, a quadratic equation (from the Latin quadratus for "square") is any equation having the form ax*2+bx+c=0. where x represents an unknown, and a, b, and c represent known numbers such that a is not equal to 0.';
alert(quadraticEquationDefinition);
const solving = 'Now you can solve any quadratic equation you want. Please, enter a, b and c, and remember that a is not equal to 0.';
alert (solving);
const a = parseInt(prompt('Enter a'));
const b = parseInt(prompt('Enter b'));
const c = parseInt(prompt('Enter c'));
const message = quadraticEquation(a, b, c);

alert(message);