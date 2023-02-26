
let result = document.getElementById("result");


let ac = document.getElementById("ac");

let signs = new Set(['*', '/', '+', '-']);

ac.addEventListener("click", function() {
    result.textContent = null;
})

let del = document.getElementById("del");

del.addEventListener("click", function() {
  result.textContent = result.textContent.slice(0,-1);
})

let buttons = document.querySelectorAll(".print");
buttons.forEach(button => button.addEventListener("click", function() {
  let val = button.value;
  let existingResult = result.textContent;
  let numbers = existingResult.split('+').join(',').split('-').join(',').split('*').join(',').split('/').join(',').split(',');
  let lastNumber = numbers[numbers.length - 1];
  if(existingResult == '0' && val != '.' &&  Number.isInteger(parseInt(val))) { //2
    result.textContent = val;
  } else if(result.textContent == '0.' && val == '.') {
    result.textContent = '0.';
  } else if (Number.isInteger(parseInt(existingResult[existingResult.length - 1])) == false  && existingResult[existingResult.length - 1] != '.' &&  val == '.') {
    result.textContent = existingResult + '0.'; //4
  } else if (existingResult[existingResult.length - 1] == '.' && val == '.') {

  } else if (signs.has(existingResult[existingResult.length-1]) == true && signs.has(val)) {
      result.textContent = existingResult.replace(/.$/, val);
    //result = existingResult - existingResult[existingResult-1] + val;
  } else if (new Set(lastNumber).has('.') && val == '.') {

  }
  else {
    result.textContent = existingResult + val;
  }
}));

let equal = document.getElementById("equal");
equal.addEventListener("click", function() {
  result.textContent = eval(result.textContent);
})



