// Function to calculate and display sum and average
document.getElementById('taskButton').addEventListener('click', function() {
    // Get 6 numbers from the user
    let numbers = [];
    for (let i = 0; i < 6; i++) {
        let num = parseFloat(prompt(`Enter   your  number ${i + 1} value :`));
        while (isNaN(num)) {
            num = parseFloat(prompt(`Please enter a valid number for number ${i + 1} value : `));
    if (num === null) {
    alert("You cancelled the input. Exiting...");
     return;  // Stop further execution
        }}
        numbers.push(num);
    }

    // Calculate sum and average
    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / numbers.length;

    // Display the results under the product list
    document.getElementById('results').innerHTML = 
    `
        
        <h2>Task 2 Results</h2>
        
        <p>You Entered:${numbers}</p>
        <p>Sum: ${sum}</p>
        <p>Average: ${average}</p>
    `;
});

document.getElementById('taskButton3').addEventListener('click', function() {
    let strings = [];
    
    // Get 6 strings from the user
    for (let i = 0; i < 6; i++) {
        let str = prompt(`Enter string ${i + 1}:`);
        
        // If user clicks "Cancel", exit the process
        if (str === null) {
            alert("You clicked Cancel. Exiting...");
            return;
        }

        strings.push(str);
    }

    // Remove duplicates using a Set
    let uniqueStrings = [...new Set(strings)];

    // Display the results in result2 div
    document.getElementById('result2').innerHTML = `
        <h2>Task 3 Results</h2>
        <p> You Entered : ${strings}</p>
        <p>Unique Strings: ${uniqueStrings.join(', ')}</p>
    `;
});

