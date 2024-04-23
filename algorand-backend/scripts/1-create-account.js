import algosdk from "algosdk";



const myaccount =algosdk.generateAccount();
console.log("Account created. Save address & mnemonic!");
console.log("Account Address ="+ myaccount.addr);
let account_mnemonic =algosdk.secretKeyToMnemonic(myaccount.sk);
console.log("Account Mnemonic =" +account_mnemonic)



