document.getElementById("add-money-btn")
.addEventListener("click", function(){
    const addBank = getValueFromInput("add-money-bank");
    if (addBank === "Select bank") {
        alert("Select a valid bank");
        return;
    }

    const addAccountNum = getValueFromInput("add-money-account");
    if (addAccountNum.length !== 11) {
        alert("Enter a valid 11 digit account number");
        return;
    }


    const addAmount = Number(getValueFromInput("add-money-amount"));
    if (addAmount<=0 || isNaN(addAmount)) {
        alert("Inter valid amount");
        return;
    }


    const addPin = getValueFromInput("add-money-pin");
    if (addPin.length !== 4 || addPin !=="1234") {
        alert("Enter a valid 4 digit pin");
        return;
    }
    else{
        const currentBalance = getBalance();
        const newBalance = addAmount + currentBalance;
        setBalance(newBalance);

        alert(`
            Balance added Successfully
            selected bank: ${addBank}
            selected account: ${addAccountNum}
            amount added: ${addAmount}
            `)
    }
})