// script.js

// Select elements
const tempInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertButton = document.getElementById('convert-btn');
const resultDisplay = document.getElementById('conversion-result');

// Function to enable or disable the Convert button based on form completeness
function toggleConvertButton() {
    // Check if the temperature input and both select dropdowns have a value
    if (tempInput.value && fromUnitSelect.value && toUnitSelect.value) {
        convertButton.disabled = false;  // Enable the button
    } else {
        convertButton.disabled = true;   // Disable the button
    }
}

// Event listeners to handle form inputs and check if the button can be enabled
tempInput.addEventListener('input', toggleConvertButton);  // Listen for input in the temperature field
fromUnitSelect.addEventListener('change', toggleConvertButton);  // Listen for unit change in 'From' dropdown
toUnitSelect.addEventListener('change', toggleConvertButton);  // Listen for unit change in 'To' dropdown

// Conversion functions for temperature units
function convertTemperature(temp, fromUnit, toUnit) {
    let result;
    if (fromUnit === 'C') {
        if (toUnit === 'F') {
            result = (temp * 9/5) + 32;
        } else if (toUnit === 'K') {
            result = temp + 273.15;
        } else {
            result = temp;
        }
    } else if (fromUnit === 'F') {
        if (toUnit === 'C') {
            result = (temp - 32) * 5/9;
        } else if (toUnit === 'K') {
            result = (temp - 32) * 5/9 + 273.15;
        } else {
            result = temp;
        }
    } else if (fromUnit === 'K') {
        if (toUnit === 'C') {
            result = temp - 273.15;
        } else if (toUnit === 'F') {
            result = (temp - 273.15) * 9/5 + 32;
        } else {
            result = temp;
        }
    }
    return result.toFixed(2);  // Return the result rounded to 2 decimal places
}

// Handle form submission to convert the temperature
document.getElementById('temp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const tempValue = parseFloat(tempInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    const convertedTemp = convertTemperature(tempValue, fromUnit, toUnit);

    resultDisplay.innerText = `${tempValue}° ${fromUnit} is equal to ${convertedTemp}° ${toUnit}`;
});
