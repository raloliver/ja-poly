import { calcImc } from "./imc";
import { BankAccount } from "./models/account";

const $root = document.getElementById("root");
// if the user change the order of the params?
$root.innerHTML = `Your IMC is: ${calcImc({
  height: 1.75,
  weight: 72
})}<br><br>`;

const bankAccount = new BankAccount({
  owner: "Ral Oliver",
  bank: "BLIV",
  agency: "FND",
  number: "0001"
});

$root.innerHTML += `Your bank account is: ${JSON.stringify({ bankAccount })}`;
