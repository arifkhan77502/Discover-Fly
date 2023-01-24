const fillData = document.getElementById("fill-data");
let bookingDetails = document.getElementById("booking-details");
const flyingFrom = document.getElementById("flyingFrom");
const flyingTo = document.getElementById("flyingTo");
const departuareDate = document.getElementById("departuareDate");
const returnDate = document.getElementById("returnDate");
const bookNow = document.getElementById("bookNow");

const firstCount = document.getElementById("firstClass");
const economyCount = document.getElementById("economyClass");
const sub = document.getElementById("subTotal");
const charge = document.getElementById("charge");
const total = document.getElementById("total");


const incrementDecrement = (type, condition) => {
    let seatCount = document.getElementById(type + "Class").value;
    let totalCount = parseFloat(seatCount);

    if(condition == true){
        totalCount += 1;
    }
    else if(condition == false){
        totalCount -= 1;
    }

    document.getElementById(type + "Class").value = totalCount;

    const totalBalance = (type) => {
        let count = document.getElementById(type + "Class").value;
        let countNumber = parseFloat(count);
        return countNumber;
    }

    let first = totalBalance("first");
    let economy = totalBalance("economy");

    let subTotal = (first * 150) + (economy * 100);
    let charge = parseFloat(subTotal) * 0.1;
    let total = subTotal + parseFloat(charge);
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("charge").innerText = charge;
    document.getElementById("total").innerText = total;
}


bookNow.addEventListener("click", () => {
    bookingDetails.style.display = "block";
    fillData.style.display = "none";
    tempDiv(flyingFrom, flyingTo, departuareDate, returnDate, firstCount, economyCount, sub, charge, total);
});


const tempDiv = (flyingFrom, flyingTo, departuareDate, returnDate, firstCount, economyCount, sub, charge, total) => {
    bookingDetails.innerHTML = `
<h3>Booking Flights Details</h3>

<div class="flight-details">
    <h5>Flying From:
        <span id="fromFlying">${flyingFrom.value}</span>
    </h5>
    <h5>Flying To:
        <span id="toFlying">${flyingTo.value}</span>
    </h5>
    <h5>Departure:
        <span id="dateDaparture">${departuareDate.value}</span>
    </h5>
    <h5>Return:
        <span id="dateReturn">${returnDate.value}</span>
    </h5>
    <h5>First Class:
        <span id="first">${firstCount.value}</span>
    </h5>
    <h5>Economy:
        <span id="economy">${economyCount.value}</span>
    </h5>
</div>

<hr>

    <div class="price-vat-total">
        <h5>Subtotal:
            <span id="sub">${sub.innerText}</span>
        </h5>
        <h5>Charge 10% VAT:
            <span id="vat">${charge.innerText}</span>
        </h5>
        <h5>Total:
            <span id="final">${total.innerText}</span>
        </h5>
    </div>

    <br>

        <div class="row">
            <div class="col d-flex justify-content-end align-items-center">
                <button onclick="final()" id="confirmButton" class="btn btn-success button">Confirm</button>
            </div>
        </div>
    `
}

const final = () => {
    document.getElementById("finalPlane").style.display = "block";
    bookingDetails.style.display = "none";
}
















































































// function incrementDecrement(type, isIncrease){
//     let count = document.getElementById(type + "Class").value;
//     let countNumber = parseFloat(count);
//     let totalCount = countNumber;
    
//     if(isIncrease == true){
//         totalCount = countNumber + 1;
//     }
//     else if(isIncrease == false && countNumber > 0){
//         totalCount = countNumber -1;
//     }

//     document.getElementById(type + "Class").value = totalCount;

//     let firstClass = totalBalance("first");
//     let economyClass = totalBalance("economy");
//     let subTotal = (firstClass * 150) + (economyClass * 100);
//     document.getElementById("subTotal").innerText = subTotal;

//     let charge = subTotal * 0.1;
//     document.getElementById("charge").innerText = charge;

//     let total = subTotal - charge;
//     document.getElementById("total").innerText = total;
// }

// function totalBalance(type){
//     let count = document.getElementById(type + "Class").value;
//     let countNumber = parseFloat(count);
//     return countNumber;
// }

// document.getElementById("bookNow").addEventListener("click", function(){
//     let flyingFrom = document.getElementById("flyingFrom").value;
//     let flyingTo = document.getElementById("flyingTo").value;
//     let departuareDate = document.getElementById("departuareDate").value;
//     let returnDate = document.getElementById("returnDate").value;
//     let firstClass = document.getElementById("firstClass").value;
//     let economyClass = document.getElementById("economyClass").value;
//     let subTotal = document.getElementById("subTotal").innerText;
//     let charge = document.getElementById("charge").innerText;
//     let total = document.getElementById("total").innerText;

//     document.getElementById("fromFlying").innerText = flyingFrom;
//     document.getElementById("toFlying").innerText = flyingTo;
//     document.getElementById("dateDaparture").innerText = departuareDate;
//     document.getElementById("dateReturn").innerText = returnDate;
//     document.getElementById("first").innerText = firstClass;
//     document.getElementById("economy").innerText = economyClass;
//     document.getElementById("sub").innerText = "$" + " " + subTotal;
//     document.getElementById("vat").innerText = "$" + " " + charge;
//     document.getElementById("final").innerText = "$" + " " + total;

//     document.getElementById("fill-data").style.display = "none";
//     document.getElementById("booking-details").style.display = "block";
// })

// document.getElementById("confirmButton").addEventListener("click", function(){
//     document.getElementById("booking-details").style.display = "none";
//     document.getElementById("finalPlane").style.display = "block";
// })