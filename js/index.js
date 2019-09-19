const num = parseInt(prompt('What number of Fibonacci do you search?'));
alert('Loop method. Your number - ' + fiboFor(num));
alert('While method. Your number - ' + fiboWhile(num));
alert('Array method. Your number - ' + fiboArray(num));
alert('Recursive method. Your number - ' + fiboRec(num));
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
  let fibOne = 1,
    fibTwo = 1,
    counter = 3;
  while (counter <= num) {
    let fibNextNum = fibOne + fibTwo;
    fibOne = fibTwo;
    fibTwo = fibNextNum;
    counter++;
  }
  return fibTwo;
}

function fiboArray(num) {
  let fibArr = [1, 1];
  for (let i = 2; i < num; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr.pop();
}

function fiboRec(num) {
  if (num <= 2) {
    return 1;
  }
  return fiboRec(num - 1) + fiboRec(num - 2);
}
