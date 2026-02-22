function addMoneyTransactionHistory(addAmount, addBank, addAccountNum, currentBalance, newBalance) {
    const transHisContainer = document.getElementById("transaction-list");
    const transhis = document.createElement("div");
    const now = new Date();
    const formattedDate = now.toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    transhis.innerHTML = `
    <div class="flex justify-between items-center p-3 bg-base-100 rounded-xl shadow">
                    <div>
                        <p class="font-bold text-neutral">Add Money</p>
                        <p class="text-sm text-neutral/50">${formattedDate}</p>
                        <p class="font-bold text-success">+${addAmount}</p>
                    </div>
                    <input type="checkbox"
                        class="toggle border-neutral/50 bg-neutral/10 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800" />
                </div>
    `;
    transHisContainer.append(transhis);
}