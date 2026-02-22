function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value.trim();
    return value;
}


function getValueFromInnerText(id) {
    const text = document.getElementById(id);
    const value = text.innerText;
    return value;
}
function getBalance() {
    const text = document.getElementById("current-balance");
    const value = text.innerText;
    return Number(value);
}
function setBalance(value) {
    document.getElementById("current-balance").innerText = value;
}


document.getElementById("all-buttons").addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button) return;
    const targetID = button.id.slice(4);
    console.log(targetID);

    const allSections = document.querySelectorAll('#feature-sections>section')
    for (const sec of allSections) {
        sec.classList.add("hidden");
    }
    const selected = document.getElementById(targetID);
if (selected) {
    selected.classList.remove("hidden");
}else{
    alert(`didn't match with "${button.id}" sections`);
}
})
