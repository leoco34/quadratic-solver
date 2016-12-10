//This program will find the real solutions of a quadratic equation
var aValue = prompt("What is the A value? (Include negatives please)");
var bValue = prompt("What is the B value? (Include negatives please)");
var cValue = prompt("What is the constant? (Include negatives please)");
var oppositeOfB = -1 * bValue;
var discriminant = Math.sqrt((bValue*bValue) - (4*aValue*cValue));
var twoA = 2*aValue;
var plusSolution = (oppositeOfB + discriminant) / twoA;
var minusSolution = (oppositeOfB - discriminant) / twoA;
if(isNaN(plusSolution) == false && isNaN(minusSolution) == false){
    if(plusSolution == minusSolution){
        alert("The solution is " + plusSolution);
    }else{
    alert("The solutions are " + plusSolution + " and " + minusSolution);
    }
}
if(isNaN(plusSolution) == true && isNaN(minusSolution) == true){
    alert("There are no real solutions");
}