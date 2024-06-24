function calculateInterest() {
    // Get values from input fields
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseInt(document.getElementById('years').value);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate simple interest
    const interest = (principal * rate * years) / 100;
    const totalAmount = principal + interest;

    // Display results
    document.getElementById('interest').innerText = `Interest Earned: $${interest.toFixed(2)}`;
    document.getElementById('total-amount').innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
}
