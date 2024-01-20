// Function to iterate over each element in a collection
function myEach(collection, callback) {
    for (const key in collection) {
        callback(collection[key]);
    }
}

// Function to map over each element in a collection and return a new array
function myMap(collection, callback) {
    const result = [];
    myEach(collection, item => result.push(callback(item)));
    return result;
}

// Function to reduce a collection to a single value
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue === undefined ? collection[0] : initialValue;

    for (let i = initialValue === undefined ? 1 : 0; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i]);
    }

    return accumulator;
}

// Function to find a value in a collection
function myFind(collection, predicate) {
    for (const key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
    return undefined;
}

// Function to filter a collection based on a condition
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, item => {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

// Function to get the size of a collection
function mySize(collection) {
    return Object.keys(collection).length;
}

// Function to get the first n elements of a collection
function myFirst(collection, n = 1) {
    return mySlice(collection, 0, n);
}

// Function to get the last n elements of a collection
function myLast(collection, n = 1) {
    return mySlice(collection, -n);
}

// Function to get the keys of an object
function myKeys(obj) {
    return Object.keys(obj);
}

// Function to get the values of an object
function myValues(obj) {
    return Object.values(obj);
}

// Helper function to slice an array or string
function mySlice(collection, start, end) {
    return Array.isArray(collection)
        ? collection.slice(start, end)
        : collection.substring(start, end);
}
