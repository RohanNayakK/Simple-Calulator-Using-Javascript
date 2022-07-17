let num1
let num2

function getValues(){
    num1 = document.getElementById("num1").value // "1" Valid
    num2 = document.getElementById("num2").value // "Rohan" Invalid
}
function add(){
    getValues()
    if(num1 == "" || num2 == "") {
        alert("Please enter values")
    }
    else{
        alert(Number(num1) + Number(num2))
    }
}
function sub(){
    getValues()  
    if(num1 == "" || num2 == "") {
        alert("Please enter values")
    }
    else{
        alert(Number(num1) - Number(num2))
    }
}
function mul(){
    getValues()
    if(num1 == "" || num2 == "") {
        alert("Please enter values")
    }
    else{
        alert(Number(num1) * Number(num2))
    }
}
function divide(){
    getValues()
    if(num1 == "" || num2 == "") {
        alert("Please enter values")
    }
    else{
        if(Number(num2) == 0){
            alert("Cannot divide by zero")
        }
        else{
            alert(Number(num1) / Number(num2))
        }
    }
}