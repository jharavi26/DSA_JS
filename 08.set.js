// Creating a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add("hello");
mySet.add(true);

// Checking if a value exists
console.log(mySet.has(1)); // true

// Removing a value
mySet.delete("hello");

// Iterating through the Set
for (const value of mySet) {
    console.log(value);
}

// Size of the Set
console.log(mySet.size); // 2

// Clearing the Set
mySet.clear();

// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "Vishal");
myMap.set("age", 21);

// Getting a value using a key
console.log(myMap.get("name")); // Vishal

// Checking if a key exists
console.log(myMap.has("age")); // true

// Removing a key-value pair
myMap.delete("age");

// Iterating through the Map
for (const [key, value] of myMap) {
    console.log(key, value);
}

// Size of the Map
console.log(myMap.size); // 1

// Clearing the Map
myMap.clear();