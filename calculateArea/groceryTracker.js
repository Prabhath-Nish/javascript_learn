let grocery1Amount;
let grocery2Amount;
let grocery3Amount;

function calculateGroceryAmount(){
    grocery1Amount = parseFloat(document.getElementById('grocery1Amount').value);
    grocery2Amount = parseFloat(document.getElementById('grocery2Amount').value);
    grocery3Amount = parseFloat(document.getElementById('grocery3Amount').value);

    let total = grocery1Amount + grocery2Amount + grocery3Amount;
    document.getElementById('result').innerText = `The total amount is: ${total}`;
}