document.getElementById("withdraw-btn").addEventListener("click", function () {

    // 1. Get values
    const agentNumber = getValueFromInput("agent-number")
    const amount = getValueFromInput("amount");
    const pin = getValueFromInput("cash-out-pin");
    let currentBalance = getBalance();

    // 2. Validate Agent Number
    if (agentNumber.length !== 11) {
        alert("Agent number must be 11 digits.");
        return;
    }

    // 3. Validate Amount
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    // 4. Check Balance
    if (amount > currentBalance) {
        alert("Insufficient balance.");
        return;
    }

    // 5. Validate PIN
    if (pin !== "0011") {
        alert("Incorrect PIN.");
        return;
    }

    // 6. Process Withdraw
    currentBalance -= amount;
    setBalance(currentBalance);

    alert("Withdraw Successful!");
});