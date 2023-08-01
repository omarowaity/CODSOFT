const input = document.querySelector(".calc-buttons");
const result = document.querySelector(".screen");
let buffer = '0';
let runningTotal = 0;
let operator;

input.addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
});


function buttonClick(value){
    //if the value passed is not a number go to the handleSybmbol function else go to handleNumber

    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    //console.log(buffer);
    result.innerText = buffer;
    
}


function handleNumber(number){
    if(buffer === '0'){
        buffer = number;
    }
    else if(buffer.length < 11){
        buffer = buffer + number;
    }
}

function handleSymbol(symbol){
    if(symbol === 'C'){
        buffer = '0';
    }
    else if(symbol === '←'){
        if(buffer.length == 1){
            buffer = '0';
        }
        else{
            buffer = buffer.substring(0,buffer.length-1);
        }  
    }

    else if(symbol === '='){
        if(operator == null)
            return; //because you need 2 numbers to do the math
        calc(parseInt(buffer));
        buffer = "" + runningTotal;
        runningTotal = 0;
    }
    else if(symbol === '+' || symbol === '-' || symbol === 'x' || symbol === '÷'){
        handleMath(symbol);
    }
}


function handleMath(value) {
  if (buffer === "0") { //if buffer is 0 any operation will give zero so don't do anything
    return;
  }

  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) { //this is the first number entered
    runningTotal = intBuffer;
  } else { //when we have a number entered already do the math
    calc(intBuffer);
  }

  operator = value; //to save the operator chosen and allow you to enter the next number
  buffer = "0";
  console.log(runningTotal);
}

function calc(intBuffer){
    if (operator === "+") {
        runningTotal += intBuffer;
    } else if (operator === "-") {
        runningTotal -= intBuffer;
    } else if (operator === "x") {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}