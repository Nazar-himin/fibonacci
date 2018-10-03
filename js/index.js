const num = parseFloat(prompt('What number of Fibonacci do you search?'));
alert("for method " + fiboFor(num));



function fiboFor(num) {
    let fibOne = 1, fibTwo = 1;
    for(let i = 3; i <= num; i++){
    let fibNextNum = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = fibNextNum;
}
return fibTwo;
}