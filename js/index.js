function quadraticEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return 'Oooops! No solution, because discriminant is negative,';
    } else if (discriminant == 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        return 'Only one solution: X = ' + x1 + ', because discriminant is equal to 0';
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        return 'Congratulation! X1 = ' + x1.toFixed(1) + ', X2 = ' + x2.toFixed(1);
    }
}
const userName = prompt('Enter your name');
const greetings = userName + ', hello! Do you want to solve the quadratic equation? Of course, you have no choice, but it will be kind if you press "OK" button :)';
alert(greetings);
const quadraticEquationDefinition = 'Ok, let\'s define what is Quadratic Equation. \nIn algebra, a quadratic equation (from the Latin quadratus for "square") is any equation having the form ax^2+bx+c=0. where x represents an unknown, and a, b, and c represent known numbers such that a is not equal to 0.';
alert(quadraticEquationDefinition);
const solving = 'Now you can solve any quadratic equation you want. Please, enter a, b and c, and remember that a is not equal to 0.';
alert (solving);

const a = parseInt(prompt('Enter a'));
if (a == 0) {
    alert("Please, a must be not equal to 0!");
    const a = parseInt(prompt('Enter a'));
    const b = parseInt(prompt('Enter b'));
    const c = parseInt(prompt('Enter c'));
    const message = quadraticEquation(a, b, c);
    alert(message);
}    else {

const b = parseInt(prompt('Enter b'));
const c = parseInt(prompt('Enter c'));
const message = quadraticEquation(a, b, c);
alert(message);
}

 

 
