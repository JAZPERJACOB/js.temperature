/* Print all the numbers from 1 to 10.*/
const listNumbersContainer = document.getElementById("list-numbers");

for (let i=1 ; i<11 ; i++) {
    listNumbersContainer.innerHTML += `<li>${i}</li>`
}

/*Print all the numbers from 10 to 1*/
const listNumbersReverseContainer= document.getElementById("list-numbers-reverse");

for (let i=10; i>0; i--){
    listNumbersReverseContainer.innerHTML+=`<li>${i}</li>`
}

/*Print all the even numbers from 1 to 10*/
const listEvenNumbersContainer= document.getElementById("evenNumbers");

for (let i=2; i<11; i+=2){
    listEvenNumbersContainer.innerHTML+=`<li>${i}</li>`
}

/*Print the multiplication table for 5,from 1 to 100*/
const multiplicationContainer= document.getElementById("multiplicationTable");

for (let i=1; i<101; i++){
    let result=5*i;
    multiplicationContainer.innerHTML+=`<li>5 x ${i}= ${result}</li>`
}