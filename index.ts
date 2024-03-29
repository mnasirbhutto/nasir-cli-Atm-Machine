#! /usr/bin/env node

import inquirer from "inquirer";

console.log (`Welcome to Nasir Cli ATM Machine `);
console.log("Please Use this Pin Code To Run The Program 7860");

let myBalance = 50000; //Dollars 
const myPin = 7860;
const pinAnswer = await inquirer.prompt([
    
    {   name: "pin",
        type: "number",
        message: "Please Enter your Pin Code"
    }
] );

if (pinAnswer.pin === myPin) {
console.log("Pin Code is Correct You Are Suceesfully Login")

const operationsAns = await inquirer.prompt([{
    name: "operations",
    type: "list",
    choices: ["Cash Withdraw", "Fast Cash", "Check Balance"],
    message: "Please Select The Required Service"
}])


if (operationsAns.operations === "Cash Withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                type: "number",
                message: "Enter The Amount You Want To Withdraw" 
            }
        ]
    ); 
if (amountAns.amount <= myBalance) {
        myBalance = myBalance - amountAns.amount;
        console.log (`Your Remaining Balance is: $${myBalance}`);
} else {
        console.log (`You Don't have Insufficient Balance`)
}


    } else if (operationsAns.operations === "Check Balance") {
        console.log (`Your current balance is: $${myBalance}`) 
    } 


    else if (operationsAns.operations === "Fast Cash") {
        let answer = await inquirer.prompt(
        [
            {
                name: "amountSelect",
                type: "list",
                choices: ["1000", "3000", "5000", "10000"],
                message: "Please Select Your Desired Amount"
            }
        ]
    ); 


    if (answer.amountSelect === "1000") {
        myBalance -=1000
        console.log(`Your Remaining Balacnce is: $${myBalance}`);
    } else if (answer.amountSelect === "3000") {
        myBalance -=3000
        console.log(`Your Remaining Balacnce is: $${myBalance}`);

     } else if (answer.amountSelect === "5000") {
        myBalance -=5000
        console.log(`Your Remaining Balacnce is: $${myBalance}`);
     } else if (answer.amountSelect === "10000") {
        myBalance -=10000
        console.log(`Your Remaining Balacnce is: $${myBalance}`);
     } 
    } 
}

    else {
            console.log("Incorrect Pin Code Please Try Again")
        }
console.log(`Thank You For Using My CLI ATM Machine`)