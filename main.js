#!/usr/bin/env node
import inquirer from "inquirer";
// initialize user balance and pin code
let myBalance = 10000;
let myPin = 1234;
//  Print wellcome message
console.log("Wellcome to ATM Machine-2024");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code, Login successfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current balance is:${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
