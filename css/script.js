"use strict"

function calculateBMI() {
    var weight = parseFloat(document.getElementById("weightInput").value);
    var height = parseFloat(document.getElementById("heightInput").value) / 100; // convert cm to m
    var bmi = weight / (height * height);
    if(bmi>=18.5 && bmi<=24.9){
        alert("Your BMI is healthy weight.");
    }
    else if(bmi>=0 && bmi<=18.5){
        alert("Your BMI is under weight.");
    }
    else{
         alert('"Your BMI is Over weight."')
    }
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);
    }