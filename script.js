function decimalToBinary(num) {
  if (num === 0) {
    return '0';
  }

  let binary = '';
  while (num > 0) {
    // Get the remainder when dividing by 2 (0 or 1)
    const remainder = num % 2;
    
    // Add the remainder to the binary string
    binary = remainder + binary;

    // Update the number to the quotient of the division
    num = Math.floor(num / 2);
  }

  return binary;
}

// Export the function for use in the browser
window.decimalToBinary = decimalToBinary;

