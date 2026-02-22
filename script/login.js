document.getElementById("login-btn").addEventListener("click", function(){
    const mobileNumber = document.getElementById("mobile-number").value;
    
    const pin = document.getElementById("pin").value;

    if (mobileNumber==="01317631378" && pin==="1234") {
        window.location.assign("/home.html");
    }
    else{
        alert("Please enter valid info")
    }
})