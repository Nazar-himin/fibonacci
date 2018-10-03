const num = parseFloat(prompt('What number of Fibonacci do you search?'));
alert("for method. Your number - " + fiboFor(num));
alert("while method. Your number - " + fiboWhile(num));
alert("reduce method. Your number - " + fiboReduce(num));
alert("array method. Your number - " + fiboArray(num));


function fiboFor(num) {
    let fibOne = 1,
        fibTwo = 1;
    for (let i = 3; i <= num; i++) {
        let fibNextNum = fibOne + fibTwo;
        fibOne = fibTwo;
        fibTwo = fibNextNum;
    }
    return fibTwo;
}

function fiboWhile(num) {
    let fibOne = 1, fibTwo = 1, counter = 3;
    while (counter <= num) {
        let fibNextNum = fibOne + fibTwo;
        fibOne = fibTwo;
        fibTwo = fibNextNum;
        counter++;
        
    }
    return fibTwo;
}

function fiboReduce(num) {
    let fiboRed = [1, 1];
    for (let i = 3; i <= num; i++) {
       let sum = fiboRed[0] + fiboRed[1];
       fiboRed[0] = fiboRed[1];
       fiboRed[1] = sum;
    }
    return fiboRed.reduce( (acc, el) => el );    
}

function fiboArray(num) {
    let fibArr = [1, 1];
    for (let i = 3; i <= num; i++) {
        let sum = fibArr[0] + fibArr[1];
        fibArr[0] = fibArr[1];
        fibArr[1] = sum;
    }
    return fibArr[1];
}