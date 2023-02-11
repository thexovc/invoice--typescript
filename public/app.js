import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 234);
docTwo = new Payment('sammy', 'plumbing work', 544);
let docs = [];
docs.push(docOne, docTwo);
// const invOne = new Invoice("mario", "work on the mario website", 250)
// const invTwo = new Invoice("luigi", "work on the luigi website", 300)
// // invOne.client = 'yoshi'
// // invTwo.amount = 740 // all property are public by default so u an change it if there is no acces modifier
// // console.log(invOne, invTwo)
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach((inv) => {
//     // inv.client = "something else" // only readonly
//     console.log(inv.client, inv.amount, "\n", inv.format())
// })
// Form selector
const form = document.querySelector(".new-item-form");
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // )
});
// GENERICS
