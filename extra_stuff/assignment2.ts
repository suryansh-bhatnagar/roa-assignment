type Location = 'A' | 'B' | 'C' | 'D' | 'W';
interface Trip {
    pickups: Location[];
    dropoffs: Location[];
}

// Example data
const trips: Trip[] = [
    { pickups: ['A'], dropoffs: ['W'] }, // Pick up from A and drop off at Warehouse
    { pickups: ['B'], dropoffs: ['W'] }, // Pick up from B and drop off at Warehouse
    { pickups: ['W'], dropoffs: ['C'] }, // Pick up from Warehouse and drop off at C
    { pickups: ['W'], dropoffs: ['D'] }  // Pick up from Warehouse and drop off at D
];

/**
 * Validates a series of trips to ensure all items picked up and dropped off are accounted for correctly.
 * @param trips Array of trips, each with specified pickups and dropoffs.
 * @returns boolean True if all trips are valid, false otherwise.
 */
function validateTrips(trips: Trip[]): boolean {
    // Initialize storage record to keep track of items at each location.
    const storage: Record<Location, number> = { A: 0, B: 0, C: 0, D: 0, W: 0 };

    // Process each trip in the list
    for (const trip of trips) {
        // Increase storage count for each pickup in the trip
        for (const pickup of trip.pickups) {
            storage[pickup]++;
        }
        // Decrease storage count for each dropoff in the trip
        for (const dropoff of trip.dropoffs) {
            storage[dropoff]--;
        }
    }

    // Check if all items are at their correct final destinations
    // Items should be zero at initial locations and the warehouse
    // Negative values at destination locations indicate successful delivery
    return storage['C'] === -1 && storage['D'] === -1 && storage['A'] === 0 && storage['B'] === 0 && storage['W'] === 0;
}

console.log("Are the trips valid?", validateTrips(trips));
