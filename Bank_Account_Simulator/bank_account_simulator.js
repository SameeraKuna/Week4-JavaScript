// Bank Account Simulator
// Operations:
// deposit(amount)
// withdraw(amount)
// checkBalance()
// Balance updates:
// newBalance = balance + amount
// newBalance = balance − amount

let balance = 0;
// Deposit function
function deposit() {
    let amount = Number(document.getElementById("amountInput").value);

    if (amount > 0) {
        balance = balance + amount;   // newBalance = balance + amount
        document.getElementById("balanceDisplay").textContent =
            "Current Balance: ₹" + balance;
    } else {
        alert("Enter a valid amount");
    }

    document.getElementById("amountInput").value = "";
    document.getElementById("balanceDisplay").textContent ="";
            
}
// Withdraw Function
function withdraw() {
    let amount = Number(document.getElementById("amountInput").value);

    if (amount > 0) {
        if (amount <= balance) {
            balance = balance - amount;  // newBalance = balance - amount
            document.getElementById("balanceDisplay").textContent =
                "Current Balance: ₹" + balance;
        } else {
            alert("Insufficient balance");
        }
    } else {
        alert("Enter a valid amount");
    }

    document.getElementById("amountInput").value = "";
    document.getElementById("balanceDisplay").textContent ="";
}
// Checkbalce function
function checkBalance() {
    document.getElementById("balanceDisplay").textContent =
        "Current Balance: ₹" + balance;
}
