#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.30,
    SAR: 3.75,
    AED: 3.67,
    PKR: 277.54,
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: "Select The Currency You Want To Change",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "SAR", "AED", "PKR"]
    },
    {
        name: "to",
        message: "Select The Currency You Want Your Amount To Be Converted In",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "SAR", "AED", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = Currency[userAns.from];
let toAmount = Currency[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount * 10) / 10);
