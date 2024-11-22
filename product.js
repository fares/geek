// Function to collect 4 products from the user and display them
function collectAndDisplayProducts() {
    var products = [];
    var totalPrice = 0;
    // Collect 4 products
    for (var i = 0; i < 4; i++) {
        var name_1 = prompt("Enter the name of product ".concat(i + 1, ":"));
        var priceInput = prompt("Enter the price of product ".concat(i + 1, ":"));
        var price = parseFloat(priceInput || "0");
        if (name_1 && !isNaN(price)) {
            products.push({ name: name_1, price: price });
            totalPrice += price;
        }
        else {
            alert("Invalid input. Please enter a valid product name and price.");
            i--; // Retry this iteration
        }
    }
    // Generate HTML content
    var htmlContent = "<table border='1' style='width: 100%;'>";
    htmlContent += "<tr><th>Product Name</th><th>Price</th></tr>";
    products.forEach(function (product) {
        htmlContent += "<tr><td>".concat(product.name, "</td><td>$").concat(product.price.toFixed(2), "</td></tr>");
    });
    htmlContent += "<tr><td><strong>Total</strong></td><td><strong>$".concat(totalPrice.toFixed(2), "</strong></td></tr>");
    htmlContent += "</table>";
    // Display in the HTML page
    var resultDiv = document.getElementById("result4");
    if (resultDiv) {
        resultDiv.innerHTML = htmlContent;
    }
    else {
        alert("Error: Unable to find result container.");
    }
}
var button = document.getElementById("collectProducts");
if (button) {
    button.addEventListener("click", collectAndDisplayProducts);
}
else {
    console.error("Button with ID 'collectProducts' not found.");
}
// Function to validate email addresses using a standard regex
function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
// Function to prompt for email, validate, and display the result
function checkEmail() {
    var userEmail = prompt("Please enter your email address:");
    // Locate the result container
    var resultDiv = document.getElementById("result5");
    // If the user provided an email
    if (userEmail) {
        if (isValidEmail(userEmail)) {
            if (resultDiv) {
                resultDiv.innerHTML = "<p style=\"color: green;\">\"".concat(userEmail, "\" is a valid email address.</p>");
            }
        }
        else {
            if (resultDiv) {
                resultDiv.innerHTML = "<p style=\"color: red;\">\"".concat(userEmail, "\" is not a valid email address.</p>");
            }
        }
    }
    else {
        // Handle case where user cancels or doesn't enter anything
        alert("No email was entered.");
    }
}
// Attach the function to the button click event
var button2 = document.getElementById("checkEmailBtn");
if (button2) {
    button2.addEventListener("click", checkEmail);
}
else {
    console.error("Button with ID 'checkEmailBtn' not found.");
}
