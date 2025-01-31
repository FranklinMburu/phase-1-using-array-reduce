const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here



// Use reduce() to sum the values of batteryBatches
const totalBatteries = batteryBatches.reduce((accum, current) => accum + current, 0);

// Export the result for testing
module.exports = {
  totalBatteries
};
