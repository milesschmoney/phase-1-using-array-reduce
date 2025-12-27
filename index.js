// DO NOT change this variable name
const batteryBatches = [
  { type: "AA", count: 12 },
  { type: "AAA", count: 24 },
  { type: "C", count: -5 }
];

// Use reduce() to get the total number of batteries
const totalBatteries = batteryBatches.reduce((sum, batch) => {
  return sum + batch.count;
}, 0);

module.exports = {
  totalBatteries
};

