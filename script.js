// Global object
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Function to check if key exists in the global object
function hasKey(key) {
  // Check if the key exists in the sampleObject
  return key in sampleObject;
}

// Prompt for user input
const key = prompt("Enter Key.");

// Display result using alert
alert(hasKey(key));
