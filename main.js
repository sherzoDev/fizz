var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form-control");
var elResult = document.querySelector(".form-result");
var elBtn = document.querySelector(".btn");;
var elFizz = document.querySelector(".fizz");
var elBuzz = document.querySelector(".buzz");
var elFizzBuzz = document.querySelector(".fizzbuzz");
var fizzLength = document.querySelector(".fizzLength");
var buzzLength = document.querySelector(".buzzLength");
var fizzBuzzLength = document.querySelector(".fizzBuzzLength");
var fizArr = [];
var buzArr = [];
var fizbuzArr = [];
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var elInputValue = elInput.value;
    if(elInputValue % 5 == 0 && elInputValue % 3 == 0){
        fizbuzArr.push(elInputValue);
        elFizzBuzz.textContent = fizbuzArr;
        fizzBuzzLength.textContent = fizbuzArr.length;
    }else if (elInputValue % 3 == 0){
        fizArr.push(elInputValue);
        elFizz.textContent = fizArr;
        fizzLength.textContent = fizArr.length;
    }else if (elInputValue % 5 == 0){
        buzArr.push(elInputValue);
        elBuzz.textContent = buzArr;
        buzzLength.textContent = buzArr.length;
    } else{
        false;
    };
});