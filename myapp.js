// to detect enter button
var input = document.getElementById("receiverNumber");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("buttonOne").click();
    }
});
//to detect for valid input for ALL
function validate2() {

    let receiverNumber = document.getElementsByName('receiverNumber')[0].valueAsNumber;

    let amount = document.getElementsByName('amountSendMoney')[0].valueAsNumber;

    let OTP = document.getElementsByName('OTP')[0].valueAsNumber;

    if (validateAmount(amount) && validateReceiverNumber(receiverNumber) && validateOTP(OTP)) {
        console.log("success");
        window.location = 'https://naymulhulk.github.io/bKashSendMoney3/'
    }

    else {
        alert("Please make sure your entries are valid");
    }

}

// to detect for valid input receiver number
function validateReceiverNumber(num) {

    if (!(Number.isInteger(num))) {

        console.log("not validated.");

        alert("Sender Number cannot be decimal or void.");
        return false;

    } else if (validateInRange(num)) {

        console.log("not valid number.");

        alert("This is not a valid number");
        return false;
    }

    else {

        console.log("validated.");
        return true;
    }

}

// to detect valid number
function validateInRange(num) {

    if ((num > 1999999999) || (num < 1300000000) || ((num >= 1400000000) && (num <= 1499999999))) {
        return true;
    }

}


// to detect valid amount

function validateAmount(amount) {
    if (!Number.isInteger(amount)) {

        alert("Amount cannot be decimal value");
        return false;
    }

    else if (amount < 10) {
        alert("Amount cannot be less than 10");
        return false;
    }

    else if (amount > 25000) {
        alert("Amount cannot be more than 25000");
        return false;
    }

    else {
        console.log("Amount is valid");
        return true;
    }
}

//######################################################################
// need to check if there is sufficient balance
// need to check if receiver number is in the server as a wallet number
// need to check of the input OTP matches with the one being sent
//######################################################################

function validateOTP(OTP) {
    if (OTP < 9999) {
        alert("OTP must be of 5 digits");
        return false;
    }

    else if (OTP > 99999) {
        alert("OTP must be of 5 digits");
        return false;
    }

    else {
        console.log("OTP has been validated")
        return true;
    }
}


