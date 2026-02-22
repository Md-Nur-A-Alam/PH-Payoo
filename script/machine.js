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
function setBalance(value){
    document.getElementById("current-balance").innerText = value;
}