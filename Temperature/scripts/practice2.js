//console.log("Practice 2");
//let myName=prompt("Enter your Name");
//console.log(myName);

//step 1: create the function
function sum(){
    let num1=Number (prompt("Enter the number 1"));
    let num2=Number (prompt("Enter the number 2"));

    let total= num1+num2
    console.log(total);

    document.getElementById("results").innerHTML=`<p>${total}</p>`;
}

function subs(){
    let num1=Number (prompt("Enter the number 1"));
    let num2=Number (prompt("Enter the number 2"));

    let total= num1-num2
    console.log(total);

    document.getElementById("results").innerHTML=`<p>${total}</p>`;
}

// step 2: call/run

sum();