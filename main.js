function incrementDecrement(type, isIncrease){
    let count = document.getElementById(type + "Class").value;
    let countNumber = parseFloat(count);
    let totalCount = countNumber;
    
    if(isIncrease == true){
        totalCount = countNumber + 1;
    }
    else if(isIncrease == false && countNumber > 0){
        totalCount = countNumber -1;
    }

    document.getElementById(type + "Class").value = totalCount;

    let firstClass = totalBalance("first");
    let economyClass = totalBalance("economy");
    let subTotal = (firstClass * 150) + (economyClass * 100);
    document.getElementById("subTotal").innerText = subTotal;

    let charge = subTotal * 0.1;
    document.getElementById("charge").innerText = charge;

    let total = subTotal - charge;
    document.getElementById("total").innerText = total;
}

function totalBalance(type){
    let count = document.getElementById(type + "Class").value;
    let countNumber = parseFloat(count);
    return countNumber;
}

document.getElementById("bookNow").addEventListener("click", function(){
    let flyingFrom = document.getElementById("flyingFrom").value;
    let flyingTo = document.getElementById("flyingTo").value;
    let departuareDate = document.getElementById("departuareDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let firstClass = document.getElementById("firstClass").value;
    let economyClass = document.getElementById("economyClass").value;
    let subTotal = document.getElementById("subTotal").innerText;
    let charge = document.getElementById("charge").innerText;
    let total = document.getElementById("total").innerText;

    document.getElementById("fromFlying").innerText = flyingFrom;
    document.getElementById("toFlying").innerText = flyingTo;
    document.getElementById("dateDaparture").innerText = departuareDate;
    document.getElementById("dateReturn").innerText = returnDate;
    document.getElementById("first").innerText = firstClass;
    document.getElementById("economy").innerText = economyClass;
    document.getElementById("sub").innerText = "$" + " " + subTotal;
    document.getElementById("vat").innerText = "$" + " " + charge;
    document.getElementById("final").innerText = "$" + " " + total;

    document.getElementById("fill-data").style.display = "none";
    document.getElementById("booking-details").style.display = "block";
})

document.getElementById("confirmButton").addEventListener("click", function(){
    document.getElementById("booking-details").style.display = "none";
    document.getElementById("finalPlane").style.display = "block";
})