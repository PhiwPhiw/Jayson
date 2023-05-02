function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").value = result;
}

function subNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").value = result;
}

function multiplyNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").value = result;
}

function divideNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById("result").value = result;
}

function clearValues() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}

function About() {
    var fullName = "Jayson Darryne David";
    alert("Work of " + fullName);
}

function increment() {
    var quantity = parseInt(document.getElementById("quantity").value);
    quantity++;
    document.getElementById("quantity").value = quantity;
}

function decrement() {
    var quantity = parseInt(document.getElementById("quantity").value);
    if (quantity > 0) {
        quantity--;
        document.getElementById("quantity").value = quantity;
    }
}

function calculate() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var shipping = parseFloat(document.getElementById("shipping").value);
    var shippingFee = parseFloat(document.getElementById("shipping").value);
    var totalBeforeTax = quantity * 15.97 + shipping;
    var tax = totalBeforeTax * 0.1;
    var totalOrder = totalBeforeTax + tax;
    document.getElementById("numItems").innerHTML = quantity;
    document.getElementById("totalBeforeTax").innerHTML = "$" + totalBeforeTax.toFixed(2);
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
    document.getElementById("totalOrder").innerHTML = "$" + totalOrder.toFixed(2);
    document.getElementById("shippingFee").innerHTML = "$" + shippingFee.toFixed(2);
}
